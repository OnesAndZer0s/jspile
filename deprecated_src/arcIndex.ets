import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";
// webpack
// browserify
// http://dean.edwards.name/packer/
// webpack with different targets
// webpack + uglify
// https://github.com/javascript-obfuscator/javascript-obfuscator
// https://github.com/ben-sb/javascript-deobfuscator
// terser
// https://lelinhtinh.github.io/de4js/
export function unpack( input, output, opts ) {
  // fs.existsSync( input )


  var ast = typeof input === "object" && typeof input.type === "string" ?
    input :
    parse( input, { ecmaVersion: 2019 } );

  // try parse, if not, then error and say that it may not be a js bundle.

  if ( opts && opts.source ) 
    input = opts.source;
  

  if ( input && Buffer.isBuffer( input ) ) 
    input = input.toString();
  

  // nullify source if a parsed ast was given in the first parameter
  if ( ast === input ) 
    input = null;
  

  assert( !input || typeof input === "string", "webpack-unpack: source must be a string or Buffer" );

  var meta = unpackRuntimePrelude( ast );

  if ( !meta ) meta = unpackJsonpPrelude( ast );
  if ( !meta ) return;

  var entryId = meta.entryId,
      factories = meta.factories;

  if ( !factories.every( isFunctionOrEmpty ) ) 
    return;
  

  var modules = [];

  for ( var i = 0; i < factories.length; i++ ) {
    var factory = factories[ i ];

    if ( factory.factory === null ) continue;

    scan.crawl( factory.factory );
    // If source is available, rewrite the require,exports,module var names in place
    // Else, generate a string afterwards.
    var range = getModuleRange( factory.factory.body ),
        moduleSource = rewriteMagicIdentifiers( factory.factory,
          input ? input.slice( range.start, range.end ) : null,
          range.start );

    if ( !moduleSource ) 
      moduleSource = generate( {
        type: "Program",
        body: factory.factory.body.body
      } );
    

    var deps = getDependencies( factory.factory );

    modules.push( {
      id: factory.index,
      source: moduleSource,
      deps: deps,
      entry: factory.index === entryId
    } );
  }

  return modules;
}

function unpackRuntimePrelude( ast ) {
  // !(prelude)(factories)
  if ( ast.body[ 0 ].type !== "ExpressionStatement" ||
      ast.body[ 0 ].expression.type !== "UnaryExpression" ||
      ast.body[ 0 ].expression.argument.type !== "CallExpression" ) 
    return;
  

  // prelude = (function(t){})
  var outer = ast.body[ 0 ].expression.argument;

  if ( outer.callee.type !== "FunctionExpression" || outer.callee.params.length !== 1 ) 
    return;
  
  var prelude = outer.callee.body,

    // Find the entry point require call.
      entryNode = find( prelude.body.slice().reverse(), node => {
        if ( node.type !== "ExpressionStatement" ) return false;
        node = node.expression;
        if ( node.type === "SequenceExpression" ) {
          var exprs = node.expressions;

          node = exprs[ exprs.length - 1 ];
        }
        return node.type === "CallExpression" &&
      node.arguments.length === 1 &&
      node.arguments[ 0 ].type === "AssignmentExpression";
      } );

  if ( entryNode ) {
    entryNode = entryNode.expression;
    if ( entryNode.type === "SequenceExpression" ) 
      entryNode = entryNode.expressions[ entryNode.expressions.length - 1 ];
    
    entryNode = entryNode.arguments[ 0 ].right;
  }
  var entryId = entryNode ? entryNode.value : null;

  // factories = [function(){}]
  if ( outer.arguments.length !== 1 ||
      ( outer.arguments[ 0 ].type !== "ArrayExpression" && outer.arguments[ 0 ].type !== "ObjectExpression" ) ) 
    return;
  
  var factories = getFactories( outer.arguments[ 0 ] );

  return {
    factories: factories,
    entryId: entryId
  };
}

function unpackJsonpPrelude( ast ) {
  // (prelude).push(factories)
  if ( ast.body[ 0 ].type !== "ExpressionStatement" ||
      ast.body[ 0 ].expression.type !== "CallExpression" ||
      ast.body[ 0 ].expression.callee.type !== "MemberExpression" ) 
    return;
  

  var callee = ast.body[ 0 ].expression.callee;
  // (webpackJsonp = webpackJsonp || []).push

  if ( callee.computed || callee.property.name !== "push" ) return;
  if ( callee.object.type !== "AssignmentExpression" ) return;

  var args = ast.body[ 0 ].expression.arguments;
  // ([ [bundleIds], [factories])

  if ( args.length !== 1 ) return;
  if ( args[ 0 ].type !== "ArrayExpression" ) return;
  if ( args[ 0 ].elements[ 0 ].type !== "ArrayExpression" ) return;
  if ( args[ 0 ].elements[ 1 ].type !== "ArrayExpression" && args[ 0 ].elements[ 1 ].type !== "ObjectExpression" ) return;

  var factories = getFactories( args[ 0 ].elements[ 1 ] );

  return {
    factories: factories,
    entryId: undefined
  };
}

function isFunctionOrEmpty( node ) {
  return node.factory === null || node.factory.type === "FunctionExpression";
}

function getModuleRange( body ) {
  if ( body.body.length === 0 ) 
    // exclude {} braces
    return { start: body.start + 1, end: body.end - 1 };
  
  return {
    start: body.body[ 0 ].start,
    end: body.body[ body.body.length - 1 ].end
  };
}

function rewriteMagicIdentifiers( moduleWrapper, source, offset ) {
  var magicBindings = moduleWrapper.params.map( scan.getBinding ),
      magicNames = [ "module", "exports", "require" ],
      edit = source ? multisplice( source ) : null;

  magicBindings.forEach( ( binding, i ) => {
    var name = magicNames[ i ];

    binding.getReferences().forEach( ref => {
      if ( ref === binding.definition ) return;

      ref.name = name;
      if ( edit ) edit.splice( ref.start - offset, ref.end - offset, name );
    } );
  } );

  return edit ? edit.toString() : null;
}

function getDependencies( moduleWrapper ) {
  var deps = {};

  if ( moduleWrapper.params.length < 3 ) return deps;

  var req = scan.getBinding( moduleWrapper.params[ 2 ] );

  req.getReferences().forEach( ref => {
    if ( ref.parent.type === "CallExpression" && ref.parent.callee === ref && ref.parent.arguments[ 0 ].type === "Literal" ) 
      deps[ ref.parent.arguments[ 0 ].value ] = ref.parent.arguments[ 0 ].value;
    
  } );

  return deps;
}

function find( arr, fn ) {
  for ( var i = 0; i < arr.length; i++ ) 
    if ( fn( arr[ i ] ) ) return arr[ i ];
  
}

function getFactories( node ) {
  if ( node.type === "ArrayExpression" ) 
    return node.elements.map( ( factory, index ) => {
      return { factory: factory, index: index };
    } );
  
  if ( node.type === "ObjectExpression" ) 
    return node.properties.map( prop => {
      var index;

      if ( prop.key.type === "Literal" ) 
        index = prop.key.value;
      else if ( prop.key.type === "Identifier" ) 
        index = prop.key.name;
      
      return { factory: prop.value, index: index };
    } );
  
  return [];
}
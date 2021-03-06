// import fs from "fs";
// import { unpack } from "../../src/index.js";
// import webpack from "webpack";
// import path from "path";
// import { fileURLToPath } from "url";

// function buildFixture( name, cb ) {
//   var config = path.join( path.dirname( fileURLToPath( import.meta.url ) ), "files", name, "webpack.config.js" );

//   import( config ).then( jso => {
//     webpack( jso.default ).run( ( err, stats ) => {
//       if ( err ) return cb( null, err );
//       cb( stats.compilation.assets[ "bundle.js" ].source(), stats.compilation.assets );
//     } );
//   } );

// }

// fs.rmSync(  path.normalize( `${fileURLToPath( import.meta.url )}/../../obfOut` ), { recursive: true, force:true } );
// fs.rmSync(  path.normalize( `${fileURLToPath( import.meta.url )}/../../deobfOut` ), { recursive: true, force:true } );

// fs.readdirSync( path.join( path.dirname( fileURLToPath( import.meta.url ) ), "files" ) )
//   .forEach( fle => { 
//     switch ( fle.split( "-" )[ 0 ] ){
//     case "wp":
//       buildFixture( fle, bundle => { 
//         console.log( unpack( fle, bundle ) ); 
//       } ); 
//       break;
//     }
//   } );
// buildFixture( "commonjs", ( err, bundle ) => {
//   // t.ifError( err );
//   var modules = unpack( bundle );

//   // t.ok( modules );
//   // t.equal( modules.length, 4 );
//   // t.ok( /^exports\.test=/.test( modules[ 3 ].source ) );
// } );

// test( "provide only an ast", function( t ) {
//   t.plan( 4 );
//   buildFixture( "commonjs", ( err, bundle ) => {
//     t.ifError( err );
//     var ast = require( "acorn" ).parse( bundle ),
//         modules = unpack( ast );

//     t.ok( modules );
//     t.equal( modules.length, 4 );
//     // with a ( because it's a sequenceexpression
//     t.ok( /^\(?exports\.test = /.test( modules[ 3 ].source ) );
//   } );
// } );

// test( "es modules", function( t ) {
//   t.plan( 6 );
//   buildFixture( "esmodules", ( err, bundle ) => {
//     t.ifError( err );
//     var modules = unpack( bundle );

//     t.ok( modules );
//     t.equal( modules.length, 3 ); // just 3 because of ModuleConcatenation
//     t.ok( /whatever/.test( modules[ 2 ].source ) );
//     t.ok( /require\.r/.test( modules[ 2 ].source ) );
//     t.ok( /require\.n/.test( modules[ 2 ].source ) );
//   } );
// } );

// test( "entry points", function( t ) {
//   t.plan( 5 );
//   buildFixture( "entrypoints", ( err, bundle ) => {
//     t.ifError( err );
//     var modules = unpack( bundle );

//     t.ok( modules );
//     t.equal( modules.length, 3 ); // created a multi entry point proxy module
//     var entry = modules.filter( m => { return m.entry; } )[ 0 ];

//     t.ok( /require\(1\)/.test( entry.source ) );
//     t.ok( /require\(2\)/.test( entry.source ) );
//   } );
// } );

// test( "split bundles", function( t ) {
//   t.plan( 8 );
//   buildFixture( "split", ( err, bundle, assets ) => {
//     t.ifError( err );
//     var modules = unpack( bundle ),
//         splitModules = unpack( assets[ "1.bundle.js" ].source() );

//     t.ok( modules );
//     t.ok( splitModules );
//     t.equal( modules.length, 1 );
//     t.equal( splitModules.length, 1 );
//     var entry = modules.filter( m => { return m.entry; } )[ 0 ],
//         splitEntry = splitModules[ 0 ];

//     t.ok( /require\.e/.test( entry.source ) );
//     t.ok( /require\.t/.test( entry.source ) );
//     t.ok( /console\.log/.test( splitEntry.source ) );
//   } );
// } );
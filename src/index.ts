/* eslint-disable curly */
import * as t from "@babel/types";
import * as b from "@babel/core";
import generate from "@babel/generator";

import fs, { PathLike } from "fs";
import path from "path/posix";

// something something binary tree sort?
// binary tree search
// figure out a way to go over every single path.
// also figure out logicstical sumarizations like !0 is 1 and etc
// this is going to be a mess

console.log( "done" );
export type FileDirectory = { path: PathLike, file: PathLike | File } | PathLike | File

export interface DeobfuscationOptions {
  input: FileDirectory
  output?: FileDirectory
  base?: PathLike
}

export function deobfuscate( { input, output = input + "Deobf", base = "/" }: DeobfuscationOptions ) {

  // option parsing
  base += ( base.toString()[ base.toString().length - 1 ] == "/" ) ? "" : "/";
  base = path.normalize( base.toString() );


  var parsed: b.BabelFileResult = b.transformFileSync( path.join( base, input.toString() ), { sourceType:"script" } )!;

  b.traverse( parsed as t.Node, {
    UnaryExpression( path ){
      if ( path.node.operator == "!" && t.isNumericLiteral( path.node.argument ) && [ "0", "1" ].includes( path.node.argument.extra!.raw as string ) )
        path.replaceWith( t.booleanLiteral( ( path.node.argument.extra!.raw == "0" ) ? true : false ) );
    }
  } );
  var { code } = generate( parsed as t.Node, {} );

  fs.writeFileSync( path.join( base, output.toString() ), code, { flag:"w" } );
}

deobfuscate( { base: "test/utils/samples/", input:"jquery.js" } );
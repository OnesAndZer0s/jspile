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

export type FileDirectory = { path: PathLike, file: PathLike | File } | PathLike | File

export interface DeobfuscationOptions {
  input: FileDirectory
  output?: FileDirectory
  base?: PathLike
}

export function deobfuscate( { input, output = "Deobf" + input, base = "/" }: DeobfuscationOptions ) {

  // option parsing
  base = path.normalize( base.toString() );
  base += ( base.toString()[ base.toString().length - 1 ] == "/" ) ? "" : "/";

  console.log( path.join( base, input.toString() ) );
  var parsed: t.File = b.transformFileSync( path.join( base, input.toString() ), { ast:true } )!.ast!;

  b.traverse( parsed, {
    UnaryExpression( path ){
      if ( path.node.operator == "!" && t.isNumericLiteral( path.node.argument ) && [ "0", "1" ].includes( path.node.argument.extra!.raw as string ) )
        path.replaceWith( t.booleanLiteral( ( path.node.argument.extra!.raw == "0" ) ? true : false ) );
    }
  } );
  var { code } = generate( parsed, {} );

  console.log( parsed );
  fs.writeFileSync( path.join( base, output.toString() ), code, { flag:"w" } );
  console.log( "done" );
}

deobfuscate( { base: "test/utils/samples/", input:"jQuery.js" } );
var os = require( "os" ),
    expect = require( "expect" ),
    acorn = require( "acorn" ),
    fs = require( "fs" );
var fls = fs.readdirSync( `${__dirname}/utils/files` );

describe( "file output", function(){
  [ "obf", "deobf" ].forEach( f => {
    describe( `for ${f}`, function(){
      fls.forEach( e => { 
        it( `should exist for ${e}`, function(){
          expect( fs.existsSync( `${__dirname}/${f}Out/${e}` ) ).toBe( true );
        } );
      } );
    } );
  } );
} );

console.log( { EEEEEEEEEEEEEE:true } );
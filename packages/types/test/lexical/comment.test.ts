
import Chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import * as t from "../../src";

Chai.use( chaiAsPromised );

describe( "Comments", function() {
  describe( "Single Line Comments", function() {
    // comments do not change that much with ECMA standards, so we just yoink the first one.
    var v = t.v1;

    it( "parse from string", function() {
      expect( new v.SingleLineComment( "SHIT" ).value ).to.be.string( "// SHIT" );
      expect( new v.SingleLineComment( "// SHIT" ).value ).to.be.string( "// SHIT" );
      expect( new v.SingleLineComment( " SHIT" ).value ).to.be.string( "// SHIT" );

    } );

    it( "convert to MultiLineComment", function() {
      var slc = new v.SingleLineComment( "FUCK" ),
          m = slc.toMultiLine();

      expect( m.constructor.name ).to.be.string( v.MultiLineComment.name );
      expect( m.value ).to.be.string( "/* FUCK */" );
      slc.comment = "ASS\nCUNT\nBITCH";
      expect( slc.toMultiLine().value ).to.be.string( "/* ASS\nCUNT\nBITCH */" );
      slc.comment = "/* ASS\nCUNT\nBITCH */";
      expect( slc.toMultiLine().value ).to.be.string( "/* ASS\nCUNT\nBITCH */" );
    } );

    it( "dynamically change values", function() {
      var slc = new v.SingleLineComment( "FUCK" );

      expect( slc ).to.eql( new v.SingleLineComment( "FUCK" ) );
      slc.value = "// FUCKASS";
      expect( slc ).to.eql( new v.SingleLineComment( "// FUCKASS" ) );
      slc.spaced = false;
      expect( slc ).to.eql( new v.SingleLineComment( "//FUCKASS" ) );
      slc.value = " SHIT";
      expect( slc ).to.eql( new v.SingleLineComment( "// SHIT" ) );

    } );

  } );
} );
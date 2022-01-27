
import Chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import * as t from "../../src";

Chai.use( chaiAsPromised );

describe( "Comments", function() {
  describe( "Single Line Comments", function(){
    // comments do not change that much with ECMA standards, so we just yoink the first one.
    var v = t.v1,
        slc = new v.SingleLineComment( "test" );

    it( "should deal with new comment", function(){
      slc.comment = "SHIT";
      expect( slc.value ).to.be.string( "// SHIT" );
    } );

    it( "should convert to MultiLineComment", function(){
      slc.comment = "FUCK";
      var m = slc.toMultiLine();

      expect( m.constructor.name ).to.be.string( v.MultiLineComment.name );
      expect( m.value ).to.be.string( "/* FUCK */" );
      slc.comment = "ASS\nCUNT\nBITCH";
      m = slc.toMultiLine();
      expect( m.value ).to.be.string( 
        `/* 
         ASS
         CUNT
         BITCH 
         */`
      );

    } );

    it( "should convert to DocComment", function(){
      expect( slc.toDoc() ).to.be.string( v.DocComment.name );
      expect( slc.toDoc() ).to.be.string( v.DocComment.name );
      expect( slc.toDoc() ).to.be.string( v.DocComment.name );

    } );

  } );
} );
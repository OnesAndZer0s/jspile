
import Chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import * as t from "../src";

Chai.use( chaiAsPromised );

describe( "v1 Literals", function() {
  const v = t.v1;

  describe( "NullLiteral", function() {
    var nullVariable = new v.NullLiteral();

    it( "convert to string", function() {
      expect( nullVariable.toString().value ).to.be.equal( "null" );
    } );
    it( "convert to number", function() {
      expect( nullVariable.toNumber().value ).to.be.equal( 0 );
    } );
    it( "convert to a boolean", function() {
      expect( nullVariable.toBoolean().value ).to.be.false;
    } );
  } );

  describe( "UndefinedLiteral", function() {
    var undefinedVariable = new v.UndefinedLiteral();

    it( "convert to string", function() {
      expect( undefinedVariable.toString().value ).to.be.equal( "undefined" );
    } );
    it( "convert to number", function() {
      expect( undefinedVariable.toNumber().value ).to.be.NaN;
    } );
    it( "convert to a boolean", function() {
      expect( undefinedVariable.toBoolean().value ).to.be.false;
    } );
  } );

  describe( "StringLiteral", function() {
    var stringVariable = new v.StringLiteral( "ASS" );

    it( "convert to number", function() {
      expect( stringVariable.toNumber().value ).to.be.NaN;
    } );
    it( "convert to a boolean", function() {
      expect( stringVariable.toBoolean().value ).to.be.true;
    } );
  } );

  describe( "NumberLiteral", function() {
    var numberVariable = new v.NumericLiteral( 69420 );

    it( "can convert to string", function() {
      expect( numberVariable.toString().value ).to.be.equal( "69420" );
    } );
    it( "can convert to a boolean", function() {
      expect( numberVariable.toBoolean().value ).to.be.true;
    } );
  } );
} );

import Chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
import * as types from "../src";

Chai.use( chaiAsPromised );

describe( "@jspile/types", function() {
  describe( "NullLiteral", function() {
    var nullVariable = new types.NullLiteral();

    it( "can convert to string", function() {
      expect( nullVariable.toString().value ).to.be.equal( "null" );
    } );
    it( "can convert to number", function() {
      expect( nullVariable.toNumber().value ).to.be.equal( 0 );
    } );
    it( "can convert to a boolean", function() {
      expect( nullVariable.toBoolean().value ).to.be.false;
    } );
  } );

  describe( "UndefinedLiteral", function() {
    var undefinedVariable = new types.UndefinedLiteral();

    it( "can convert to string", function() {
      expect( undefinedVariable.toString().value ).to.be.equal( "undefined" );
    } );
    it( "can convert to number", function() {
      expect( undefinedVariable.toNumber().value ).to.be.NaN;
    } );
    it( "can convert to a boolean", function() {
      expect( undefinedVariable.toBoolean().value ).to.be.false;
    } );
  } );

  describe( "StringLiteral", function() {
    var stringVariable = new types.StringLiteral( "testing" );

    it( "can convert to number", function() {
      expect( stringVariable.toNumber().value ).to.be.equal( 1 );
    } );
    it( "can convert to a boolean", function() {
      expect( stringVariable.toBoolean().value ).to.be.true;
    } );
  } );

  describe( "NumberLiteral", function() {
    var numberVariable = new types.NumericLiteral( 69420 );

    it( "can convert to string", function() {
      expect( numberVariable.toString().value ).to.be.equal( "69420" );
    } );
    it( "can convert to a boolean", function() {
      expect( numberVariable.toBoolean().value ).to.be.true;
    } );
  } );
} );
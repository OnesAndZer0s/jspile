// @TODO quote https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf numbskull
export interface ILiteral {
  get value(): any // { return this._value; };
  toNumber(): NumericLiteral; // { return new NumericLiteral( new Number( this._value ).valueOf() ); }
  toString(): StringLiteral; // { return new StringLiteral( new String( this._value ).valueOf() ); }
  toBoolean(): BooleanLiteral; // { return new BooleanLiteral( new Boolean( this.value ).valueOf() ); }

}

export class NullLiteral implements ILiteral {
  constructor(){}
  get value(): null { return null; }
  toNumber(): NumericLiteral { return new NumericLiteral( new Number( null ).valueOf() ); }
  toString(): StringLiteral { return new StringLiteral( new String( null ).valueOf() ); }
  toBoolean(): BooleanLiteral { return new BooleanLiteral( new Boolean( null ).valueOf() ); }
}

export class UndefinedLiteral implements ILiteral {
  constructor(){}
  get value(): undefined { return undefined; }
  toNumber(): NumericLiteral { return new NumericLiteral( new Number( undefined ).valueOf() ); }
  toString(): StringLiteral { return new StringLiteral( new String( undefined ).valueOf() ); }
  toBoolean(): BooleanLiteral { return new BooleanLiteral( new Boolean( undefined ).valueOf() ); }
}

export class BooleanLiteral implements  Omit<ILiteral, "toBoolean">  {
  protected _value: boolean;

  constructor( v = true ){ this._value = v; }

  toggle(): this { this._value = !this._value; return this; }

  get value(): boolean { return this._value; }
  toNumber(): NumericLiteral { return new NumericLiteral( new Number( this._value ).valueOf() ); }
  toString(): StringLiteral { return new StringLiteral( new String( this._value ).valueOf() ); }
}

export class StringLiteral implements  Omit<ILiteral, "toString">{
  protected _value: string;

  constructor( v = "" ){ this._value = v; }

  get value(): string { return this._value; }
  toNumber(): NumericLiteral { return new NumericLiteral( new Number( this._value ).valueOf() ); }
  toBoolean(): BooleanLiteral { return new BooleanLiteral( new Boolean( this.value ).valueOf() ); }
}

export class NumericLiteral implements Omit<ILiteral, "toNumber"> {
  protected _raw: string;
  protected _value: number;
  
  protected _sign: "+" | "-" | undefined;
  protected _exponentIndicator: "e" | "E" | undefined;
  protected _exponent: string | undefined;
  declare protected _type: "Hexadecimal" | "Octal" | "Decimal";
  
  constructor( v: string | number = 0 ){
    if ( /0[xX][0-9a-fA-F]+/mg.test( String( v ) ).valueOf() ) this._type = "Hexadecimal";
    else if ( /0[oO][0-8]+/mg.test( String( v ).valueOf() ) ) this._type = "Octal";
    else this._type = "Decimal";
    this.raw = String( v ).valueOf();
  }

  isSigned(): boolean { return !!this.sign; }
  hasExponent(): boolean { return ( /^(\+|-)?(\d+\.?\d+)(e|E)(\+|-)?\d+$/g ).test( this._raw ); } // voodoo magic of Regular Expressions.
  isValidExponent( v: string ) { return ( /^(\+|-)?(\d+\.?\d+)(e|E)(\+|-)?\d+$/g ).test( v ); }
  isTruthy(): boolean { return !!this._value; }

  set sign( v: "+" | "-" | undefined ) {
    this._sign = v;
    this._raw = this._raw.replace( /(?<!E|e)(-|\+)/g, "" ); // more voodoo magic of Regular Expressions.
    if ( !v ) return;
    this.raw = v + this._raw; 
  }

  get sign(): "+" | "-" | undefined { return this._sign; }


  set exponentIndicator( indicator: "e" | "E" | undefined ) { this.setExponent( { indicator } ); }
  get exponentIndicator(): "e" | "E" | undefined { return this._exponentIndicator; }

  set exponent( exponent: string | number | undefined ) { this.setExponent( { exponent } ); }
  get exponent(): string | undefined{ return this._exponent; }

  
  setExponent( { indicator, exponent }: { indicator?: string, exponent?: string | number } ): this{
    if ( this.type != "Decimal" ) return this;
    var t = this._raw.split( /(?<=(^((\+|-)?)\d+\.?\d+))(e|E)(?=((\+|-)?\d+$))/g ); // this genuinely looks like I had a stroke on the keyboard. / a keystroke /. wheeze

    console.log( t );
    if ( ( indicator && !this._exponentIndicator ) || ( exponent && !this._exponent ) ) { // translate normal form to exponential form
      this._exponent = new String( exponent ).valueOf() || this._exponent || "1";

      this.raw = [ Number( t[ 0 ] ).valueOf() / ( new Number( this._exponent ).valueOf() * 10 ), indicator || "e", this._exponent ].join( "" );
    } else
    if ( ( !indicator && this._exponentIndicator ) || ( !exponent && this._exponent ) )  // translate exponential form to normal form
      return this;// this.raw = Number( t[ 0 ] ).valueOf() * Math.pow( 10, Number( t[ 2 ] ).valueOf() );
    else throw new Error( "NEW FUCKY CONDITION" );
    return this; 
  }


  set type( v: "Hexadecimal" | "Octal" | "Decimal" ){
    this._type = v;
    this.exponent = undefined;
    switch ( v ){
    case "Hexadecimal":
      this._raw = `0x${this._value.toString( 16 )}`;
      break;
    case "Octal":
      this._raw = `0o${this._value.toString( 8 )}`;
      break;
    default:
      this._raw = `${this._value.toString( 10 )}`;
      break;
    }
  }

  get type(): "Hexadecimal" | "Octal" | "Decimal"{ return this._type; }

  toHex(): this { this.type = "Hexadecimal"; return this; }
  toOctal(): this {  this.type = "Octal"; return this; }
  toDecimal(): this {  this.type = "Decimal"; return this; }

  set value( v: number ) { this._value = v; this._raw = new String( v ).valueOf(); }
  get value(): number { return this._value; }
  
  set raw( v: string ) { this._raw = v; this._value = new Number( v ).valueOf(); }
  get raw(): string { return this._raw; }


  toString(): StringLiteral { return new StringLiteral( this._raw ); }
  toBoolean(): BooleanLiteral { return new BooleanLiteral( new Boolean( this.value ).valueOf() ); }
}
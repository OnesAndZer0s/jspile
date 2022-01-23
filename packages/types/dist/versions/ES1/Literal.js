"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringLiteral = exports.NumericLiteral = exports.UndefinedLiteral = exports.NullLiteral = exports.BooleanLiteral = exports.ILiteral = void 0;
// @TODO quote https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf numbskull
class ILiteral {
    get value() { return this._value; }
    toNumber() { return new NumericLiteral(new Number(this._value).valueOf()); }
    toString(r) { return new StringLiteral(this._value.toString(r)); }
    toBoolean() { return new BooleanLiteral(new Boolean(this.value).valueOf()); }
}
exports.ILiteral = ILiteral;
class BooleanLiteral extends ILiteral {
    constructor(v) {
        super();
        this._value = v;
    }
    invert() { this._value = !this.value; return this; }
}
exports.BooleanLiteral = BooleanLiteral;
class NullLiteral extends ILiteral {
}
exports.NullLiteral = NullLiteral;
class UndefinedLiteral extends ILiteral {
}
exports.UndefinedLiteral = UndefinedLiteral;
class NumericLiteral extends ILiteral {
    constructor(v) {
        super();
        if (/0[xX][0-9a-fA-F]+/mg.test(String(v)).valueOf())
            this.type = "Hexadecimal";
        else if (/0[oO][0-8]+/mg.test(String(v).valueOf()))
            this.type = "Octal";
        else
            this.type = "Decimal";
        this.raw = String(v).valueOf();
    }
    isSigned() { return !!this.sign; }
    hasExponent() { return (/^(\+|-)?(\d+\.?\d+)(e|E)(\+|-)?\d+$/g).test(this._raw); } // voodoo magic of Regular Expressions.
    isValidExponent(v) { return (/^(\+|-)?(\d+\.?\d+)(e|E)(\+|-)?\d+$/g).test(v); }
    isTruthy() { return !!this._value; }
    set sign(v) {
        this._sign = v;
        this._raw = this._raw.replace(/(?<!E|e)(-|\+)/g, ""); // more voodoo magic of Regular Expressions.
        if (!v)
            return;
        this.raw = v + this._raw;
    }
    get sign() { return this._sign; }
    set exponentIndicator(indicator) { this.setExponent({ indicator }); }
    get exponentIndicator() { return this._exponentIndicator; }
    set exponent(exponent) { this.setExponent({ exponent }); }
    get exponent() { return this._exponent; }
    setExponent({ indicator, exponent }) {
        if (this.type != "Decimal")
            return this;
        var t = this._raw.split(/(?<=(^((\+|-)?)\d+\.?\d+))(e|E)(?=((\+|-)?\d+$))/g); // this genuinely looks like I had a stroke on the keyboard. / a keystroke /. wheeze
        console.log(t);
        if ((indicator && !this._exponentIndicator) || (exponent && !this._exponent)) { // translate normal form to exponential form
            this._exponent = new String(exponent).valueOf() || this._exponent || "1";
            this.raw = [Number(t[0]).valueOf() / (new Number(this._exponent).valueOf() * 10), indicator || "e", this._exponent].join("");
        }
        else if ((!indicator && this._exponentIndicator) || (!exponent && this._exponent)) // translate exponential form to normal form
            return this; // this.raw = Number( t[ 0 ] ).valueOf() * Math.pow( 10, Number( t[ 2 ] ).valueOf() );
        else
            throw new Error("NEW FUCKY CONDITION");
        return this;
    }
    set type(v) {
        this._type = v;
        this.exponent = undefined;
        switch (v) {
            case "Hexadecimal":
                this._raw = `0x${this._value.toString(16)}`;
                break;
            case "Octal":
                this._raw = `0o${this._value.toString(8)}`;
                break;
            default:
                this._raw = `${this._value.toString(10)}`;
                break;
        }
    }
    get type() { return this._type; }
    toHex() { this.type = "Hexadecimal"; return this; }
    toOctal() { this.type = "Octal"; return this; }
    toDecimal() { this.type = "Decimal"; return this; }
    toBoolean() { return new BooleanLiteral(new Boolean(this._value).valueOf()); }
    toString(r) { return new StringLiteral(this._value.toString(r)); }
    set value(v) { this._value = v; this._raw = new String(v).valueOf(); }
    set raw(v) { this._raw = v; this._value = new Number(v).valueOf(); }
    get raw() { return this._raw; }
}
exports.NumericLiteral = NumericLiteral;
class StringLiteral extends ILiteral {
    constructor(v) {
        super();
        this._value = v;
    }
}
exports.StringLiteral = StringLiteral;
var test = new NumericLiteral(10);
test.setExponent({ exponent: 10 });
console.log(test.value);

export declare class ILiteral {
    protected _value: any;
    get value(): any;
    toNumber(): NumericLiteral;
    toString(r: number): StringLiteral;
    toBoolean(): BooleanLiteral;
}
export declare class BooleanLiteral extends ILiteral {
    _value: boolean;
    constructor(v: boolean);
    invert(): this;
}
export declare class NullLiteral extends ILiteral {
    _value: null;
}
export declare class UndefinedLiteral extends ILiteral {
    _value: undefined;
}
export declare class NumericLiteral extends ILiteral {
    protected _raw: string;
    protected _sign: "+" | "-" | undefined;
    protected _exponentIndicator: "e" | "E" | undefined;
    protected _exponent: string | undefined;
    protected _type: "Hexadecimal" | "Octal" | "Decimal";
    constructor(v: string | number);
    isSigned(): boolean;
    hasExponent(): boolean;
    isValidExponent(v: string): boolean;
    isTruthy(): boolean;
    set sign(v: "+" | "-" | undefined);
    get sign(): "+" | "-" | undefined;
    set exponentIndicator(indicator: "e" | "E" | undefined);
    get exponentIndicator(): "e" | "E" | undefined;
    set exponent(exponent: string | number | undefined);
    get exponent(): string | undefined;
    setExponent({ indicator, exponent }: {
        indicator?: string;
        exponent?: string | number;
    }): this;
    set type(v: "Hexadecimal" | "Octal" | "Decimal");
    get type(): "Hexadecimal" | "Octal" | "Decimal";
    toHex(): this;
    toOctal(): this;
    toDecimal(): this;
    toBoolean(): BooleanLiteral;
    toString(r: number): StringLiteral;
    set value(v: number);
    set raw(v: string);
    get raw(): string;
}
export declare class StringLiteral extends ILiteral {
    _value: string;
    constructor(v: string);
}

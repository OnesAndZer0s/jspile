export class SingleLineComment {
  protected _value: string;
  protected _comment: string;
  
  constructor( s = "" ){ this._comment = s; this.update(); }

  get value(): string { return this._value; }

  get comment(): string { return this._comment; }
  set comment( s: string ) { this._comment = s; this.update(); }
  

  protected update(){ this._value = `// ${this._comment}`; }

  toMultiLine(): MultiLineComment { return new MultiLineComment( this._comment ); }
  toDoc(): DocComment { return new DocComment( this._comment ); }
}

export class MultiLineComment {
  protected _value: string;
  protected _comment: string[];
  protected _starred: boolean;
  protected _slashNewline: boolean;

  constructor( s: string | string[] = "" ) {
    s = [ s ].flat();
    var [ cStart, cEnd ] = [ s[ 0 ].split( "/*" ), s[ s.length - 1 ].split( "*/" ) ];

    if ( cStart[ 0 ] !== "" || cEnd[ cEnd.length - 1 ] !== "" ) throw new Error( "Invalid comment" ); // FIXME : find a better way to throw errors;

    if ( s.length == 1 ) this.update( { comment:s, starred:false, slashNewline:false } );
    else if ( s[ 0 ] ) {}
    /* fixme */
    // if "single line multiline", it is not slashNewlined, but assume it is not starred/
    this.update( { comment:s } );
  }

  get value(): string { return this._value; }

  get lines(): string[] { return this._comment; }
  set lines( newVal: string[] ) { this.update( { comment:newVal } ); }
  
  get comment(): string { return this._comment.join( "\n" ); }
  set comment( newVal: string | string[] ) { this.update( { comment:newVal } ); }

  get starred(): boolean { return this._starred; }
  set starred( newVal: boolean ) { this.update( { starred:newVal } ); }

  get slashNewline(): boolean { return this._slashNewline; }
  set slashNewline( newVal: boolean ) { this.update( { slashNewline:newVal } ); }


  protected update( { slashNewline = this._slashNewline, starred = this._starred, comment = this._comment }:  { slashNewline?: boolean, starred?: boolean, comment?: string | string[] } ){
    this._comment = [ comment ].flat();
    this._value = `/* ${[ ...this._comment ].join( "\n" )} */`;
  }

  toSingleLine(): SingleLineComment { return new SingleLineComment( this._comment.join( "\n" ) ); }
  toMultipleSingleLines(): SingleLineComment[] { return this._comment.map( i => { return new SingleLineComment( i ); } ); }
  toDoc(): DocComment { return new DocComment( this.comment ); }
}

// this is literally just a fancy multiline comment lol
export class DocComment extends MultiLineComment {
  // protected _value: string;
  // protected _comment: string;
  // protected _tags: any; // FIXME/

  // constructor( s = "" ){ this._comment = s; this.update(); }

  // get value(): string { return this._value; }

  // get comment(): string { return this._comment; }
  // set comment( s: string ) { this._comment = s; this.update(); }
  

  // protected update(){
  //   this._value = "";
  // }

  // toSingleLine(): SingleLineComment { return new SingleLineComment( this._comment ); }
  // toMultiLine(): MultiLineComment { return new MultiLineComment( this._comment ); }
}
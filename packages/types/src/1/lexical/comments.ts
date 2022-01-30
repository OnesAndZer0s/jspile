export interface SingleLineCommentOpts {
  spaced?: boolean
  comment?: string;
}

export class SingleLineComment {
  protected _value: string;
  protected _comment: string;
  protected _spaced: boolean;
  
  constructor( s: string | SingleLineCommentOpts = "" ) {
    this.update( s );
  }

  get value(): string { return this._value; }
  set value( s: string | SingleLineCommentOpts ) { this.update( s ); }

  get comment(): string { return this._comment; }
  set comment( s: string ) { this.update( { comment:s } ); }
  
  get spaced(): boolean { return this._spaced; }
  set spaced( newVal: boolean ) { this.update( { spaced:newVal } ); }

  protected update( inp: string | SingleLineCommentOpts = {} ) {
    inp = SingleLineComment.identify( inp );
    this._comment = inp.comment || this._comment || "";
    this._spaced = inp.spaced || this._spaced || true;
    this._value = `//${ this._spaced ? " " : "" }${ this._comment }`;
  }

  // identify and parse out the intrinsic values of a multiline comment
  static identify( inp: string | SingleLineCommentOpts = "" ): SingleLineCommentOpts {
    if( typeof inp == "string" ) {
      inp = { comment:inp };
      // inp = { comment:[ inp ].flat(), slashNewline:{}, spaced:{}, starred:[] };
      inp.spaced = inp.comment.indexOf( "// " ) == 0 || inp.comment[ 0 ] == " ";
      inp.comment = inp.comment.replace( /^(\/\/ |\/\/| )/g, "" );
    } else inp = { comment:inp.comment || "", spaced:inp.spaced || true };

    return <SingleLineComment>inp;
  }

  toMultiLine(): MultiLineComment { return new MultiLineComment( `${ this._spaced ? " " : "" }${ this._comment }${ this._spaced ? " " : "" }` ); }
}

export interface DirtyMultiLineCommentOpts {
  starred?: boolean | boolean[];
  slashNewline?: boolean | boolean[] | { start: boolean, end: boolean };
  comment?: string[] | string;
  spaced?: boolean | boolean[] | { start: boolean, end: boolean };
}

export interface MultiLineCommentOpts{
  starred?: boolean[];
  slashNewline?: { start: boolean, end: boolean };
  comment?: string[];
  spaced?: { start: boolean, end: boolean };
}
export class MultiLineComment {
  protected _value: string;
  protected _comment: string[];
  protected _starred: boolean[];
  protected _slashNewline: { start: boolean, end: boolean };
  protected _spaced: { start: boolean, end: boolean };

  constructor( s: string | string[] | DirtyMultiLineCommentOpts = "" ) { this.update( s ); }

  get value(): string { return this._value; }
  set value( newVal: string | string[] | DirtyMultiLineCommentOpts ) { this.update( newVal ); }

  get lines(): string[] { return this._comment; }
  set lines( newVal: string[] ) { this.update( { comment:newVal } ); }
  
  get comment(): string { return this._comment.join( "\n" ); }
  set comment( newVal: string | string[] ) { this.update( { comment:newVal } ); }

  get starred(): boolean[] { return this._starred; }
  set starred( newVal: boolean | boolean[] ) { this.update( { starred:newVal } ); }

  get slashNewline(): { start: boolean, end: boolean } { return this._slashNewline; }
  set slashNewline( newVal: boolean | boolean[] | { start: boolean, end: boolean } ) { this.update( { slashNewline:newVal } ); }

  get spaced(): { start: boolean, end: boolean } { return this._spaced; }
  set spaced( newVal: boolean | boolean[] | { start: boolean, end: boolean } ) { this.update( { spaced:newVal } ); }


  protected update( inp: string | string[] | DirtyMultiLineCommentOpts = {} ) {
    ( { comment:this._comment, starred:this._starred, slashNewline:this._slashNewline, spaced:this._spaced } = MultiLineComment.identify( inp ) );
    var temp = this._comment;

    this._value = `/*${ this._spaced.start ? " " : "" }${ this._slashNewline.start ? "\n" : "" }${ temp.map( ( e, i ) => { return `${  this._starred[ i ]  ? " * " : "" }${ e }`; } ).join( "\n" ) }${ this._slashNewline.end ? "\n" : "" }${ this._spaced.end ? " " : "" }*/`;
  }

  // identify and parse out the intrinsic values of a multiline comment
  static identify( inp: string | string[] | DirtyMultiLineCommentOpts = "" ): MultiLineCommentOpts {
    var retVal;

    if( typeof inp == "string" ) inp = inp.split( "\n" );
    if(  inp instanceof Array ) {
      retVal = { comment:[ inp ].flat(), slashNewline:{}, spaced:{}, starred:[] };
      // @TODO better way to implement
      retVal.spaced.start = retVal.comment[ 0 ].indexOf( "/* " ) == 0;
      retVal.slashNewline.start = retVal.comment[ 0 ].match( /^(\/\* |\/\*)$/g )?.length > 0;

      if( retVal.slashNewline.start ) retVal.comment.shift(); else retVal.comment[ 0 ] = retVal.comment[ 0 ].replace( /^(\/\* |\/\*)/g, "" );
      // @TODO bettery way to implement
      retVal.spaced.end = Math.abs( retVal.comment[ retVal.comment.length - 1 ].lastIndexOf( " */" ) ) ==  retVal.comment[ retVal.comment.length - 1 ].length - 3 ;
      retVal.slashNewline.end = retVal.comment[ retVal.comment.length - 1 ].match( /^(\*\/| \*\/)$/g )?.length > 0;
      if( retVal.slashNewline.end ) retVal.comment.pop(); else retVal.comment[ retVal.comment.length - 1 ] = retVal.comment[ retVal.comment.length - 1 ].replace( /^(\/\* |\/\*)/g, "" );

      retVal.comment[ retVal.comment.length - 1 ] = retVal.comment[ retVal.comment.length - 1 ].replace( /(\*\/| \*\/)$/g, "" );

      for( var i = 0; i < retVal.comment.length; i++ ) {
        retVal.starred[ i ] = !!retVal.comment[ i ].match( /^( ?\* ?)/g )?.length;
        retVal.comment[ i ] = retVal.comment[ i ].replace( /^( ?\* ?)/g, "" );
      }

    } else {
      retVal = { ...{ comment:"", starred:false, slashNewline:false, spaced:true }, ...retVal };

      if( typeof retVal.comment == "string" ) retVal.comment = retVal.comment.split( "\n" );
      if( retVal.comment instanceof Array ) retVal.comment [ retVal.comment ].flat();

      if( typeof retVal.starred == "boolean" ) retVal.starred = new Array( retVal.comment.length ).fill( retVal.starred );
      if( retVal.starred.length !== retVal.comment.length ) {
        var t = retVal.starred.filter( Boolean ).length > retVal.starred.length / 2; // does "true" appear more than "false"

        retVal.starred.length = retVal.comment.length;
        retVal.starred.replaceAll( undefined, t );
      }

      if( typeof retVal.slashNewline == "boolean" ) retVal.slashNewline = { start:retVal.slashNewline, end:retVal.slashNewline };
      if( retVal.slashNewline instanceof Array ) retVal.slashNewline = { start:retVal.slashNewline[ 0 ] || retVal.slashNewline[ 1 ] || false, end:retVal.slashNewline[ 1 ] || retVal.slashNewline[ 0 ] || false };
      if( Object.getOwnPropertyNames( retVal.slashNewline ) != [ "start", "end" ] ) retVal.slashNewline = { start:retVal.slashNewline.start || retVal.slashNewline.end || false, end:retVal.slashNewline.end || retVal.slashNewline.start || false };

      if( typeof retVal.spaced == "boolean" ) retVal.spaced = { start:retVal.spaced, end:retVal.spaced };
      if( retVal.spaced instanceof Array ) retVal.spaced = { start:retVal.spaced[ 0 ] || retVal.spaced[ 1 ] || false, end:retVal.spaced[ 1 ] || retVal.spaced[ 0 ] || false };
      if( Object.getOwnPropertyNames( retVal.spaced ) != [ "start", "end" ] ) retVal.spaced = { start:retVal.spaced.start || retVal.spaced.end || false, end:retVal.spaced.end || retVal.spaced.start || false };
    }
    return <MultiLineCommentOpts>retVal;
  }



  toSingleLine(): SingleLineComment { return new SingleLineComment( this._comment.join( "\n" ) ); }
  toMultipleSingleLines(): SingleLineComment[] { return this._comment.map( i => { return new SingleLineComment( i ); } ); }
}
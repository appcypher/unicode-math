/**
 * token = { type, token };
 */
class Lexer {
  //
  constructor(code) {
    this.code = code;
    this.length = code.length;
    this.cursor = -1;
  }

  // Consumes a character.
  eatChar() {
    // Check if there is still a chracter to be consumed.
    if (this.cursor < this.length - 1) {
      return this.code[++this.cursor];
    }

    return undefined;
  }

  // Tokenizes input code.
  lex() {
    // Intially char is undefined.
    let char = undefined;

    let tokens = [];

    // Loop through each character.
    while (char = this.eatChar()) {

      if (
        (char > '\u0040' && char < '\u005B') || // [A-Z]
        (char > '\u0060' && char < '\u007B') || // [a-z]
        char === '\u003F' || char === '\u2102' || char === '\u2107' ||
        (char >= '\u210A' && char <= '\u2113') || char === '\u2115' ||
        char === '\u2118' || char === '\u2119' || char === '\u2124' ||
        char === '\u2128' || char === '\u2129' || char === '\u212C' ||
        char === '\u212F' || char === '\u2133' || char === '\u2135' ||
        (char >= '\u213C' && char <= '\u2149') || char === '\u214B'
      ) {
        // ALPHABET
        console.log('>>> alphabet', char);
      } else if (char > '\u002F' && char < '\u003A') { // [0-9]
        // DIGIT
        console.log('>>> digit', char);
      } else if (
        (char >= '\u0300' && char <= '\u036F') ||
        (char >= '\u20D0' && char <= '\u20F0')
      ) {
        // DIACRITIC
        console.log('>>> diacritic', char);
      }
    }

    return tokens;
  }
}



export {
  Lexer,
}

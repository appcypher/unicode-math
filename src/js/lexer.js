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
      this.code[++this.cursor];
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

      // For each chararcter, match with appropriate lexer function.
      if (char ) {}
    }

    return tokens;
  }
}

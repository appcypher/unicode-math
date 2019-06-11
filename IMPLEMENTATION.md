- Alphanumerics

    The supported alphanumerics incude:
    - ASCII Alphanumeric Symbols [A-Z], [a-z], [0-9], U+003F
    - Unicode Mathematical Alphanumeric Symbols (UMAS) [U+1D400 – U+1D7FF]
    - Letterlike Symbols U+2102, U+2107, [U+210A–U+2113], U+2115, [U+2118 – U+2119], U+2124, [U+2128 – U+2129], U+212C, U+212F, U+2133, U+2135, [U+213C – U+2149], U+214B
    - Arabic Mathematical Alphabetic Symbols [U+1EE00 – U+1EEFF]
    - Greek and Coptic (???) [U+0390 - U+03FF]
    https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols
    https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode

    The following letter-like block ranges are not yet supported:
    - Latin Extended-A
    - Latin Extended-B


- Mathematical Operators

    - ASCII Operators U+0021, U+0025, [U+002A - U+002F], [U+003A - U+003E], U+005C, U+007C, U+007E, U+00AC, U+00B1, U+00D7, U+00F7
    - Mathematical Operators [U+2200 - U+22FF]
    - Supplemental Mathematical Operators [U+2A0 - U+2AFF]
    - Miscellaneous Mathematical Symbols-A [U+27C0 - U+27EF]
    - Miscellaneous Mathematical Symbols-B [U+2980 – U+29FF]
    - Miscellaneous Technical [U+2308 – U+230B], [U+2320 - U+2321], U+237C, [U+239B - U+23B5], 23B7, U+23D0, [U+23DC - U+23E2]
    - Geometric Shapes [U+25A0 – U+25A1], [U+25AE – U+25B7], [U+25BC – U+25C1], [U+25C6 – U+25C7], [U+25CA – U+25CB], [U+25CF – U+25D3], U+25E2, U+25E4, [U+25E7 – U+25EC], [U+25F8 – U+25FF]
    - Arrows [U+2190 – U+21FF]
    - Supplemental Arrows-A [U+27F0 – U+27FF]
    - Supplemental Arrows-B [U+2900 – U+297F]
    - Superscipts and SubScripts [U+207A - U+207E],
    - Miscellaneous Symbols [U+208A - U+208E]
    - Small Variants Form [U+FE61 - U+FE68]
    - General Punctuation U+2016, [U+2032 - U+2034], U+2040, U+2044, U+2052
    - Halfwidth and Fullwidth Forms U+FF0B, [U+FF1C - U+FF1E], U+FF3C, U+FF3E, U+FF5C, U+FF5E, U+FFE2, U+FFE9, U+FFEA, U+FFEB, U+FFEC
    https://en.wikipedia.org/wiki/Mathematical_operators_and_symbols_in_Unicode


- Diacritics

    - Combining Diacritical Marks [U+0300 - U+036F], [U+20D0 - U+20F0]
    https://en.wikipedia.org/wiki/Combining_Diacritical_Marks

    The following combining diatrical marks range are not supported:
    - Combining Diacritical Marks Extended (German) [U+1AB0 - U+1ABE]
    - Combining Diacritical Marks Supplement (Uralic, Medievalist & German) [U+1DCx - U+1DFF]

- Fractions

    - Binary operator with / (U+002F)

    Effect:

    Creates a horizontal divider between the numerator and denominator.

    Examples:

    ⁅ abc/d ⁆

- Spaces

    - ASCII Space (U+0020)


- Invisibles

    - General Punctuation [U+2061 - U+2064]

- Associativity

    - ASCII Brackets U+0028, U+0029, U+005B, U+005D, U+007B, U+007D

    Examples:

    ⁅ ((a + c))/d ⁆


- Delimiters

    `⁅` (U+2045) to start a math zone and `⁆` (U+2046) to end it

    Paragraphs within the delimiters are ignored.

    Examples:

    ⁅ 2 + 1 = 3 ⁆
    ⁅ f(x, n) = 𝛴_(i=0)^n x_i / 2 ⁆


- Nesting

    $$ \sqrt{\sqrt{\sqrt{\sqrt{\sqrt{\sqrt {3 \cdot \frac{50} {100}} }}}}} $$

    ⁅ √√√√√√3 · (50 / 100) ⁆


### URLS
https://www.unicode.org/notes/tn28/UTN28-PlainTextMath-v3.1.pdf
http://latex.codecogs.com/svg.latex
http://www.unicodemath.io

<div align=center>
  <h1>UNICODE_MATH</h1>
</div>

This library contains a set of utilities for displaying and converting UnicodeMathv3.1 to other fromats like LaTex and HTML.


UnicodeMath aims to encode Maths expression in Unicode with as little special behavior as possible. As a result, UnicodeMath is more compact and easier to read than [La]TeX, ASCIIMath and most especially MathML.

###### LATEX

$$ f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi \xi x} \,d\xi $$

###### UNICODE-MATH

⁅ f(x) = ∫_(-∞)^∞ ▒ f̂(ξ)e^(2πξx) dξ ⁆

###### RENDERING

<img src="http://latex.codecogs.com/svg.latex?f(x) = \int_{-\infty}^\infty \hat f(\xi)\,e^{2 \pi \xi x} \,d\xi" />


### USAGE
> TBA



### TODO
- Bundling and optimization with Webpack.
- Add browser support.
- Add Rust implementation.
- Conversion of Rust implementation to WebAssembly.
- UTF-16 and UTF-32 encodings.


### UPCOMING
- UnicodeMath to HTML/CSS
- UnicodeMath to Tex
- UnicodeMath to JS
- UnicodeMath to SVG
- Tex (math mode) to UnicodeMath
- UnicodeMath VSCode (unicode autocomplete, UnicodeMath in MD preview)

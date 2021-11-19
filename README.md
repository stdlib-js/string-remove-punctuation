<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Remove Punctuation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Remove punctuation characters from a string.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/string-remove-punctuation
```

</section>

<section class="usage">

## Usage

```javascript
var removePunctuation = require( '@stdlib/string-remove-punctuation' );
```

#### removePunctuation( str )

Removes punctuation characters from a `string`.

```javascript
var str = removePunctuation( 'Sun Tzu said: "A leader leads by example not by force."' );
// returns 'Sun Tzu said A leader leads by example not by force'
```

The function removes the following characters:

|    description   |  value  |     |
| :--------------: | :-----: | --- |
|    Apostrophe    | `` ` `` |     |
|      Braces      |  `{ }`  |     |
|     Brackets     |  `[ ]`  |     |
|       Colon      |   `:`   |     |
|       Comma      |   `,`   |     |
| Exclamation Mark |   `!`   |     |
|  Fraction Slash  |   `/`   |     |
|    Guillemets    |  `< >`  |     |
|    Parentheses   |  `( )`  |     |
|      Period      |   `.`   |     |
|     Semicolon    |   `;`   |     |
|       Tilde      |   `~`   |     |
|   Vertical Bar   |    \`   | \`  |
|   Question Mark  |   `?`   |     |
|  Quotation Marks |  `' "`  |     |

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var removePunctuation = require( '@stdlib/string-remove-punctuation' );

var str;
var out;

str = 'Double, double, toil and trouble; Fire burn, and cauldron bubble!';
out = removePunctuation( str );
// returns 'Double double toil and trouble Fire burn and cauldron bubble'

str = 'This module removes these characters: `{}[]:,!/<>().;~|?\'"';
out = removePunctuation( str );
// returns 'This module removes these characters '

str = 'We have to hold the border – at all cost';
out = removePunctuation( str );
// returns 'We have to hold the border  at all cost'

str = 'This a sentence without punctuation';
out = removePunctuation( str );
// returns 'This a sentence without punctuation'
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-remove-punctuation
```

</section>

<section class="usage">

### Usage

```text
Usage: remove-punctuation [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ remove-punctuation 'beep! beep!!!'
beep beep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'beep! beep!!!' | remove-punctuation
beep beep
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-remove-punctuation.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-remove-punctuation

[test-image]: https://github.com/stdlib-js/string-remove-punctuation/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/string-remove-punctuation/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-remove-punctuation/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-remove-punctuation?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-remove-punctuation.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-remove-punctuation/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-remove-punctuation/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->

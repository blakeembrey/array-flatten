# Array Flatten

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Bundle size][bundlephobia-image]][bundlephobia-url]

> Flatten nested arrays.

🚨 **Notice:** Code using node.js >= 11 should use the native [Array.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) method instead. 🚨

## Installation

```
npm install array-flatten --save
```

## Usage

```js
import { flatten } from "array-flatten";

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

(function() {
  flatten(arguments); //=> [1, 2, 3]
})(1, [2, 3]);
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/array-flatten.svg?style=flat
[npm-url]: https://npmjs.org/package/array-flatten
[downloads-image]: https://img.shields.io/npm/dm/array-flatten.svg?style=flat
[downloads-url]: https://npmjs.org/package/array-flatten
[travis-image]: https://img.shields.io/travis/blakeembrey/array-flatten.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/array-flatten
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/array-flatten.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/array-flatten?branch=master
[bundlephobia-image]: https://img.shields.io/bundlephobia/minzip/array-flatten.svg
[bundlephobia-url]: https://bundlephobia.com/result?p=array-flatten

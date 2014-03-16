# array-flatten

Flatten an array of nested arrays into a single flat array.

## Installation

```
npm install array-flatten --save
```

## Usage

```javascript
var flatten = require('array-flatten');

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

flatten([1, [2, [3, [4, [5], 6], 7], 8], 9], 2);
//=> [1, 2, 3, [4, [5], 6], 7, 8, 9]
```

## License

MIT

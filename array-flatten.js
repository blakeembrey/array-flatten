/**
 * Recursive flatten function. Fastest implementation for array flattening.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {Number} depth
 * @return {Array}
 */
var flatten = function (array, result, depth) {
  depth--;

  for (var i = 0; i < array.length; i++) {
    if (depth > -1 && Array.isArray(array[i])) {
      flatten(array[i], result, depth);
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

/**
 * Flatten an array, with the ability to define a depth.
 *
 * @param  {Array}  array
 * @param  {Number} depth
 * @return {Array}
 */
module.exports = function (array, depth) {
  if (depth < 1) {
    return Array.prototype.slice.call(array);
  }

  return flatten(array, [], depth || Infinity);
};

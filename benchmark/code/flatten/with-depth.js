module.exports = flatten

function flatten (array, depth) {
  return flattenWithResult(array, [], depth == null ? Infinity : depth)
}

function flattenWithResult (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
    if (depth > 0 && Array.isArray(array[i])) {
      flattenWithResult(array[i], result, depth - 1)
    } else {
      result.push(array[i])
    }
  }

  return result
}

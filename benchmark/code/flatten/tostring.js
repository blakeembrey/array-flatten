var _toString = Object.prototype.toString

module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  for (var i = 0; i < array.length; i++) {
    if (_toString.call(array[i]) === '[object Array]') {
      flattenWithResult(array[i], result)
    } else {
      result.push(array[i])
    }
  }

  return result
}

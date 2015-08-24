module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  var len = array.length
  var i = -1

  while (++i < len) {
    if (Array.isArray(array[i])) {
      flattenWithResult(array[i], result)
    } else {
      result.push(array[i])
    }
  }

  return result
}

module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  var len = array.length

  while (len) {
    var i = array.length - len

    if (Array.isArray(array[i])) {
      flattenWithResult(array[i], result)
    } else {
      result.push(array[i])
    }

    len--
  }

  return result
}

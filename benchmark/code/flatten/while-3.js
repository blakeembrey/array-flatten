module.exports = flatten

function flatten (array) {
  return flattenWithResult(array, [])
}

function flattenWithResult (array, result) {
  var len = array.length
  var num = 0

  while (len--) {
    var i = num++

    if (Array.isArray(array[i])) {
      flattenWithResult(array[i], result)
    } else {
      result.push(array[i])
    }
  }

  return result
}

module.exports = function (array, depth) {
  if (depth < 1) {
    return array
  }

  return flatten(array, [], depth || Infinity)
}

function flatten (array, result, depth) {
  depth--

  var len = array.length
  var i = 0

  while (len--) {
    if (depth > -1 && Array.isArray(array[i])) {
      flatten(array[i], result, depth)
    } else {
      result.push(array[i])
    }

    i++
  }

  return result
}

module.exports = flatten

function flatten (array, depth) {
  if (depth == null) {
    return flattenWithoutDepth(array, [])
  }

  return flattenWithDepth(array, [], depth)
}

function flattenWithoutDepth (array, result) {
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenWithoutDepth(array[i], result)
    } else {
      result.push(array[i])
    }
  }

  return result
}

function flattenWithDepth (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
    if (depth > 0 && Array.isArray(array[i])) {
      flattenWithDepth(array[i], result, depth - 1)
    } else {
      result.push(array[i])
    }
  }

  return result
}

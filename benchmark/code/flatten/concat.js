module.exports = flatten

function flatten (array) {
  var result = Array.prototype.concat.apply([], array)

  if (result.length === array.length) {
    return result
  }

  return flatten(result)
}

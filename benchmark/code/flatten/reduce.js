module.exports = reduce

function reduce (array) {
  return array.reduce(function (acc, value) {
    if (Array.isArray(value)) {
      return acc.concat(reduce(value))
    }

    return acc.concat(value)
  }, [])
}

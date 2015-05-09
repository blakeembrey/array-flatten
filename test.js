/* global describe, it */

var assert = require('assert')
var flatten = require('./')

describe('array-flatten', function () {
  it('should flatten an array', function () {
    var res = flatten([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10])

    assert.deepEqual(res, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should flatten an array to a specific depth', function () {
    var res = flatten([1, [2, [3], 4], 5], 1)

    assert.deepEqual(res, [1, 2, [3], 4, 5])
  })

  it('should clone an array when no depth is specified', function () {
    var array = [1, [2, 3]]
    var clone = flatten(array, 0)

    assert.ok(clone !== array)
    assert.deepEqual(clone, array)
  })
})

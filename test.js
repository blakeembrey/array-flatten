/* global describe, it */

var assert = require('assert')
var flatten = require('./')

describe('array-flatten', function () {
  describe('flatten', function () {
    it('should flatten an array', function () {
      var result = flatten([1, [2, [3, [4, [5]]], 6, [[7], 8], 9], 10])

      assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })

    it('should throw on non-array', function () {
      assert.throws(function () {
        flatten('test')
      }, TypeError)
    })

    it('should work with non-array', function () {
      var result = flatten.from('test')

      assert.deepEqual(result, ['t', 'e', 's', 't'])
    })
  })

  describe('depth', function () {
    it('should flatten an array to a specific depth', function () {
      var result = flatten.depth([1, [2, [3], 4], 5], 1)

      assert.deepEqual(result, [1, 2, [3], 4, 5])
    })

    it('should clone an array when no depth is specified', function () {
      var array = [1, [2, 3]]
      var clone = flatten.depth(array, 0)

      assert.ok(clone !== array)
      assert.deepEqual(clone, array)
    })

    it('should throw on non-array', function () {
      assert.throws(function () {
        flatten.depth('test', 10)
      }, TypeError)
    })

    it('should throw on non-numeric depth', function () {
      assert.throws(function () {
        flatten.fromDepth('test', 'test')
      }, TypeError)
    })

    it('should work with "from"', function () {
      var result = flatten.fromDepth('test', 1)

      assert.deepEqual(result, ['t', 'e', 's', 't'])
    })
  })
})

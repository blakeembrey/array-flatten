var current = require('../../..').from
var _slice = Array.prototype.slice

module.exports = slice

function slice () {
  return current(_slice.call(arguments))
}

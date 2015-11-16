var current = require('../../..').from

module.exports = loop

function loop () {
  var args = new Array(arguments.length)
  var len = args.length

  while (len--) {
    args[len] = arguments[len]
  }

  return current(args)
}

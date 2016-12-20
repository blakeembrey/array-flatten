var Suite = require('benchmarked')
var path = require('path')

function name (filename) {
  return path.basename(path.dirname(filename)) + '/' + path.basename(filename, '.js')
}

var sample = [1, [2, [3, [4], 3], 2], 1]

var flattenSuite = new Suite({
  cwd: __dirname,
  fixtures: 'fixtures/*.js',
  code: 'code/flatten/*.js',
  name: name,
  sample: [sample]
})

flattenSuite.run(function (fixture) {
  return [fixture]
})

var argsSuite = new Suite({
  cwd: __dirname,
  fixtures: 'fixtures/*.js',
  code: 'code/arguments/*.js',
  name: name,
  sample: sample
})

argsSuite.run()

var depthSuite = new Suite({
  cwd: __dirname,
  fixtures: 'fixtures/*.js',
  code: 'code/depth/*.js',
  name: name,
  sample: [sample, 2]
})

depthSuite.run(function (fixture) {
  return [fixture, 4]
})

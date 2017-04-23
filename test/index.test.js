const nodeModules = require('../')

test('main', () => {
  const include = nodeModules()
  expect(include('foo')).toBe(false)
  expect(include('./node_modules/element-ready/index.js')).toBe(true)
  expect(include('./node_modules/semver/index.js')).toBe(false)
})

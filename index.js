const path = require('path')
const readPkg = require('read-pkg')
const semver = require('semver')

module.exports = () => filepath => {
  if (/node_modules/.test(filepath)) {
    const pkg = readPkg.sync(path.dirname(filepath))
    if (pkg) {
      // Include package with `module` field
      // Or using a custom `webpackInclude` field
      if (pkg.module || pkg.webpackInclude) {
        return true
      }
      // Include package whose required node engine > 0.10
      if (pkg.engines && pkg.engines.node && !semver.satisfies('0.10.0', pkg.engines.node)) {
        return true
      }
    }
  }
  return false
}

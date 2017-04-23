# webpack-node-modules

[![NPM version](https://img.shields.io/npm/v/webpack-node-modules.svg?style=flat)](https://npmjs.com/package/webpack-node-modules) [![NPM downloads](https://img.shields.io/npm/dm/webpack-node-modules.svg?style=flat)](https://npmjs.com/package/webpack-node-modules) [![CircleCI](https://circleci.com/gh/egoist/webpack-node-modules/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/webpack-node-modules/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

Include node modules which meet one of following requirements in webpack loader:

- has `module` field
- `engines.node > 0.10`

## Install

```bash
yarn add webpack-node-modules --dev
```

## Usage

```js
// webpack.config.js
const path = require('path')
const nodeModules = require('webpack-node-modules')

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [
        // Your app
        path.join(__dirname, 'src'),
        // Modules with `module` field or `engines.node > 0.10`
        nodeModules()
      ]
    }]
  }
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**webpack-node-modules** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/webpack-node-modules/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)

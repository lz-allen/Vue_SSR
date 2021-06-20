const { merge} = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const webpack  = require('webpack')

module.exports = merge(baseConfig, {
  entry: {
    app: ['./src/entry-client.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: 'manifest',
      minChunks: Infinity
    }
  },
  plugins: [
    // 在输出目录生成 ‘vue-ssr-client-manifest.json’
    new VueSSRClientPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})

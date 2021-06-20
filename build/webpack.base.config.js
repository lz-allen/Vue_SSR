const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5')
const path = require('path')
const FriendlyErrWebpackPlugin = require('friendly-errors-webpack-plugin')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  target: 'web',
  mode: isProd ? 'production' : 'development',
  output: {
    path: resolve('../dist/'),
    publicPath: '/dist/',
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      '@': resolve('../src/')
    },
    extensions: ['.js', '.vue', '.json', '.css']
  },
  devtool: isProd ? false : 'eval-cheap-module-source-map',
  module: {
    rules: [{
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)/,
        use: 'file-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new FriendlyErrWebpackPlugin()
  ]
}

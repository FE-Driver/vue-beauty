'use strict'

const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')
const md = require('markdown-it')('default',{
  html: true,
  breaks: true
})
md.renderer.rules.table_open = function() {
  return '<table class="table">';
};
md.renderer.rules.fence = wrap(md.renderer.rules.fence);

const env = process.env.NODE_ENV
const isProduction = env === 'production'

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['vue']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: isProduction ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
    mainFields: ['jsnext:main','main'],
    alias: {
      package: path.resolve(__dirname, '../package.json'),
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      views: path.resolve(__dirname, '../src/views'),
    }
  },
  module: {
    loaders: [
      /*{
        test: /\.vue$/,
        loader: ['eslint-loader'],
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre'
      },*/
      /*{
        test: /\.js$/,
        loader: ['eslint-loader'],
        include: projectRoot,
        exclude: /node_modules/,
        enforce: 'pre'
      },*/
      {
        test: /\.md/,
        loader: 'vue-markdown-loader',
        options: md
      },
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: ['babel-loader?cacheDirectory'],
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: utils.cssLoaders({
          sourceMap: isProduction,
          extract: isProduction
        })
      }
    })
  ]
}

function wrap(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};
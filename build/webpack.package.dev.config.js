var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.package.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractLESS = new ExtractTextPlugin('/style/vue-beauty.css')

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.less$/i,
            loader: extractLESS.extract(['css-loader','less-loader'])
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        extractLESS
    ]
})
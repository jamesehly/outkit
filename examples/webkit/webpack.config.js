var path = require('path');
var webpack = require('webpack');
var PACKAGE = require('./package.json');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'bundle.js': './index.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name]'
    },
    resolve: {
        modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
        descriptionFiles: ['package.json'],
        extensions: ['.js']
    },
    module: {
        
    },
    plugins: [new HtmlWebpackPlugin()],
    // Development options...
    devtool: "source-map",
    devServer: {
        compress: true,
        port: 9000,
        watchContentBase: true,
        inline: true
    }
};
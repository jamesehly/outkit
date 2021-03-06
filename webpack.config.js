var PACKAGE = require('./package.json');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'dist/outkit.js': './src/outkit.ts'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name]',
        libraryTarget: 'umd',
        library: 'outkit'
    },
    resolve: {
        modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
        descriptionFiles: ['package.json'],
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            // Typescript
            { test: /\.ts$/, loader: 'babel-loader?presets[]=es2015!ts-loader' }
        ]
    },
    plugins: [
        new webpack.BannerPlugin("Outkit v" + PACKAGE.version + " - Copyright 2017" + (new Date().getFullYear() !== 2017 ? "-" + new Date().getFullYear() : "") + " James Ehly - MIT License"),
        new webpack.SourceMapDevToolPlugin({
            filename: null, // if no value is provided the sourcemap is inlined
            test: /\.(ts|js)($|\?)/i // process .js and .ts files only
        })
    ]
};
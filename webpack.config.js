const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: 'C:\Users\Payl\Desktop\nig\src\index.js',
    module: {
        rules: [
            { test: /\.svg$/, use: 'svg-inline-loader' },
            { test: /\.css$/, use: ['style-loader','css-loader']},
            { test: /\.(js)$/, use: 'babel-loader' },
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader',use: ['css-loader', 'sass-loader']})
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    mode: 'production'
}
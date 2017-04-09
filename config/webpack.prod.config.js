const commonConfig = require('./webpack.common.config');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");
const webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env)=> {
    const MODE = env !== undefined ? env : 'dev';

    return webpackMerge(commonConfig(MODE), {
        output: {
            filename: '[name].[chunkhash].js',
            chunkFilename: "[name].[chunkhash].js",
            path: path.resolve(__dirname, '../dist'),
            library: '[name]'
        },
        devtool: false,
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract("css-loader")
                }
            ]
        },
        plugins: [
            new UglifyJSPlugin({
                compress: true,
                output: {
                    comments: false
                },
                beautify: false
            }),
            new webpack.HashedModuleIdsPlugin(),
            new WebpackChunkHash(),
            new ChunkManifestPlugin({
                filename: "chunk-manifest.json",
                manifestVariable: "webpackManifest"
            }),
            new ExtractTextPlugin("styles.[contenthash].css")
        ]
    });
};
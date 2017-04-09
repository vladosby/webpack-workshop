'use strict';
var path = require('path');
const webpack = require('webpack');


module.exports = (env)=> {

    return {
        context: path.resolve(__dirname, '../app'),
        entry: {
            app: './app',
            home: './home'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../dist'),
            publicPath: '../dist/',
            library: '[name]'
        },
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    options: {
                        presets: ['env'],
                        "plugins": ["dynamic-import-webpack"]
                    }
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, '../app'), path.resolve(__dirname, '../node_modules')],
            extensions: ['.js'],
            alias: {
                delayedAlert: path.resolve(__dirname, '../vendor/old_script/lib/delayed-alert')
            }
        },
        resolveLoader: {
            modules: [path.resolve(__dirname, '../node_modules')],
            extensions: ['.js'],
            moduleExtensions: ['-loader']
        },
        externals: {
            jquery: 'jQuery'
        },
        plugins: [
            new webpack.DefinePlugin({
                mode: JSON.stringify(env)
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                minSize: 2
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                chunks: ['app', 'home', 'common', 'manifest'],
                minChunks: module => /node_modules/.test(module.resource)
            })
        ],
        stats: {
            warnings: false
        }
    };
};
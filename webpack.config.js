'use strict';
var path = require('path');
const webpack = require('webpack');

module.exports = (env)=> {
    const MODE = env || 'dev';

    return {
        context: path.resolve(__dirname, 'app'),
        entry: {
            app: './app',
            home: './home'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            library: '[name]'
        },
        watch: MODE === 'dev',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /ignored_directory/
        },
        devtool: MODE === 'dev' ? 'source-map' : '',
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    options: {
                        presets: ['env']
                    }
                }
            ]
        },
        resolve: {
            modules: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'node_modules')],
            extensions: ['.js'],
            alias: {
                delayedAlert: path.resolve(__dirname, 'vendor/old_script/lib/delayed-alert')
            }
        },
        resolveLoader: {
            modules: [path.resolve(__dirname, 'node_modules')],
            extensions: ['.js'],
            moduleExtensions: ['-loader']
        },
        externals: {
            jquery: 'jQuery'
        },
        plugins: [
            new webpack.DefinePlugin({
                mode: JSON.stringify(MODE)
            }),
        ]
    };
};
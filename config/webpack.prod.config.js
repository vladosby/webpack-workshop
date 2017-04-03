const commonConfig = require('./webpack.common.config');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env)=> {
    const MODE = env !== undefined ? env : 'dev';

    return webpackMerge(commonConfig(MODE), {
        devtool: false,
        plugins: [
            new UglifyJSPlugin({
                compress: true,
                output: {
                    comments: false
                },
                beautify: false
            })
        ]
    });
};
const commonConfig = require('./webpack.common.config');
const webpackMerge = require('webpack-merge');

module.exports = (env)=> {
    const MODE = env !== undefined ? env : 'dev';

    return webpackMerge(commonConfig(MODE), {
        watch: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /ignored_directory/
        },
        devtool: 'source-map'
    });

};
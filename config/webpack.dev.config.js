const commonConfig = require('./webpack.common.config');
const webpackMerge = require('webpack-merge');
var path = require('path');

module.exports = (env)=> {
    const MODE = env !== undefined ? env : 'dev';

    return webpackMerge(commonConfig(MODE), {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /(node_modules)/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        devServer: {
            publicPath: '/dist/',
            compress: true,
            contentBase: [ path.join(__dirname, "../app"), path.join(__dirname, "../public"), path.join(__dirname, "../vendor")],
            port: 3000,
            overlay: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            proxy: [
                {
                    path: '**/*.jpg',
                    target: 'http://roscoebrown.com',
                    changeOrigin: true
                }
            ]
        }
    });

};
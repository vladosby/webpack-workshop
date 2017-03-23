'use strict';
var path = require('path');

module.exports = {
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
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
        ignored: /node_modules/
    }
};
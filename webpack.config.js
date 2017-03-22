'use strict';
var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        app: './app'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
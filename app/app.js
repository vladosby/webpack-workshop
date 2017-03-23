'use strict';

var helloWorld = require('./welcome');
var printIgnoredText = require('./ignored_directory/ingored');

helloWorld('Hello World!');

exports.helloWorld = helloWorld;
exports.printIgnoredText = printIgnoredText;

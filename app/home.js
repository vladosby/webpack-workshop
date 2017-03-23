'use strict';

var helloWorld = require('./welcome');

helloWorld('Home module working!');

exports.helloWorld = helloWorld;
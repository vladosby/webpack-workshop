'use strict';
import helloWorld from './welcome';
let delayedAlert = require('imports?settings=>{delay: 2000}!exports?delayedAlert!delayedAlert');

helloWorld('Home module working!');
delayedAlert();

export { helloWorld };
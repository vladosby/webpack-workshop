'use strict';
import helloWorld from './welcome';
import $ from 'jquery';

let delayedAlert = require('imports?settings=>{delay: 2000}!exports?delayedAlert!delayedAlert');

helloWorld('Home module working!');
delayedAlert();

setTimeout(() => {
    $('.message').text('Message from jquery.');
    $('.message').css('color', 'green');
}, 2000);

export { helloWorld };
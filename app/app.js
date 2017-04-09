import { printIgnoredText } from 'ignored_directory';
import helloWorld from './welcome';
import _ from 'lodash';
import $ from 'jquery';
import css from './styles.css';

if (mode !== 'prod') {
    require('../public/index.html');
}

helloWorld('Hello World!');

console.log('if string: ' + _.isString('123'));

setTimeout(() => {
    $('.dynamic_button').click(() => {
        require.ensure(['./dynamic-module'], (require) => {
            let dynamicMessage = require('./dynamic-module');
            dynamicMessage();
        });
        // import('./dynamic-module').then((dynamicMessage) => {
        //     dynamicMessage();
        // });

    });
}, 2000);

export { helloWorld, printIgnoredText };

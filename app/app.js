import { printIgnoredText } from 'ignored_directory';
import helloWorld from './welcome';
import _ from 'lodash';
import $ from 'jquery';

helloWorld('Hello World!');

console.log('if string: ' + _.isString('123'));

setTimeout(() => {
    $('.dynamic_button').click(() => {
        import('./dynamic-module').then((dynamicMessage) => {
            dynamicMessage();
        });

    });
}, 2000);

export { helloWorld, printIgnoredText };

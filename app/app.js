import { printIgnoredText } from 'ignored_directory';
import helloWorld from './welcome';
import _ from 'lodash';

helloWorld('Hello World!');

console.log('if string: ' + _.isString('123'));

export { helloWorld, printIgnoredText };

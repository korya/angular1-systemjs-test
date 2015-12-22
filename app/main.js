import angular from 'angular';
import {hello} from 'app/hello.js';

window.console.log('main is loaded', angular, hello);
let app = angular.module('mainApp', []);
app.directive('hello', hello);

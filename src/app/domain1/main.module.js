import { MainController } from './main.controller.js';
import { ExampleService } from './example_service.js'
import {HelloWorldTitle} from './example_directive.js'

angular.module('uiShell.main', ['restangular', 'ui.router'])
    .controller('MainController', MainController)
    .directive('helloWorldTitle', () => new HelloWorldTitle())
    .service('ExampleService', ExampleService);


import { HelloWorldCommon } from './common_directive.js';

angular.module('uiShell.common', ['restangular', 'ui.router'])
    .directive('helloWorldCommon', () => new HelloWorldCommon())


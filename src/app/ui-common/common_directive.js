(function() {
    'use strict';

    angular
        .module('uiShell.common')
        .directive('helloWorldCommon', HelloWorldCommon)

    function HelloWorldCommon() {
        var directive = {
            restrict: 'E',
            template: '<span>Hello World from the Common Area</span>'
        };

        return directive;
    }
})();
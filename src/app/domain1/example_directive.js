(function() {
    'use strict';

    angular
        .module('uiShell.main')
        .directive('helloWorldTitle', HelloWorldTitle)

    function HelloWorldTitle() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/domain1/partials/example-directive-template.html',
            scope: {
                message: '=message'
            }
        };

        return directive;
    }
})();
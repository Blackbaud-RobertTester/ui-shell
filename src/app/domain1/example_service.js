(function() {
    'use strict';

    angular.module('uiShell.main')
        .factory('ExampleService', ExampleService);

    function ExampleService($log) {
        var service = {
            logMessage: logMessage
        };

        return service;

        function logMessage(message) {
            $log.log(message);
        }
    }

    ExampleService.$inject = ['$log'];
})();

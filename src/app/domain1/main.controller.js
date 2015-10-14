(function() {
   'use strict';

    angular
        .module('uiShell.main')
        .controller('MainController', MainController);

    function MainController(ExampleService) {
        var vm = this;

        vm.message = 'Hello World!!';
        vm.logMessage = function(message) {
            ExampleService.logMessage(message);
        }
    }

    MainController.$inject = ['ExampleService'];
})();


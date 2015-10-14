(function() {
    'use strict';

    angular
        .module('uiShell')
        .config(config);

    /** @ngInject */
    function config($logProvider, $locationProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    config.$inject = ['$logProvider', '$locationProvider'];

})();

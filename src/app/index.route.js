(function() {
    'use strict';

    angular
        .module('uiShell')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/domain1/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
})();
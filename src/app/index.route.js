export function routerConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/domain1/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        });

    $urlRouterProvider.otherwise('/');
}

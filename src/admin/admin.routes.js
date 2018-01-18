(function() {
    'use strict';

    angular.module('admin')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];
    function routeConfig ($stateProvider) {
        // Routes
        $stateProvider
            .state('admin', {
                abstract: true,
                templateUrl: 'src/admin/admin.html'
            })
            .state('admin.registration', {
                url: '/registration',
                templateUrl: 'src/admin/registration/registration.html',
                controller: 'RegistrationController',
                controllerAs: 'regCtrl',
                resolve: {
                    menuItem: ['MenuService', function (MenuService) {
                        return MenuService.getMenuItem('A1');
                    }]
                }
            });
    }

})();
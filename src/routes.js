(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })

        // Category list page
        .state('categoryList', {
            url: '/categories',
            templateUrl: 'src/data/templates/categories.template.html',
            controller: 'CategoriesListController as categoryList',
            resolve: {
                categories: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // Items list page
        .state('itemList', {
            url: '/items/{categoryShortName}',
            templateUrl: 'src/data/templates/items.template.html',
            controller: "ItemsListController as itemList",
            resolve: {
                items: ['$stateParams', 'MenuDataService',
                    function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                }]
            }
        });
    }

})();
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

            // .state('mainList.itemDetail', {
            //     url: '/item-detail/{itemId}',
            //     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
            //     controller: "ItemDetailController as itemDetail"
            // });

    }

})();
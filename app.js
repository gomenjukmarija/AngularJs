(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

    var menu = this;

    menu.logMenuItems = function () {

        console.log('gfhgfhgfhgfhgfh');

        var promise = MenuSearchService.getMatchedMenuItems();

        promise.then(function (response) {
            console.log(response.data);
        })
            .catch(function (error) {
                console.log(error);
            })
    };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

    var service = this;

    service.getMatchedMenuItems = function () {
        var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            // params: {
            //     description: shortName
            // }
        });

        return response;
    };


    // return $http(...).then(function (result) {
    //     // process result and only keep items that match
    //     var foundItems...
    //
    //     // return processed items
    //     return foundItems;
    // });



}

})();
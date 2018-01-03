(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
    var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
            items: '<',
            onRemove: '&'
        },
        controller: NarrowItDownController,
        controllerAs: 'narrow',
        bindToController: true
    };

    return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

    var narrow = this;

    narrow.foundItem = function (searchTerm) {
        narrow.found = MenuSearchService.getMatchedMenuItems(searchTerm);
    };

    narrow.removeItem = function (itemIndex) {
        narrow.found.splice(itemIndex, 1);
    };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {

    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {

        var foundItems = [];

        $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
        }).then(function (response) {

            for (var i = 0; i < response.data.menu_items.length; i++) {

                if (response.data.menu_items[i].description.indexOf(searchTerm) !== -1 && searchTerm !== '')
                {
                    var item = {
                        name: response.data.menu_items[i].name,
                        short_name: response.data.menu_items[i].short_name,
                        description: response.data.menu_items[i].description
                    };

                    foundItems.push(item);
                }
            }});

        return foundItems;
    };}

})();
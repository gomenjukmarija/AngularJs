(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['MenuDataService', 'items'];

function ItemsListController(MenuDataService, items) {
    var itemList = this;
     itemList.items = items['menu_items'];
}

})();
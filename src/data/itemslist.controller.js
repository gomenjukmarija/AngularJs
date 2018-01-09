(function () {
'use strict';

angular.module('Data')
.controller('ItemsListController', ItemsListController);

ItemsListController.$inject = ['MenuDataService', 'items'];

function ItemsListController(MenuDataService, items) {
    console.log('hgjhgj');
}

})();

// (function () {
// 'use strict';
//
// angular.module('Data')
// .controller('ItemsListController', ItemsListController);
//
// ItemsListController.$inject = ['MenuDataService', 'items', '$stateParams'];
//
// function ItemsListController(MenuDataService, items, $stateParams) {
//     var itemList = this;
//
//     console.log('itemList');
// }
//
// })();
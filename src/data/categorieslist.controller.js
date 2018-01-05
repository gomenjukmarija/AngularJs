(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['MenuDataService', 'categories'];

function CategoriesListController(MenuDataService, categories) {
    var categoryList = this;
    categoryList.categories = categories;
}

})();
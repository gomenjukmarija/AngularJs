(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

    var buyList = this;

    buyList.toBuyItems = ShoppingListCheckOffService.getBuyItems();

    buyList.boughtItem = function (itemIndex, itemName, itemQuantity) {
        ShoppingListCheckOffService.boughtItem(itemIndex, itemName, itemQuantity);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

    var boughtList = this;

    boughtList.toBoughtItems = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
          name: "fruit tart",
          quantity: 5
      },
      {
          name: "macarons",
          quantity: 50
      },
      {
          name: "napoleon",
          quantity: 2
      },
      {
          name: "pancakes",
          quantity: 15
      }
  ];

  var toBoughtItems = [];

    service.boughtItem = function (itemIndex, itemName, quantity) {

      toBuyItems.splice(itemIndex, 1);

      var item = {
          name: itemName,
          quantity: quantity
      };

      toBoughtItems.push(item);
  };

  service.getBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
      return toBoughtItems;
  };

}

function ShoppingListCheckOffServiceProvider() {
    var provider = this;

    provider.$get = function () {

        var shoppingList = new ShoppingListCheckOffService();

        return shoppingList;
    };
}

})();

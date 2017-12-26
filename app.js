(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.factory('ShoppingListCheckOffFactory', ShoppingListCheckOffFactory);


ToBuyController.$inject = ['ShoppingListCheckOffFactory'];
function ToBuyController(ShoppingListCheckOffFactory) {

    var buyList = this;

    var shoppingList = ShoppingListCheckOffFactory();

    buyList.toBuyItems = shoppingList.getBuyItems();

    buyList.boughtItem = function (itemIndex, itemName, itemQuantity) {
        shoppingList.boughtItem(itemIndex, itemName, itemQuantity);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffFactory'];
function AlreadyBoughtController(ShoppingListCheckOffFactory) {

    var boughtList = this;

    var shoppingList = ShoppingListCheckOffFactory();

    boughtList.toBoughtItems = shoppingList.getBoughtItems();

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

      console.log('toBoughtItems',toBoughtItems);
  };

  service.getBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
      return toBoughtItems;
  };

}

function ShoppingListCheckOffFactory() {
    var factory = function () {
        return new ShoppingListCheckOffService();
    };

    return factory;
}

})();

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {  

  $scope.check = function() {  
   
    var count = 0;

  	$scope.item ? count = $scope.item.split(',').length : null;
    
    count <=3 ? $scope.message = "Enjoy!" : $scope.message = "Too much!"   

    !$scope.item ? $scope.message = "Please enter data first" : $scope.message;  	  	
  	
   }
}
})();

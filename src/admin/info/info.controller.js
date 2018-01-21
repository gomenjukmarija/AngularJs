(function () {
"use strict";

angular.module('admin')
.controller('InfoController', InfoController);

InfoController.$inject = ['info'];
function InfoController(info) {
    var infoCtrl = this;
    infoCtrl.info = info;
}

})();
(function () {
"use strict";

angular.module('admin')
.controller('InfoController', InfoController);

InfoController.$inject = ['info', 'ApiPath'];
function InfoController(info, ApiPath) {
    var infoCtrl = this;
    infoCtrl.info = info;
    infoCtrl.basePath = ApiPath;
}
})();
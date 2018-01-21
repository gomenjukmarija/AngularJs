(function () {
"use strict";

angular.module('admin')
.controller('InfoController', InfoController);

InfoController.$inject = ['info', '$rootScope'];
function InfoController(info, $rootScope) {
    var infoCtrl = this;
    infoCtrl.info = info;

    if (info && info.short_name) {
        $rootScope.$broadcast('registered:processing', {registered: false});
    }
}

})();
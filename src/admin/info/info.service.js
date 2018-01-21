(function () {
"use strict";

angular.module('admin')
.service('InfoService', InfoService);

function InfoService() {
    var service = this;

    var userInfo = {};

    service.setUserInfo = function (user) {
        userInfo = user;
    };

    service.getUserInfo = function () {

        console.log('userInfo',userInfo);

        return userInfo;
    };
}

})();
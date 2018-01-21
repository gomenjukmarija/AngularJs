(function () {
"use strict";

angular.module('admin')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['InfoService', 'MenuService'];
function RegistrationController(InfoService, MenuService) {

    var regCtrl = this;

    regCtrl.submit = function () {
        regCtrl.completed = true;

        var user = {};

        if (regCtrl.user && regCtrl.user.shortname) {

            var promise = MenuService.getMenuItem(regCtrl.user.shortname);

            promise.then(function (response) {
                regCtrl.item = response.data;

                user = {
                    firstname: regCtrl.user.firstname,
                    lastname: regCtrl.user.lastname,
                    email: regCtrl.user.email,
                    phone: regCtrl.user.phone,
                    short_name: regCtrl.item.short_name,
                    name: regCtrl.item.name,
                    description: regCtrl.item.name,
                    category_short_name: regCtrl.item.category_short_name
                };

                regCtrl.completed = true;
                regCtrl.error = false;

                InfoService.setUserInfo(user);
            })
                .catch(function () {
                    regCtrl.completed = false;
                    regCtrl.error = true;
                    InfoService.setUserInfo(user);
                });

        } else {
            regCtrl.completed = false;
            regCtrl.error = true;
            InfoService.setUserInfo(user);
        }
    };
}

})();
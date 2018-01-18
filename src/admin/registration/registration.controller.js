(function () {
    "use strict";

    angular.module('admin')
    .controller('RegistrationController', RegistrationController);

    // RegistrationController.$inject = ['regForm'];
    function RegistrationController() {
        var regCtrl = this;
        regCtrl.submit = function () {
            regCtrl.completed = true;
        };
    }


})();
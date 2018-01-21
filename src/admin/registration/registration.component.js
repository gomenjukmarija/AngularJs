(function() {
"use strict";

angular.module('admin')
    .component('registered', {
    template: '<div ng-if="$ctrl.registered">Not Signed Up Yet. <a ui-sref="admin.registration">Sign up Now!</a></div>',
    controller: RegisteredController
    });

RegisteredController.$inject = ['$rootScope'];
function RegisteredController($rootScope) {
    var $ctrl = this;

    var cancelListener = $rootScope.$on('registered:processing', function (event, data) {
        if (data.registered) {
            $ctrl.registered = true;
        }
        else {
            $ctrl.registered = false;
        }
    });

    $rootScope.$broadcast('registered:processing', {registered: true});

    $ctrl.$onDestroy = function () {
        cancelListener();
    };
}




})();
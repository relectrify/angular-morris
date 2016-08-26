/**
 * @ngdoc object
 * @name appfy.theme.component:appFooter
 **/
(function () {
    'use strict';
    angular.module('appfy.theme').component('appFooter', {
        bindings: {
            ngModel: '='
        },
        templateUrl: "app/themes/default/components/appFooter/appFooter.html",
        controller: /*@ngInject*/ function ($scope, $timeout, setting) {
            var vm = this;
            vm.setting = function () {
                return setting;
            }
            $timeout(function () {
                vm.showFooter = true;
            }, 2500);
        }
    });
})();
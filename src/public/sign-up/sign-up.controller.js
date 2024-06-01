(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.submitted = false;

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.user.favoriteDish).then(function(response) {
        $ctrl.user.dish = response;
        if ($ctrl.user.dish) {
            UserService.setData($ctrl.user);
        }

        $ctrl.submitted = true;
    });
  }
}

})();

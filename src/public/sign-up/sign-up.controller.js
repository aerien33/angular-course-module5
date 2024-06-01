(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.submitted = false;
  $ctrl.user = {};

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.user.favoriteDish).then(function(response) {
        $ctrl.user.dish = response;
        if ($ctrl.user.dish) {
            $ctrl.user.dish.category = MenuService.getCategory($ctrl.user.dish.short_name);
            UserService.setData($ctrl.user);
        } else {
            console.log('koko');
        }

        $ctrl.submitted = true;
    });
  }
}

})();

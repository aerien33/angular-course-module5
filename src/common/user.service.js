(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


//UserService.$inject = ['$http', 'ApiPath'];
function UserService() {
  var service = this;
  service.user = {};


  service.setData = function (user) {
    service.user = user;
  };

}


})();

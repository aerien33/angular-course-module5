(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


function UserService() {
  var service = this;
  service.user = {};


  service.setData = function (user) {
    service.user = user;
  };

}


})();

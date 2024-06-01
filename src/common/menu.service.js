(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    var category = shortName.match(/[a-zA-z]+/)[0];
    var number = shortName.match(/\d+/)[0];
    return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + (number - 1) + ".json").then(function (response) {
        return response.data;
    });
  };

}



})();

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
    var category = service.getCategory(shortName);
    var number = service.getNumber(shortName);
    return $http.get(ApiPath + '/menu_items/' + category + '/menu_items/' + (number - 1) + ".json").then(function (response) {
        return response.data;
    });
  };

  service.getCategory = function (shortName) {
    return shortName.match(/[a-zA-z]+/)[0];
  }

  service.getNumber = function (shortName) {
    return shortName.match(/\d+/)[0];
  }

}



})();

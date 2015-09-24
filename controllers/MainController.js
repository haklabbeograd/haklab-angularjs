'use strict';
angular.module('haklab').controller('MainController', MainController);


function MainController($scope, WorkshopService, $routeParams) {

  var id = $routeParams.id || null;
  $scope.radionice = null;

  if (id !== null) {
    WorkshopService.get(id).then(function(response) {
      $scope.ovaRadionica = response.data;
    });
  } else {
    WorkshopService.getAll().then(function(response) {
      $scope.radionice = response.data;
    });
  }

}   // MainController

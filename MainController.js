var app = angular.module('haklab');

app.controller('MainController',function($scope, GoogleService,$routeParams){
  $scope.ime = $routeParams.ime;

  $scope.klikni = function(){
    $scope.radionica = GoogleService.reciNesto($scope.ime);
  }
});

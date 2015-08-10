angular.module('haklab').controller('MainController',function($scope,BackendService){
  $scope.users = BackendService.users;

});

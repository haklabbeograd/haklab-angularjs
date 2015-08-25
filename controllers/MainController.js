angular.module('haklab').controller('MainController',function($scope, RadioniceServis, $routeParams){

  var id = $routeParams.broj || null;

  $scope.radionice = null;

  RadioniceServis.dodaj().then(function(){

  });

  if(id != null){
    RadioniceServis.radionica(id).then(function(response){
      $scope.ovaRadionica = response.data;
    });
  }else
  {
    RadioniceServis.radionice().then(function(response){
      $scope.radionice = response.data;
    });
  }
});
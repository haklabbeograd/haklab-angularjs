angular.module('haklab').controller('EventController',function($scope,
EventService){

  EventService.getAll().then(function(data){
    $scope.events = data.data;
  });
});

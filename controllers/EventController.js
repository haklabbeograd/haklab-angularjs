angular.module('haklab').controller('EventController', EventController);

function EventController($scope, EventService){

  EventService.getAll().then(function(data){
    $scope.events = data.data;
  });

}   // EventController

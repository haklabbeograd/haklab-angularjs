angular.module('haklab').controller('EventController', EventController);

EventController.$inject = ['$scope', 'EventService'];

function EventController($scope, EventService){

  EventService.getAll().then(function(data){
    $scope.events = data.data;
  });

}   // EventController

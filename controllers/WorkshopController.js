angular.module('haklab').controller('WorkshopController', WorkshopController);

function WorkshopController($scope, WorkshopService){
    WorkshopService.getAll().then(function(data){
    $scope.radionice = data.data;
  });

}   // EventController
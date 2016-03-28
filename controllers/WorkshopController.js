angular.module('haklab').controller('WorkshopController', WorkshopController);

WorkshopController.$inject = ['$scope', 'WorkshopService'];

function WorkshopController($scope, WorkshopService){
    WorkshopService.getAll().then(function(data){
    $scope.radionice = data.data;
  });

}   // EventController

angular.module('haklab').controller('AddController',function($scope,BackendService){

    $scope.user = {};

    $scope.timestamps = [1439164800000, 1439769600000, 1440374400000 ];

    $scope.prijaviSeGoogle = function(){
        BackendService.prijaviSe();
    }

    $scope.prijaviSe = function(){
      BackendService.addUser($scope.user);
    }

});

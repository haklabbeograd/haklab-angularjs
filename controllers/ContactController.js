angular.module('haklab').controller('ContactController',function($scope,
UtilService){

$scope.submitForm = function(){
  console.log('hello')
  UtilService.sendEmail($scope.req).then(function(data){
    console.log(JSON.stringify(data));
  });
}

});

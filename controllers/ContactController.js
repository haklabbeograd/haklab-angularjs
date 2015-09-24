angular.module('haklab').controller('ContactController', ContactController);


function ContactController($scope, UtilService){

    $scope.submitForm = function(){
      console.log('hello');
      UtilService.sendEmail($scope.req).then(function(data){
        console.log(JSON.stringify(data));
      });
  };    // submitForm

}   // ContactController

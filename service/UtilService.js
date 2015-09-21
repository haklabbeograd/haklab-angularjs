'use strict';
angular.module('haklab').service('UtilService', function($http) {

  var self = this;

  this.sendEmail = function(data) {
    return $http.post('https://haklab.herokuapp.com/send',data);
  };

  return self;


});

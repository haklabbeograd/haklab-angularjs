'use strict';
angular.module('haklab').service('UtilService', function($http, CONFIG) {

  var self = this;

  this.sendEmail = function(data) {
    return $http.post(CONFIG.url + '/send',data);
  };

  return self;


});

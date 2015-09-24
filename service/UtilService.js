'use strict';
angular.module('haklab').service('UtilService', UtilService);


function UtilService($http, CONFIG) {

  var self = this;

  this.sendEmail = function(data) {
    return $http.post(CONFIG.url + '/send',data);
  };

  return self;

}   // UtilService

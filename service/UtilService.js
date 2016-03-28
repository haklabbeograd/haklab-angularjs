'use strict';
angular.module('haklab').service('UtilService', UtilService);

UtilService.$inject = ['$http', 'CONFIG'];

function UtilService($http, CONFIG) {

  var self = this;

  this.sendEmail = function(data) {
    return $http.post(CONFIG.url + '/send',data);
  };

  return self;

}   // UtilService

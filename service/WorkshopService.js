'use strict';
angular.module('haklab').service('WorkshopService', ['$http', 'CONFIG', WorkshopService]);

WorkshopService.$inject = ['$http', 'CONFIG'];

function WorkshopService($http, CONFIG) {

  var self = this;

  this.getAll = function() {
    return $http.get(CONFIG.url + '/radionice');
  };

  this.get = function(id) {
    return $http.get(CONFIG.url + '/radionice/' + id);
  };

  this.add = function() {
    return $http.get(CONFIG.url + '/test?ime=logika');
  };

  return self;

}   // WorkshopService

'use strict';
angular.module('haklab').service('WorkshopService', WorkshopService);


function WorkshopService($http, CONFIG) {

  var self = this;

  this.getAll = function() {
    return $http.get(CONFIG.url + '/radionice');
  };

  this.get = function(id) {
    return $http.get(CONGIF.url + '/radionice/' + id);
  };

  this.add = function() {
    return $http.get(CONGIF.url + '/test?ime=logika');
  };

  return self;

}   // WorkshopService

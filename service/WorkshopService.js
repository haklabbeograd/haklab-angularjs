'use strict';
angular.module('haklab').service('WorkshopService', function($http) {

  var self = this;

  this.getAll = function() {
    return $http.get('https://haklab.herokuapp.com/radionice');
  };

  this.get = function(id) {
    return $http.get('https://haklab.herokuapp.com/radionice/' + id);
  };

  this.add = function() {
    return $http.get('https://haklab.herokuapp.com/test?ime=logika');
  };

  return self;


});

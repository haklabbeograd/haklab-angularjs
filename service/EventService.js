'use strict';
angular.module('haklab').service('EventService', function($http) {

  var self = this;

  this.getAll = function() {
    return $http.get('https://haklab.herokuapp.com/events');
  };

  this.get = function(id) {
    return $http.get('https://haklab.herokuapp.com/events/' + id);
  };

  this.add = function() {
    return $http.get('https://haklab.herokuapp.com/test?ime=event3');
  };

  return self;


});

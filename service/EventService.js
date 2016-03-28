'use strict';
angular.module('haklab').service('EventService', EventService);

EventService.$inject = ['$http', 'CONFIG'];

function EventService($http, CONFIG) {

  var self = this;

  this.getAll = function() {
    return $http.get(CONFIG.url + "/events");
  };

  this.get = function(id) {
    return $http.get(CONFIG.url + '/events/' + id);
  };

  this.add = function() {
    return $http.get(CONFIG.url +'/test?ime=event3');
  };

  return self;

}   // EventService

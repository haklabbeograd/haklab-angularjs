'use strict';
angular.module('haklab').service('RadioniceServis', function($http) {
  var self = this;
  this.dohvatiRadionice = function() {
    return $http.get('https://haklab.herokuapp.com/radionice');
  };

  this.dohvatiRadionicu = function(id) {
    return $http.get('https://haklab.herokuapp.com/radionice/' + id);
  };

  this.dodajRadionicu = function() {
    return $http.get('https://haklab.herokuapp.com/test?ime=logika');
  };

  return {
    radionice: self.dohvatiRadionice,
    radionica: self.dohvatiRadionicu,
    dodaj: self.dodajRadionicu
  };


});

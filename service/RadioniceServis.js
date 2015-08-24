angular.module('haklab').service('RadioniceServis', function($http){
  var self = this;
  this.dohvatiRadionice = function(){
    return $http.get('http://localhost:5000/radionice');
  }

  this.dohvatiRadionicu = function(id){
    return $http.get('http://localhost:5000/radionice/'+id);
  }

  this.dodajRadionicu = function(){
    return $http.get('http://localhost:5000/test?ime=logika');
  }

  return {
    radionice : self.dohvatiRadionice,
    radionica : self.dohvatiRadionicu,
    dodaj : self.dodajRadionicu
  }


});

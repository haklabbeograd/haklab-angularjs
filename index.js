var app = angular.module('haklab',['ngRoute']);

// Conroller

app.config(function($routeProvider){

    $routeProvider
    .when('/radionica',{
      controller: 'RadionicaCtrl',
      templateUrl: 'views/radionice.html'
    })
    .when('/radionica/:ime',{
      controller: "RadionicaCtrl",
      templateUrl: "views/rad.html"
    })
    .when('/termini/:ime/',{
      controller: 'MainController',
      templateUrl: 'views/termini.html'
    })
    .otherwise('/');

});


app.controller('RadionicaCtrl', function($scope, $http, $location, $routeParams, GoogleService){
  $scope.radionica = $routeParams.ime;

  $scope.lista = GoogleService.dohvatiListu;
  

  $scope.dodaj = function(ime){
    GoogleService.dodaj(ime);
  };

  $scope.otvoriRadionicu = function(ime){
    $location.path('/radionica/'+ime);
  }

});



app.controller('RadionicaController')

app.service('GoogleService',function(){
    var lista = [
      'javascript',
      'logika',
      'drupal',
      'francuski',
      'elektronika'
    ];

    return {
        dodaj: function(ime){
           lista.push(ime);
        },
        dohvati: function(id){
          return lista[id];
        },
        dohvatiListu: lista
    }

});

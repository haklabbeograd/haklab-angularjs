var app = angular.module('haklab',['ngRoute','firebase']);

app.config(function($routeProvider){

    $routeProvider
    .when('/',{
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .when('/add',{
      controller: 'AddController',
      templateUrl: 'views/add.html'
    })
    .otherwise('/');

});

var app = angular.module('haklab',['ngRoute','firebase']);

app.config(function($routeProvider){

    $routeProvider
    .when('/',{
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .otherwise('/');

});

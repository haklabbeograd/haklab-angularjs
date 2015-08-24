var app = angular.module('haklab',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/',{
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .when('/:broj',{
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .when('/add',{
      controller: 'AddController',
      templateUrl: 'views/add.html'
    })
    .otherwise('/');

});

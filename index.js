var app = angular.module('haklab',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
    .when('/',{
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .when('/workshop',{
      controller: 'WorkshopController',
      templateUrl: 'views/workshop.html'
    })
	.when('/event',{
      controller: 'EventController',
      templateUrl: 'views/event.html'
    })
  .when('/about',{
    templateUrl: 'views/about.html'
  })
  .when('/donations',{
    templateUrl: 'views/donations.html'
  })
  .when('/contact',{
    controller: 'ContactController',
    templateUrl: 'views/contact.html'
  })
  .when('/:id',{
    controller: 'MainController',
    templateUrl: 'views/home.html'
	 })

    .otherwise('/');

});

app.constant("CONFIG", {
        "url": "http://localhost:5000",
    });

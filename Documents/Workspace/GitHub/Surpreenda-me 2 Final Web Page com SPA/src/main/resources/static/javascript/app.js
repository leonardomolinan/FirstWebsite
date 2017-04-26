var myApp = angular.module('myApp', ['ngRoute', 'toaster', 'ngAnimate']);

myApp.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/cadastro', {
        templateUrl: '../views/cadastro.html',
        controller:'cadastroController'
    })

    .when('/login', {
            templateUrl: '../views/login.html',
            controller:'LoginController'
    });
});



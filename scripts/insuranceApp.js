var app = angular.module('InsuranceApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/users', {
            templateUrl: 'views/users/index.html',
            controller: 'UsersIndexController'
        })
        .when('/users/createOrEdit', {
            templateUrl: 'views/users/createOrEdit.html',
            controller: 'UsersCreateOrEditController'
        })
        .when('/insurances', {
            templateUrl: 'views/insurances/index.html',
            controller: 'InsurancesIndexController'
        })
        .when('/insurances/createOrEdit', {
            templateUrl: 'views/insurances/createOrEdit.html',
            controller: 'InsurancesCreateOrEditController'
        });
}]);

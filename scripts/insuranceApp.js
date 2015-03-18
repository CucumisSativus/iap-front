var app = angular.module('InsuranceApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        });
}]);

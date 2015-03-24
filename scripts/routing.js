app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/auth/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'views/auth/register.html',
            controller: 'RegisterController'
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

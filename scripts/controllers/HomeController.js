app.controller('HomeController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.email = Auth.credentials.email;
  $scope.message = 'Hello Bootstrap from HomeController!';
}]);

app.controller('HomeController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Hello Bootstrap from HomeController!';
}]);

app.controller('UsersCreateOrEditController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Hello Bootstrap from UsersCreateOrEditController!';
}]);

app.controller('UsersCreateOrEditController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'New user';
}]);

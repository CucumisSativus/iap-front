app.controller('InsurancesIndexController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Hello Bootstrap from InsurancesIndexController!';
}]);

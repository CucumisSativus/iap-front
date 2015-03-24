app.controller('InsurancesCreateOrEditController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Hello Bootstrap from InsurancesCreateOrEditController!';
}]);

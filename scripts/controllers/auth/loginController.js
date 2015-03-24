app.controller('LoginController', ['$scope', 'Auth', function ($scope, Auth) {
  $scope.message = 'Hello Bootstrap from LoginController!';

  $scope.formSubmit = function() {
    Auth.userToken = 'dummy';
    location.replace('#/');
  };
}]);

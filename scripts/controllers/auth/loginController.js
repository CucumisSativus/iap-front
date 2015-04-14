app.controller('LoginController', ['$scope', 'Auth', function ($scope, Auth) {
  $scope.form = {
    email: '',
    password: ''
  };

  $scope.message = 'Hello Bootstrap from LoginController!';

  $scope.formSubmit = function() {
    Auth.signIn($scope.form.email, $scope.form.password);
  };
}]);

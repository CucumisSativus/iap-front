app.controller('RegisterController', ['$scope', 'Auth', function ($scope, Auth) {
  $scope.message = 'Hello Bootstrap from RegisterController!';

  $scope.form = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  $scope.formSubmit = function() {
    Auth.signUp($scope.form.email, $scope.form.password, $scope.form.passwordConfirmation);
  };
}]);

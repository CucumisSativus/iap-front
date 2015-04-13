app.controller('UsersEditController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Edit';
    $scope.user = {id:'1',first_name:'Lesley',last_name:'Tristan',created_at:'2015-03-24',updated_at:'2015-03-24'};
}]);
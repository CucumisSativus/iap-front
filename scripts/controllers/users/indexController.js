app.controller('UsersIndexController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Hello Bootstrap from UsersIndexController!';
  $scope.users = [{firstName:'Lesley',lastName:'Tristan'},
                  {firstName:'Vergil', lastName:'Gareth'},
                  {firstName:'Dannie', lastName:'Wallace'},
                  {firstName:'Layton', lastName:'Liam'},
                  {firstName:'Tom', lastName:'Leroy'},
                  {firstName:'Kirby', lastName:'Ellery'}];
     
}]);

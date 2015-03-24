app.controller('UsersIndexController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'Hello Bootstrap from UsersIndexController!';
  $scope.users = [{name:'Lesley',surname:'Tristan'},
                  {name:'Vergil', surname:'Gareth'},
                  {name:'Dannie', surname:'Wallace'},
                  {name:'Layton', surname:'Liam'},
                  {name:'Tom', surname:'Leroy'},
                  {name:'Kirby', surname:'Ellery'}];
     
}]);

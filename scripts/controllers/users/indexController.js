app.controller('UsersIndexController', ['$scope', 'Auth', 'SimpleHttp', function ($scope, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();
    $scope.responseData = [];
    var headers = {
        'X-User-Email': Auth.credentials.email,
        'X-User-Token': Auth.credentials.authToken
    };
    this.users = [];
  SimpleHttp.headerRequest('get', 'http://iap1.null.yt/api/v1/customers', null, headers)
                .then(function(response) {
                  if(response.status === 200 &&
                     response.data.success) {
                      this.users = [];
                      $scope.responseData = response.data.data;
                      $scope.users = angular.fromJson($scope.responseData);                      
                  }      
                  else {
                    Auth.handleError(response.data.error);
                  }
                });
  $scope.message = 'List of users';
     
}]);

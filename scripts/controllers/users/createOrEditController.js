app.controller('UsersCreateOrEditController', ['$scope', 'Auth', 'SimpleHttp', function ($scope, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'New user';
    
        $scope.responseData = [];
    var headers = {
        'X-User-Email': Auth.credentials.email,
        'X-User-Token': Auth.credentials.authToken
    };
    
    $scope.form = {
        first_name : '',
        last_name : ''
    };
    
    $scope.formSubmitCreateUser = function(){
         SimpleHttp.headerRequest('post', 'http://iap1.null.yt/api/v1/customers', $scope.form, headers)
            .then(function(response) {
              if(response.status === 200 &&
                 response.data.success) {
                  $scope.responseData = response.data.data;                     
              }      
              else {
                Auth.handleError(response.data.error);
              } 
         });
        location.replace('#/users');
    };
}]);

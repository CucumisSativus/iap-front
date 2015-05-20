app.controller('UsersEditController', ['$scope', '$routeParams', 'Auth', 'SimpleHttp', function ($scope, $routeParams, Auth, SimpleHttp) {
    Auth.redirectIfNotAuthorized();
    
    $scope.responseData = [];
    var headers = {
        'X-User-Email': Auth.credentials.email,
        'X-User-Token': Auth.credentials.authToken,
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };

    $scope.message = 'Edit';
    
    $scope.form = {
        first_name : '',
        last_name : ''
    };
    
    SimpleHttp.headerRequest('get', 'http://iap1.null.yt/api/v1/customers/'+$routeParams.customerId, null, headers)
        .then(function(response) {
          if(response.status === 200 &&
             response.data.success) {
              $scope.responseData = response.data.data;
              $scope.user = angular.fromJson($scope.responseData);
              $scope.form.first_name = $scope.user.first_name;
              $scope.form.last_name = $scope.user.last_name;
          }      
          else {
            Auth.handleError(response.data.error);
          }
    });
    
    $scope.formSubmitUpdateCustomer = function(){
         SimpleHttp.headerRequest('put', 'http://iap1.null.yt/api/v1/customers/'+$routeParams.customerId, $scope.form, headers)
            .then(function(response) {
              if(response.status === 200 &&
                 response.data.success) {
                  $scope.responseData = response.data.data;
                  location.replace('#/users');
              }      
              else {
                Auth.handleError(response.data.error);
              } 
         });
        
    };
}]);
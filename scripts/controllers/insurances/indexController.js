app.controller('InsurancesIndexController', ['$scope', 'Auth', 'SimpleHttp', function ($scope, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'List of insurance policies';
    
    $scope.responseData = [];
    var headers = {
        'X-User-Email': Auth.credentials.email,
        'X-User-Token': Auth.credentials.authToken
    };
    this.policies = [];
  SimpleHttp.headerRequest('get', 'http://iap1.null.yt/api/v1/insurance_policies', null, headers)
                .then(function(response) {
                  if(response.status === 200 &&
                     response.data.success) {
                      $scope.responseData = response.data.data;
                      $scope.policies = angular.fromJson($scope.responseData);                      
                  }      
                  else {
                    Auth.handleError(response.data.error);
                  }
                });
  $scope.message = 'List of insurances';

    $scope.deleteInsurance = function(id, listPosition) {
                 SimpleHttp.headerRequest('delete', 'http://iap1.null.yt/api/v1/insurance_policies/'+id, null, headers)
            .then(function(response) {
              if(response.status === 200 &&
                 response.data.success) {
                  $scope.responseData = response.data.data;
                  $scope.policies.splice(listPosition, 1);
              }      
              else {
                Auth.handleError(response.data.error);
              } 
         });
    };
}]);

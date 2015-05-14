app.controller('InsurancesIndexController', ['$scope', 'Auth', 'SimpleHttp', function ($scope, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'List of insurance policies';
//  $scope.policies = [{id:'1',customer_id:'',amount:'100',created_at:'2015-03-26',updated_at:'2015-03-26'},
//                     {id:'2',customer_id:'',amount:'200',created_at:'2015-03-26',updated_at:'2015-03-26'},
//                     {id:'3',customer_id:'',amount:'5340',created_at:'2015-03-26',updated_at:'2015-03-26'},
//                     {id:'4',customer_id:'',amount:'234',created_at:'2015-03-26',updated_at:'2015-03-26'},
//                     {id:'5',customer_id:'',amount:'312',created_at:'2015-03-26',updated_at:'2015-03-26'}];
    
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
  $scope.message = 'List of users';
}]);

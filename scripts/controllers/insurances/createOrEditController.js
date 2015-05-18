app.controller('InsurancesCreateOrEditController', ['$scope', 'Auth', 'SimpleHttp', function ($scope, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'New insurance policy';

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
          $scope.responseData = response.data.data;
          $scope.users = angular.fromJson($scope.responseData);                      
      }      
      else {
        Auth.handleError(response.data.error);
      }
    });
    
    $scope.form = {
        customer_id : '',
        amount : ''
    };
    
    $scope.formSubmitCreateInsurance = function(){
         SimpleHttp.headerRequest('post', 'http://iap1.null.yt/api/v1/insurance_policies', $scope.form, headers)
            .then(function(response) {
              if(response.status === 200 &&
                 response.data.success) {
                  $scope.responseData = response.data.data;                     
              }      
              else {
                Auth.handleError(response.data.error);
              } 
         });
        location.replace('#/insurances');
    };
}]);

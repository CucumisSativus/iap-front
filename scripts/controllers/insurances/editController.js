app.controller('InsurancesEditController', ['$scope', '$routeParams', 'Auth', 'SimpleHttp', function ($scope, $routeParams, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();
    
    $scope.responseData = [];
    var headers = {
        'X-User-Email': Auth.credentials.email,
        'X-User-Token': Auth.credentials.authToken,
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
    };
    
    $scope.form = {
        customer_id : '',
        amount : ''
    };
    
    SimpleHttp.headerRequest('get', 'http://iap1.null.yt/api/v1/insurance_policies/'+$routeParams.insuranceId, null, headers)
            .then(function(response) {
              if(response.status === 200 &&
                 response.data.success) {
                  $scope.responseData = response.data.data;
                  $scope.insurance = angular.fromJson($scope.responseData);
                  $scope.form.amount = parseInt($scope.insurance.amount);
                  
            $scope.users = [];
            SimpleHttp.headerRequest('get', 'http://iap1.null.yt/api/v1/customers', null, headers)
                .then(function(response) {
                  if(response.status === 200 &&
                     response.data.success) {
                      $scope.responseData = response.data.data;
                      $scope.users = angular.fromJson($scope.responseData);          
                      $scope.selectedUser = $scope.users[$scope.insurance.customer_id];
                  }      
                  else {
                    Auth.handleError(response.data.error);
                  }
                });
              }      
              else {
                Auth.handleError(response.data.error);
              }
    });
    
    $scope.formSubmitUpdateInsurance = function(){
        $scope.form.customer_id = $scope.selectedUser.id;
         SimpleHttp.headerRequest('put', 'http://iap1.null.yt/api/v1/insurance_policies/'+$routeParams.insuranceId, $scope.form, headers)
            .then(function(response) {
              if(response.status === 200 &&
                 response.data.success) {
                  $scope.responseData = response.data.data;
                  location.replace('#/insurances');
              }      
              else {
                Auth.handleError(response.data.error);
              } 
         });        
    };
}]);
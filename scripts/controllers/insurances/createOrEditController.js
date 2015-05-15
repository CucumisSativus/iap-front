app.controller('InsurancesCreateOrEditController', ['$scope', 'Auth', 'SimpleHttp', function ($scope, Auth, SimpleHttp) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'New insurance policy';
    
//  $scope.users = [{id:'1',first_name:'Lesley',last_name:'Tristan',created_at:'2015-03-24',updated_at:'2015-03-24'},
//                  {id:'2',first_name:'Vergil', last_name:'Gareth',created_at:'2015-03-24',updated_at:'2015-03-24'},
//                  {id:'3',first_name:'Dannie', last_name:'Wallace',created_at:'2015-03-24',updated_at:'2015-03-24'},
//                  {id:'4',first_name:'Layton', last_name:'Liam',created_at:'2015-03-24',updated_at:'2015-03-24'},
//                  {id:'5',first_name:'Tom', last_name:'Leroy',created_at:'2015-03-24',updated_at:'2015-03-24'},
//                  {id:'6',first_name:'Kirby', last_name:'Ellery',created_at:'2015-03-24',updated_at:'2015-03-24'}];
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

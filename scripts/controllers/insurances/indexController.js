app.controller('InsurancesIndexController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();

  $scope.message = 'List of insurance policies';
  $scope.policies = [{id:'1',customer_id:'',amount:'100',created_at:'2015-03-26',updated_at:'2015-03-26'},
                     {id:'2',customer_id:'',amount:'200',created_at:'2015-03-26',updated_at:'2015-03-26'},
                     {id:'3',customer_id:'',amount:'5340',created_at:'2015-03-26',updated_at:'2015-03-26'},
                     {id:'4',customer_id:'',amount:'234',created_at:'2015-03-26',updated_at:'2015-03-26'},
                     {id:'5',customer_id:'',amount:'312',created_at:'2015-03-26',updated_at:'2015-03-26'}];
}]);

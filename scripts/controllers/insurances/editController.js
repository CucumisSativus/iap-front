app.controller('InsurancesEditController', ['$scope', 'Auth', function ($scope, Auth) {
  Auth.redirectIfNotAuthorized();
    
    $scope.message = 'Edit';
    $scope.insurance = {customer_id:'1',amount:'100'};
    
    $scope.users = [{id:'1',first_name:'Lesley',last_name:'Tristan',created_at:'2015-03-24',updated_at:'2015-03-24'},
                    {id:'2',first_name:'Vergil', last_name:'Gareth',created_at:'2015-03-24',updated_at:'2015-03-24'},
                    {id:'3',first_name:'Dannie', last_name:'Wallace',created_at:'2015-03-24',updated_at:'2015-03-24'},
                    {id:'4',first_name:'Layton', last_name:'Liam',created_at:'2015-03-24',updated_at:'2015-03-24'},
                    {id:'5',first_name:'Tom', last_name:'Leroy',created_at:'2015-03-24',updated_at:'2015-03-24'},
                    {id:'6',first_name:'Kirby', last_name:'Ellery',created_at:'2015-03-24',updated_at:'2015-03-24'}];
    $scope.selectedUser = $scope.users[$scope.insurance.customer_id-1];
}]);
/*jshint camelcase: false */

app.factory('Auth', ['$http', 'SimpleHttp', function($http, SimpleHttp) {
  var auth = {};
  auth.API_URL = 'http://iap1.null.yt/api/v1/';
  auth.userToken = '';

  //----------

  auth.isAuthorized = function () {
    return this.userToken.length > 0;
  };

  auth.redirectIfNotAuthorized = function () {
    if(!this.isAuthorized()) {
      location.replace('#/login');
    }
  };

  auth.signUp = function(email, password, passwordConfirmation) {
    var postData = {
      user: {
        email: email  ,
        password: password,
        password_confirmation: passwordConfirmation
      }
    };
    SimpleHttp.request('post', this.API_URL + 'registrations', postData)
      .then(function(response,a,b,c) {
        console.log(response);
      })
      .error(function(response,a,b,c) {
        console.log(response);
      });
  };

  //----------

  return auth;
}]);

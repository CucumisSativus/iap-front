/*jshint camelcase: false */

app.factory('Auth', ['$http', 'SimpleHttp', function($http, SimpleHttp) {
  var auth = {};
  auth.API_URL = 'http://iap1.null.yt/api/v1/';
  auth.credentials = {
    authToken: '',
    email: ''
  };

  //----------

  auth.handleError = function(message) {
    alert('Something went terribly wrong: ' + message);
  };

  auth.isAuthorized = function () {
    return this.credentials.authToken.length > 0 &&
      this.credentials.email.length > 0;
  };

  auth.redirectIfNotAuthorized = function () {
    if(!this.isAuthorized()) {
      location.replace('#/login');
    }
  };

  auth.redirectToHome = function() {
    location.replace('#/');
  };

  auth.setAuthorized = function(email, authToken) {
    this.credentials.email = email;
    this.credentials.authToken = authToken;
  };

  auth.signIn = function(email, password) {
    var userToken;
    var postData = {
      user: {
       email: email,
       password: password
      }
    };

    SimpleHttp.request('post', this.API_URL + 'sessions.json', postData)
    .then(function(response) {
      if(response.status === 200 &&
         response.data.success) {
          auth.setAuthorized(response.data.data.email, response.data.data.auth_token);
          auth.redirectToHome();
      }
      else {
       auth.handleError(response.data.error);
      }
    });
  };

  auth.signUp = function(email, password, passwordConfirmation) {
    var postData = {
      user: {
        email: email  ,
        password: password,
        password_confirmation: passwordConfirmation
      }
    };
    SimpleHttp.request('post', this.API_URL + 'registrations.json', postData)
      .then(function(response) {
      if(response.status === 200 &&
         response.data.success) {
          auth.setAuthorized(response.data.data.email, response.data.data.auth_token);
          auth.redirectToHome();
      }
      else {
       auth.handleError(response.data.error);
      }
    });
  };

  //----------

  return auth;
}]);

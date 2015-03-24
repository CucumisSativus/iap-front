app.factory('SimpleHttp', ['$http', '$q', function($http, $q) {
  var simpleHttp = {};
  simpleHttp.request = function(method, url, data) {
        var request;
        if (method === 'get') {
            request = $http({
                method: method,
                url: url
            });
        }
        else {
            request = $http({
                method: method,
                url: url,
                data: data
            });
        }

        return (request.then(this.handleSuccess, this.handleError));
    };

    simpleHttp.handleError = function(response) {
        return response;
    };

    simpleHttp.handleSuccess = function(response) {
        return (response);
    };

    return simpleHttp;
}]);

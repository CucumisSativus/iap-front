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
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject('An unknown error occurred.'));
        }
        // Otherwise, use expected error message.
        return ($q.reject(response.data.message));
    };

    simpleHttp.handleSuccess = function(response) {
        return (response.data);
    };

    return simpleHttp;
}]);

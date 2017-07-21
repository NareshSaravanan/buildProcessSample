(function() {
  angular
    .module('sampleProjectApp')
    .factory('remoteCall', remoteCall);

  remoteCall.$inject = ['$q','$http','$rootScope'];
  function remoteCall($q, $http,$rootScope)
  {



    var endpointUrl = '';

    var sendRequest = function sendRequest(method,url,  dataObj) {
      //addRequestId(dataObj);

      var deferred = $q.defer();
      deferred.resolve($http({
        method : method,
        url : endpointUrl + url,
        data : dataObj,
        headers: dataObj.headers
        //  headers: dataObj.headers //should be stored in this file, not passed in
      }).success(function(result) {
        return result;

      }));
      return deferred.promise;

    };
    return {
      get: function(url, dataObj) {

        return sendRequest('GET', url,  dataObj);
      },
      post: function(url, dataObj) {

        return sendRequest('POST',url,  dataObj);
      }
    };
  }

})();


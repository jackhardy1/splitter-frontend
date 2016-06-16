angular.module('splitter')
       .service('BillService', ['$http', function($http) {
  var self = this;

  self.getAll = function() {
    var url = 'http://localhost:3000/bills/';

    return $http.get(url)
    .then(function(response){
      return response.data;
    });
  };
}]);

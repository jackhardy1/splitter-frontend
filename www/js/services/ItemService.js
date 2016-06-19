angular.module('splitter')
       .service('ItemService', ['$http', function($http) {
  var self = this;

  self.getAll = function(id) {
    var url = 'http://localhost:3000/bills/' + id + '/items';
    return $http.get(url)
    .then(function(response){
      return response.data;
    });
  };
}]);

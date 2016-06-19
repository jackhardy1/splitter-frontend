angular.module('splitter')
       .service('ItemService', ['$http', function($http) {
  var self = this;

  self.getAll = function(id) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + id + '/items';
    return $http.get(url)
    .then(function(response){
      return response.data;
    });
  };
}]);

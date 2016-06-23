angular.module('splitter')
       .service('ItemService', ['$http', function($http) {

  var self = this;
  self.getAll = getAll;
  self.removeItem = removeItem;
  self.editItem = editItem;
  self.addItem = addItem;

  function getAll(id) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + id + '/items';
    return $http.get(url).then(function(response){
      return response.data;
    });
  }

  function removeItem(billId, itemId){
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/' + itemId ;
    return $http.delete(url);
  }

  function editItem(billId, itemId, params) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/' + itemId ;
    return $http.patch(url, {item: params});
  }

  function addItem(billId, params) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/';
    return $http.post(url, {item: params, bill_id: billId});
  }

}]);

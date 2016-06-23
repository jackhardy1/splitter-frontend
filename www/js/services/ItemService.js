angular.module('splitter')
       .service('ItemService', ['$http', function($http) {

  var self = this;
  self.removeItem = removeItem;
  self.editItem = editItem;
  self.addItem = addItem;
  self.sendEmail = sendEmail;
  self.getAll = getAll;
  self.seperateItems = seperateItems;
  self.getAllItems = getAllItems;

  function sendEmail(billId) {
    emailUrl = 'http://splitter-backend.herokuapp.com/bills/mailer';
    console.log(billId);
    $http.post(emailUrl,  { bill_id: billId } );
  }

  function getAll(id) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + id + '/items';
    return $http.get(url)
    .then(function(response){
      self.seperateItems(response.data);
    });
  }

  function seperateItems(items) {
    items.forEach(function(item){
      if(item.quantity > 1) {
        var quantity = item.quantity;
        for(i=0; i < quantity; i++ ){
          price = (item.price)/quantity;
          params = {name: item.name, price: price, quantity: 1, contact: item.contact};
          self.addItem(item.bill_id, params);
        }
        self.removeItem(item.bill_id, item.id);
      }
    });
     self.getAllItems(items[0].bill_id);
  }

  function getAllItems(id) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + id + '/items';
    return $http.get(url)
    .then(function(response){
      return response.data;
    });
  }

  function removeItem(billId, itemId){
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/' + itemId ;
    return $http.delete(url);
  }

  function editItem(billId, itemId, params) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/' + itemId ;
    return $http.patch(url, {item: params})
    .then(function(){
      self.getAll(billId);
    });
  }

  function addItem(billId, params) {
    var url = 'http://splitter-backend.herokuapp.com/bills/' + billId +  '/items/';
    return $http.post(url, {item: params, bill_id: billId})
    .then(function(){
      self.getAll(billId);
    });
  }
}]);

angular.module('splitter')
       .controller('ItemController', ['ItemService', function(ItemService){

 var self = this;
 self. getItems = getItems;

  function getItems(id) {
    ItemService.getAll(id)
    .then(function(response){
      self.items = response;
    });
  }
}]);

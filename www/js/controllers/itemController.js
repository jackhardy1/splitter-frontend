angular.module('splitter')
       .controller('ItemController', ['ItemService', '$stateParams', function(ItemService, $stateParams){

 var self = this;
 self. getItems = getItems;

 self.currentId = $stateParams.id;

  function getItems(id) {
    ItemService.getAll(id)
    .then(function(response){
      self.items = response;
    });
  }
}]);

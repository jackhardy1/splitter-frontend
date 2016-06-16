angular.module('splitter')
       .controller('ItemController', ['ItemService', function(ItemService){

         var self = this;

         ItemService.getAll(id)
         .then(function(response){
           self.items = response;
         });
       }]);

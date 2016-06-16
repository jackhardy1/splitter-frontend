angular.module('splitter')
       .factory('ItemFactory', function(){

  var item = function(item) {
    this.name = item.name;
    this.price = item.price;
    this.paid = item.paid === undefined ? false : item.paid;
  };
  return item;
});

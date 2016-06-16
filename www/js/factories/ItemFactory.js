angular.module('splitter')
       .factory('ItemFactory', function(){

  var item = function (item) {
    this.name = item.name;
    this.price = item.price;
  };

  return item;
});

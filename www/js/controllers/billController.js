angular.module('splitter')
       .controller('BillController', ['BillService', function(BillService){
         
  var self = this;

  BillService.getAll()
  .then(function(response){
    self.bills = response;
  });
}]);

angular.module('splitter')
       .controller('BillController', ['BillService', function(BillService){

  var self = this;
  self.getBills = getBills;

  function getBills() {
    BillService.getAll()
    .then(function(response){
      self.bills = response;
    });
  }
}]);

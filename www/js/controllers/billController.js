starter.controller('BillController', ['BillService', function(BillService){
  var self = this;

  BillService.getAll()
  .then(function(response){
    self.bills = response;
  });
  }]);
      // var url = 'http://localhost:3000/bills';
      //
      // $http.get(url)
      // .success(function(bills){
      //   $scope.bills = bills;
      // })
      // .error(function(data){
      //   console.log('server is down');
      // });
      // this.bills = [{event: "birthday"},{event: "birthday"},{event: "birthday"}];
      //
      // this.deleteBill = function(){

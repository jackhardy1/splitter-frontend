angular.module('splitter')
       .service('BillService', ['$http', function($http) {

  var self = this;

  var billUrl = 'http://splitter-backend.herokuapp.com/bills/';
  self.getAll = getAll;
  self.createBillImage = createBillImage;

  function getAll() {
    return $http.get(billUrl).then(function(response){
      return response.data;
    });
  }

  function createBillImage(eventName, imageData) {
    var userId = parseInt(localStorage.getItem("userId"));
    return $http.post(billUrl, { event: eventName, image: imageData, user_id: userId });
  }
}]);

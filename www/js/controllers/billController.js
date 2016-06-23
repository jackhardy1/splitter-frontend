angular.module('splitter')
       .controller('BillController', ['BillService', '$cordovaCamera', '$scope', '$state', function(BillService, $cordovaCamera, $scope,  $state){

  var self = this;
  self.getBills = getBills;
  var getCurrentId = getCurrentId;

  function getBills() {
    BillService.getAll()
    .then(function(response){
      self.bills = response;
    });
  }

  self.getCurrentId = function(){
    return parseInt(localStorage.getItem("userId"));
  };

  self.takePicture = function(eventName) {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      allowEdit: true,
      encondingType: Camera.EncodingType.JPEG
    };

  $cordovaCamera.getPicture(options)
    .then(function(data) {
      var picture = 'data:image/jpeg;base64,' + data;
      BillService.createBillImage(eventName, picture).then(function() {
        $state.go('bills-index');
      });
    });

  };



}]);

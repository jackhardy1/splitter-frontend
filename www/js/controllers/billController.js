angular.module('splitter')
       .controller('BillController', ['BillService', '$cordovaCamera', '$scope', '$state', function(BillService, $cordovaCamera, $scope,  $state){

  var self = this;
  self.getBills = getBills;
  self.getCurrentId = getCurrentId;
  self.takePicture = takePicture;

  function getBills() {
    BillService.getAll().then(function(response){
      self.bills = response;
    });
  }

  function getCurrentId(){
    return parseInt(localStorage.getItem("userId"));
  }

  function takePicture(eventName) {
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
  }
}]);

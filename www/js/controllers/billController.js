angular.module('splitter')
       .controller('BillController', ['BillService', '$cordovaCamera', '$scope', function(BillService, $cordovaCamera, $scope){

  var self = this;
  self.getBills = getBills;

  function getBills() {
    BillService.getAll()
    .then(function(response){
      self.bills = response;
    });
  }

  self.takePicture = function() {
    var options = {
      destinationType: Camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: false,
      allowEdit: true,
      encondingType: Camera.EncodingType.JPEG
    };
  $cordovaCamera.getPicture(options)
    .then(function(data) {
      var picture = 'data:image/jpeg;base64,' + data;
      BillService.createBillImage(picture);
    });

  };



}]);

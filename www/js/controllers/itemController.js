angular.module('splitter')
       .controller('ItemController', ['ItemService', '$stateParams', '$ionicModal', '$http', '$scope', function(ItemService, $stateParams, $ionicModal, $http, $scope){

 var self = this;
 self.getItems = getItems;
 self.removeItem = removeItem;
 self.editItem = editItem;
 self.addItem = addItem;
 self.getBillTotal = getBillTotal;
 self.sendEmail = sendEmail;
 self.addEmail = addEmail;
 self.currentId = $stateParams.id;

 function addEmail(email, array) {
   console.log(email);
   console.log(array);
  var checkboxes = document.getElementsByClassName("selectedItem");
  var checkboxesChecked = [];
  for (var i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
       checkboxesChecked.push(checkboxes[i]);
    }
  }
  params = {contact: email};
  var response = checkboxesChecked.length > 0 ? checkboxesChecked : null;
  response.forEach(function(item){
    editItem(item.value, params);
  });
 }

  function getItems(id) {
    ItemService.getAllItems(id)
    .then(function(response){
      self.items = response;
      getBillTotal();
    });
  }

  function sendEmail() {
    var billId = $stateParams.id;
    ItemService.sendEmail(billId);
  }

  function removeItem(itemId) {
    var billId = $stateParams.id;
    ItemService.removeItem(billId, itemId)
    .then(function(){
      getItems(billId);
    });
  }

  function editItem(itemId, params) {
    $scope.closeModalA();
    var billId = $stateParams.id;
    ItemService.editItem(billId, itemId, params)
    .then(function(){
      getItems(billId);
    });
  }

  function addItem(params) {
    $scope.closeModalB();
    var billId = $stateParams.id;
    ItemService.addItem(billId, params)
    .then(function(){
      getItems(billId);
    });
  }

  function getBillTotal() {
    self.billTotal = 0;
    self.items.forEach(function(item){
      if(item.contact === null){
        self.billTotal += item.price;
      }
   });
  }

    $ionicModal.fromTemplateUrl('templates/items/update.html', {
       scope: $scope,
       animation: 'slide-in-up'
    }).then(function(modal) {
       $scope.modalA = modal;
    });

    $scope.openModalA = function(id) {
      $scope.itemId = id;
      $scope.modalA.show();
    };

    $scope.closeModalA = function() {
      $scope.modalA.hide();
    };

    $ionicModal.fromTemplateUrl('templates/items/new.html', {
       scope: $scope,
       animation: 'slide-in-up'
    }).then(function(modal) {
       $scope.modalB = modal;
    });

    $scope.openModalB = function(id) {
      $scope.itemId = id;
      $scope.modalB.show();
    };

    $scope.closeModalB = function() {
      $scope.modalB.hide();
    };
}]);

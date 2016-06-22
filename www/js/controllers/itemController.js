angular.module('splitter')
       .controller('ItemController', ['ItemService', '$stateParams', '$ionicModal', '$http', '$scope', function(ItemService, $stateParams, $ionicModal, $http, $scope){

 var self = this;
 self.getItems = getItems;
 self.removeItem = removeItem;
 self.editItem = editItem;
 self.addItem = addItem;

 self.currentId = $stateParams.id;

  function getItems(id) {
    ItemService.getAll(id)
    .then(function(response){
      self.items = response;
    });
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

  function addItem(itemId, params) {
    $scope.closeModalB();
    var billId = $stateParams.id;
    ItemService.addItem(billId, params)
    .then(function(){
      getItems(billId);
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

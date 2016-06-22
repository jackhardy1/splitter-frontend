describe('ItemController', function() {
  beforeEach(module('splitter'));

  var ItemService, ctrl, httpBackend, state;
  var itemData = [{id: 1, name: "cheeseburger", price: 6.00, paid: false}, {id: 2, name: "fries", price: 3.00, paid: true}];
  var deletedItemData = [{id: 2, name: "fries", price: 3.00, paid: true}];
  var editedItemData = [{id: 1, name: "double cheeseburger", price: 8.00, paid: false}, {id: 2, name: "fries", price: 3.00, paid: true}];
  var billId = 1;
  var itemId = 1;

  beforeEach(inject(function($rootScope, _ItemService_, $controller, $httpBackend, $stateParams) {
    mockRoutes($httpBackend);
    scope = $rootScope.$new();
    ctrl = $controller('ItemController', {$scope: scope, $stateParams: { id: 1 }});
    ItemService = _ItemService_;
    httpBackend = $httpBackend;
  }));

  it('fetches items from API and stores in the controller', function() {
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    ctrl.getItems(billId);
    httpBackend.flush();
    expect(ctrl.items).toEqual(itemData);
  });

  it('removes an item from the list', function(){
    httpBackend.expectDELETE("http://splitter-backend.herokuapp.com/bills/1/items/1").respond(200);
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(deletedItemData);
    ctrl.items = itemData;
    ctrl.removeItem(itemId);
    httpBackend.flush();
    expect(ctrl.items.length).toEqual(1);
  });

  xit('edits an item on the list', function(){
    httpBackend.expectPATCH("http://splitter-backend.herokuapp.com/bills/1/items/1").respond(200);
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(editedItemData);
    ctrl.items = itemData;
    var params = {id: 1, name: "double cheeseburger", price: 8.00, paid: false};
    ctrl.editItem(billId, itemId,params);
    httpBackend.flush();
    expect(ctrl.items).toEqual(editedItemData);
  });

  xit('adds an item to the list', function(){
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    var initialCount = itemData.length;
    ItemService.addItem(itemData);
    expect(itemData.length).toEqual(initialCount+1);
  });

});

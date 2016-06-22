describe('ItemController', function() {
  beforeEach(module('splitter'));

  var ItemService, ctrl, httpBackend;
  var itemData = [{id: 1, name: "cheeseburger", price: 6.00, paid: false}, {id: 2, name: "fries", price: 3.00, paid: true}];
  var billId = 1;
  var itemId = 1;

  beforeEach(inject(function($rootScope, _ItemService_, $controller, $httpBackend) {
    mockRoutes($httpBackend);
    scope = $rootScope.$new();
    ctrl = $controller('ItemController', {$scope: scope});
    ItemService = _ItemService_;
    httpBackend = $httpBackend;
  }));

  it('fetches items from API and stores in the controller', function() {
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    ctrl.getItems(billId);
    httpBackend.flush();
    expect(ctrl.items).toEqual(itemData);
  });

  xit('removes an item from the list', function(){
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    ItemService.addItem(billId, {name: "test", price:1, quantity:5, contact:"g@g.com"});
    console.log(ItemService.getAll(billId));
    expect(ItemService.items.length).toEqual(1);
    ItemService.removeItem(itemId);
    // ItemService.getItems(billId);
    expect(ctrl.items.length).toEqual(0);
  });

  xit('edits an item on the list', function(){
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    var params = {name: "double cheeseburger", price: 8.00, paid: false};
    ItemService.editItem(billId, itemId, params);
    var editedItemData = [{name: "double cheeseburger", price: 8.00, paid: false}, {name: "fries", price: 3.00, paid: true}];
    expect(itemData).toEqual(editedItemData);
  });

  xit('adds an item to the list', function(){
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    var initialCount = itemData.length;
    ItemService.addItem(itemData);
    expect(itemData.length).toEqual(initialCount+1);
  });

});

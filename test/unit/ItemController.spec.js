describe('ItemController', function() {
  beforeEach(module('splitter'));

  var ItemService, ctrl, httpBackend;
  var itemData = [{name: "cheeseburger", price: 6.00, paid: false}, {name: "fries", price: 3.00, paid: true}];
  var billId = 1;
  var itemId = 1;

  beforeEach(inject(function(_ItemService_, $controller, $httpBackend) {
    mockRoutes($httpBackend);
    ctrl = $controller('ItemController');
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
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    var initialCount = itemData.length;
    ctrl.removeItem(itemId);
    expect(itemData.length).toEqual(initialCount-1);
  });

  it('edits an item on the list', function(){
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    var params = {name: "double cheeseburger", price: 8.00, paid: false};
    ctrl.editItem(billId, itemId, params);
    var editedItemData = [{name: "double cheeseburger", price: 8.00, paid: false}, {name: "fries", price: 3.00, paid: true}];
    expect(itemData).toEqual(editedItemData);
  });

  it('adds an item to the list', function(){
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    var initialCount = itemData.length;
    ctrl.addItem(itemData);
    expect(itemData.length).toEqual(initialCount+1);
  });

});

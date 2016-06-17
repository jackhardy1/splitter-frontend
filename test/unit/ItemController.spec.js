describe('ItemController', function() {
  beforeEach(module('splitter'));

  var ItemService, ctrl, httpBackend;
  var itemData = [{name: "cheeseburger", price: 6.00, paid: false}, {name: "fries", price: 3.00, paid: true}];
  var id = 1;

  beforeEach(inject(function(_ItemService_, $controller, $httpBackend) {
    ctrl = $controller('ItemController');
    ItemService = _ItemService_;
    httpBackend = $httpBackend;
  }));

  // beforeEach(function(){
  //   httpBackend.expectGET('templates/bills/new.html').respond('');
  //   httpBackend.expectGET('templates/bills/show.html').respond('');
  //   httpBackend.expectGET('templates/home.html').respond('');
  // });

  it('fetches items from API and stores in the controller', function() {
    httpBackend.expectGET("http://localhost:3000/bills/1/items").respond(itemData);
    ctrl.getItems(id);
    httpBackend.flush();
    expect(ctrl.items).toEqual(itemData);
  });
});

describe('ItemService', function() {
  beforeEach(module('splitter'));

  var itemService, httpBackend;
  var itemData = [{name: 'beer', price: '4.00', paid: false}, {name: 'chips', price: '3.00', paid: true}];
  var id = 1;

  beforeEach(inject(function(_ItemService_, $httpBackend) {
    mockRoutes($httpBackend);
    itemService = _ItemService_;
    httpBackend = $httpBackend;
  }));

  it('fetches a list of items', function() {
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills/1/items").respond(itemData);
    itemService.getAllItems(id).then(function(items) {
      expect(items).toEqual(itemData);
    });
    httpBackend.flush();
  });
});

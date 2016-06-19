describe('BillService', function() {
  beforeEach(module('splitter'));

  var billService, httpBackend, image;

  var billData = [{event: "Party"}, {event: "Birthday"}];

  beforeEach(inject(function(_BillService_, $httpBackend) {
    mockRoutes($httpBackend);
    image = imageData();
    billService = _BillService_;
    httpBackend = $httpBackend;
  }));

  describe('#getAll', function() {
    it('fetches a list of Bills', function(){
      var bill1 = { event: "Party"};
      var bill2 = { event: "Birthday"};
      httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills").respond(billData);
      billService.getAll().then(function(bills) {
        expect(bills).toEqual([bill1, bill2]);
      });
      httpBackend.flush();
    });
  });

  describe('#createBillImage', function(){
    it('posts bill image data to the API', function(){
      httpBackend.expectPOST('http://splitter-backend.herokuapp.com/bills').respond(201);
      billService.createBillImage(image).then(function(response) {
        expect(response.status).toEqual(201);
      });
      httpBackend.flush();
    });
  });
});

describe('BillController', function() {
  beforeEach(module('splitter'));

  var BillService, ctrl, httpBackend;
  var billData = [{event: "Party"}, {event: "Birthday"}];

  beforeEach(inject(function(_BillService_, $controller, $httpBackend) {
    mockRoutes($httpBackend);
    ctrl = $controller('BillController');
    BillService = _BillService_;
    httpBackend = $httpBackend;
  }));

  it('fetches bills from API and stores in the controller', function() {
    httpBackend.expectGET("http://splitter-backend.herokuapp.com/bills").respond(billData);
    ctrl.getBills();
    httpBackend.flush();
    expect(ctrl.bills).toEqual(billData);
  });

  it('sends bill image data', function(){
    httpBackend.expectPOST("http://splitter-backend.herokuapp.com/bills").respond(billData);
    ctrl.takePicture();
    httpBackend.flush();
  });
});

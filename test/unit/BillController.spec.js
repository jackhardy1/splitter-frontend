describe('BillController', function() {
  beforeEach(module('splitter'));

  var BillService, ctrl, httpBackend;
  var billData = [{event: "Party"}, {event: "Birthday"}];

  beforeEach(inject(function(_BillService_, $controller, $httpBackend) {
    ctrl = $controller('BillController');
    BillService = _BillService_;
    httpBackend = $httpBackend;
  }));

  beforeEach(function(){
    httpBackend.expectGET('templates/bills.html').respond('');
    httpBackend.expectGET('templates/home.html').respond('');
  });

  it('fetches bills from API and stores in the controller', function() {
    httpBackend.expectGET("http://localhost:3000/bills/").respond(billData);
    ctrl.getBills();
    httpBackend.flush();
    expect(ctrl.bills).toEqual(billData);
  });
});

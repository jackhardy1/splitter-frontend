describe('BillService', function() {
  beforeEach(module('starter'));

  var billService, httpBackend;

  var billData = [{event: "Party"}, {event: "Birthday"}];

  beforeEach(inject(function(_billService_, _$httpBackend_) {
    billService = _billService_;
    httpBackend = _$httpBackend_;
  }));

  it('fetches a list of Bills', function(){

    httpBackend.expectGET("http://localhost:3000/bills/").respond(billData);

    var bill1 = { event: "Party"};
    var bill2 = { event: "Birthday"};

    billService.getAll().then(function(bills) {
      expect(bills).toEqual([bill1, bill2]);
    });
    httpBackend.flush();
  });
});

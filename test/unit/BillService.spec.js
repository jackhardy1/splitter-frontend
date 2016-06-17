describe('BillService', function() {
  beforeEach(module('splitter'));

  var billService, httpBackend;

  var billData = [{event: "Party"}, {event: "Birthday"}];

  beforeEach(inject(function(_BillService_, $httpBackend) {
    billService = _BillService_;
    httpBackend = $httpBackend;
  }));

  // beforeEach(function(){
  //   httpBackend.expectGET('templates/bills/new.html').respond('');
  //   httpBackend.expectGET('templates/bills/show.html').respond('');
  //   httpBackend.expectGET('templates/home.html').respond('');
  // });

  it('fetches a list of Bills', function(){
    var bill1 = { event: "Party"};
    var bill2 = { event: "Birthday"};

    httpBackend.expectGET("http://localhost:3000/bills/").respond(billData);
    billService.getAll().then(function(bills) {
      expect(bills).toEqual([bill1, bill2]);
    });
    httpBackend.flush();
  });
});

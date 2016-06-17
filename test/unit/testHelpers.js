  module.exports = function mockRoutes() {

      httpBackend.expectGET('templates/bills/new.html').respond('');
      httpBackend.expectGET('templates/bills/show.html').respond('');
      httpBackend.expectGET('templates/home.html').respond('');

  };

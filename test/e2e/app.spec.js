var mock = require('protractor-http-mock');

beforeEach(function(){
  mock([{
    request: {
      path: 'http://localhost:3000/bills/1/items',
      method: 'GET'
    },
    response: {
      data: [{name: "cheeseburger", price: 6.00, paid: false}, {name: "fries", price: 3.00, paid: true}]
    }
  }]);
  mock([{
    request: {
      path: 'http://localhost:3000/bills/',
      method: 'GET'
    },
    response: {
      data: [{event: "Party"}, {event: "Birthday"}]
    }
  }]);
});

describe("app home page", function() {
  it("shows the home page title", function() {
    browser.get('/');
    var h1 = $('#title');
    expect(h1.getText()).toEqual('Welcome to Splitter');
  });
});

describe("can view my bills", function() {
  it("as a list", function() {
    browser.get('/');
    $('#my-bills').click();
    var bills = $$('.bills');
    expect(bills.first().getText()).toMatch('Party');
    expect(bills.last().getText()).toMatch('Birthday');
  });
});

describe('adds a new bill', function() {
  it("directs to photo instructions page", function() {
    browser.get('/');
    $('#add-bills').click();
    var title = $$('.title');
    expect(title.first().getText()).toEqual('Add a new bill');
    expect($('#take-photo').isDisplayed()).toBeTruthy();
  });
});

afterEach(function(){
  mock.teardown();
});

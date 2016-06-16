describe('ItemFactory', function() {
  beforeEach(module('splitter'));

  var Item, paidItem;

  beforeEach(inject(function(ItemFactory) {
    Item = new ItemFactory({name: 'beer', price: 4.00});
    paidItem = new ItemFactory({name: 'pizza', price: 10.00, paid: true});
  }));

  it('returns an item with a name', function() {
    expect(Item.name).toEqual('beer');
  });

  it('returns an item with a price', function() {
    expect(Item.price).toEqual(4.00);
  });

  it('returns an item with a default paid status of false', function() {
    expect(Item.paid).toBe(false);
  });

  it('sets the paid status of the item if defined', function() {
    expect(paidItem.paid).toBe(true);
  });

});

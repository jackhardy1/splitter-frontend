describe('ItemFactory', function() {
  beforeEach(module('splitter'));

  var Item;

  beforeEach(inject(function(ItemFactory){
    Item = new ItemFactory({name: 'beer', price: 4.00});
  }));

  it('returns an item with a name', function(){
    expect(Item.name).toEqual('beer');
  });
});

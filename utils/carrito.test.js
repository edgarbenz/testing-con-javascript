const Carrito = require('./carrito');
let carrito = undefined;

describe('Testing the Carrito class', () => {
  beforeAll(() => {
    aguaProduct = {id: 1, name: 'agua', price: 0.20}
  });
  beforeEach(() => {
    carrito = new Carrito();
  });
  describe('constructor()', () => {
    it('should have an empty array when started a carrito', () => {
      expect(carrito.items.length).toBe(0);
    });
  });

  describe('addProduct()', () => {
    it('should have one product after adding a product', () => {
      carrito.addProduct(aguaProduct);
      expect(carrito.items).toContainEqual(aguaProduct);
    })

    it('should call inStock when adding a product', () => {
      let spy = jest.spyOn(carrito, 'inStock');
      carrito.addProduct(aguaProduct);
    })
  });

  describe('removeProduct()', () => {
    it.todo('should have items.length = 0 after removing a product');
  });

  describe('getTotalCheckOut()', () => {
    it.todo('should have checkout = 7.10 after adding "agua(0.20)"');
  });
});
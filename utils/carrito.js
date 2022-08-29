module.exports = class Carrito {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
  }

  removeProduct(product) {
    this.items = this.items.filter(item => item.id !== product.id);
  }

  getTotalItems() {
    return this.items.length;
  }

  getTotalCheckout() {
    return this.items.reduce((suma, item) => suma + item.price, 0); //reduce setea SUMA a 0  , es como el map pero de mas catego
  }


}
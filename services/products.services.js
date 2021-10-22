const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        Image: faker.image.imageUrl(),
      });
    }
  }

  create(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('fatal  product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('fatal  product not found');
    }
    this.products.splice(index, 1);
    return { message: 'id removed' };
  }

  find() {
    return this.products;
  }
  findOne(id) {
    return this.products.find((item) => item.id === id);
  }
}

module.exports = ProductsService;

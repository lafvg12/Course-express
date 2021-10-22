const faker = require('faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 8; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productAdjective(),
      });
    }
  }

  sendCategories() {
    return this.categories;
  }

  findOneUserId(id) {
    return this.categories.find((item) => item.id === id);
  }

  create(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id, body) {
    const index = this.categories.findIndex((x) => x.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...body,
    };
    return this.categories[index];
  }

  delete(id) {
    const indexCategory = this.categories.findIndex((item) => item.id === id);
    if (indexCategory === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(indexCategory, 1);
    return { message: 'Category removed' };
  }
}

module.exports = CategoriesService;

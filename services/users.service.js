const faker = require('faker');

class UsersServices {
  constructor() {
    this.users = [];
    this.renderUser();
  }

  renderUser() {
    for (let index = 0; index < 10; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
      });
    }
  }

  send() {
    return this.users;
  }

  findUserId(id) {
    return this.users.find((item) => item.id === id);
  }

  create(body) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id, body) {
    const itemUpdate = this.users.findIndex((item) => item.id === id);
    if (itemUpdate === -1) {
      throw new Error('fatal not updated');
    }
    const other = this.users[itemUpdate];
    this.users[itemUpdate] = {
      ...other,
      ...body,
    };
    return this.users[itemUpdate];
  }

  delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index == -1) {
      throw new Error('Fatal user not found');
    }
    this.users.splice(index, 1);
    return { message: 'Item delete' };
  }
}

module.exports = UsersServices;

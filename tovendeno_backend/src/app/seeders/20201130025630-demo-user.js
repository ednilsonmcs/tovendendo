'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      firstName: 'Ednilson',
      lastName: 'Messias',
      email: 'ednilson@dev.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Heitor',
      lastName: 'Garção Castro',
      email: 'heitor@dev.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};

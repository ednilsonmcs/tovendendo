'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('categories', [{
       description: 'Pizza',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       description: 'Pastel',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       description: 'Brasileira',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       description: 'Japonesa',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       description: 'Vegetariana',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       description: 'Lanches',
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('categories', null, {});
  }
};

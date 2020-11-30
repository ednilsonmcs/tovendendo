'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('products', [{
      description: 'Calabresa',
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Queijo',
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Brigadeiro',
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Três Queijos',
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Nordestina',
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Paulista',
      categoryId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Calabresa',
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Queijo',
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Brigadeiro',
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Três Queijos',
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Nordestina',
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Paulista',
      categoryId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Feijoada',
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Camarão',
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Moqueca',
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Caruru',
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Vatapá',
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Buchada',
      categoryId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Sushi',
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Rolinho',
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Temaki',
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Sumonomo',
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Ceviche',
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Yakisoba',
      categoryId:4,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Calabresa (V)',
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Queijo (V)',
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Brigadeiro (V)',
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Três Queijos (V)',
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Nordestina (V)',
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Paulista (V)',
      categoryId:5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Calabresa',
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Queijo',
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Brigadeiro',
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Três Queijos',
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Nordestina',
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      description: 'Paulista',
      categoryId:6,
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('products', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'A volta dos que não foram',
        author: 'José migué',
        pageQuantity: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Poeira em alto mar',
        author: 'Mara Josefina',
        pageQuantity: 43,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chupa cabra voltou',
        author: 'Rascal Serafim',
        pageQuantity: 167,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CATEGORY_MASTERs', {
      CATEGORY_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CATEGORY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      CLASS_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      STATUS: {
        allowNull: false,
        type: Sequelize.STRING(20)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATEGORY_MASTERs');
  }
};
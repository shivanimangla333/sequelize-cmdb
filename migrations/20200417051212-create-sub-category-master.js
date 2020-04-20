'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SUB_CATEGORY_MASTERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SUB_CATEGORY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      STATUS: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      CATEGORY_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SUB_CATEGORY_MASTERs');
  }
};
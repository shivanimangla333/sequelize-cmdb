'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CATEGORY_MASTER_V2s', {
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
      SUB_CATEGORY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      STATUS: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      CLASS_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATEGORY_MASTER_V2s');
  }
};
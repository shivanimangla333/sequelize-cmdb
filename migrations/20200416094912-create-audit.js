'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AUDITs', {
      AUDIT_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ITEM_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      MODULE: {
        type: Sequelize.STRING(50)
      },
      CREATED_ON: {
        type: Sequelize.INTEGER(8),
        allowNull: false
      },
      CREATED_BY: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      AUDIT_FIELD: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      FROM: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      TO: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      CREATED_BY_NAME: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('AUDITs');
  }
};
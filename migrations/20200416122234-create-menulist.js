'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MENULISTs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      MODULE: {
        type: Sequelize.STRING(100)
      },
      FIELD1_NAME: {
        type: Sequelize.STRING(100)
      },
      FIELD1_KEY: {
        type: Sequelize.STRING(100)
      },
      FIELD1_VALUE: {
        type: Sequelize.STRING(100)
      },
      FIELD2_NAME: {
        type: Sequelize.STRING(100)
      },
      FIELD2_KEY: {
        type: Sequelize.STRING(100)
      },
      FIELD2_VALUE: {
        type: Sequelize.STRING(100)
      },
      FIELD3_NAME: {
        type: Sequelize.STRING(100)
      },
      FIELD3_KEY: {
        type: Sequelize.STRING(100)
      },
      FIELD3_VALUE: {
        type: Sequelize.STRING(100)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MENULISTs');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ATTRIBUTE_MASTERs', {
      ATTRIBUTE_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ATTRIBUTE_NAME: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      CLASS_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      STATUS: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      MANDATORY: {
        type: Sequelize.STRING(1),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ATTRIBUTE_MASTERs');
  }
};
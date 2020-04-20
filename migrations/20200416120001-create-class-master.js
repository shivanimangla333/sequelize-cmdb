'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CLASS_MASTERs', {
      CLASS_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CLASS_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      PARENT_CLASS_ID: {
        type: Sequelize.INTEGER
      },
      STATUS: {
        type: Sequelize.STRING(20)
      },
      URL: {
        type: Sequelize.STRING(500)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CLASS_MASTERs');
  }
};
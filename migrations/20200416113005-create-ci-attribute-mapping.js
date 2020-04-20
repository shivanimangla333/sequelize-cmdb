'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CI_ATTRIBUTE_MAPPINGs', {
      CI_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ATTR_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      VALUE: {
        type: Sequelize.STRING(500)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CI_ATTRIBUTE_MAPPINGs');
  }
};
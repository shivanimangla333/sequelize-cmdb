'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CLASS_CLASS_RELATIONSHIPs', {
      CLASS_CLASS_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CLASS_ID: {
        type: Sequelize.INTEGER
      },
      CLASS_ID_RELATED: {
        type: Sequelize.INTEGER
      },
      R_ID: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CLASS_CLASS_RELATIONSHIPs');
  }
};
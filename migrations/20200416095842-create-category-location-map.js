'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CATEGORY_LOCATION_MAPs', {
      ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CATEGORY_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      COMPANY_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      COMPANY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      CATEGORY_LOCATION_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CATEGORY_LOCATION_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CATEGORY_LOCATION_MAPs');
  }
};
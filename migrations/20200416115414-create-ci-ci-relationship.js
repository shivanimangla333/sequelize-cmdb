'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CI_CI_RELATIONSHIPs', {
      CI_CI_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CI_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CI_ID_RELATED: {
        type: Sequelize.INTEGER
      },
      R_ID: {
        type: Sequelize.INTEGER
      },
      CREATED_BY: {
        type: Sequelize.STRING(50)
      },
      MODULE: {
        type: Sequelize.STRING(500)
      },
      RELATIONSHIP_TYPE: {
        type: Sequelize.STRING(1)
      },
      CI_ID_NUMBER: {
        allowNull: false,
        type: Sequelize.STRING(500),
        defaultValue: "0"
      },
      CREATED_AT: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      CI_ID_REPORTED: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CI_CI_RELATIONSHIPs');
  }
};
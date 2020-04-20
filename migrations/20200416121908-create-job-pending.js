'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JOB_PENDINGs', {
      JOB_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      STATUS: {
        type: Sequelize.STRING(50)
      },
      JOB_TYPE: {
        type: Sequelize.STRING(1)
      },
      CREATED_AT: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      CUSTOMER: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JOB_PENDINGs');
  }
};
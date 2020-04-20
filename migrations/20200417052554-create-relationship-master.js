'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RELATIONSHIP_MASTERs', {
      R_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      R_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      STATUS: {
        type: Sequelize.STRING(1)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RELATIONSHIP_MASTERs');
  }
};
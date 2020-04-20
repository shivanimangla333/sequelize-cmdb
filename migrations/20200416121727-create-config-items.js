'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CONFIG_ITEMs', {
      CI_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CI_CODE: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      CI_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      CLASS_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      DESCRIPTION: {
        type: Sequelize.STRING(5000)
      },
      COMPANY_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      COMPANY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      STATUS: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      CATEGORY_ID: {
        type: Sequelize.INTEGER
      },
      SUB_CATEGORY_ID: {
        type: Sequelize.INTEGER
      },
      METALLIC: {
        type: Sequelize.STRING(500)
      },
      ENVIRONMENT: {
        type: Sequelize.STRING(500)
      },
      GROUP_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      GROUP_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      OWNER_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      OWNER_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      LOCATION_ID: {
        type: Sequelize.INTEGER
      },
      LOCATION_NAME: {
        type: Sequelize.STRING(500)
      },
      MANUFACTURER: {
        type: Sequelize.STRING(500)
      },
      DATASET: {
        type: Sequelize.STRING(500)
      },
      CREATED_BY: {
        type: Sequelize.STRING(500)
      },
      UPDATED_BY: {
        type: Sequelize.STRING(500)
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      SUPPORT_COMPANY_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      SUPPORT_COMPANY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500),
        defaultValue: ''
      },
      BUSINESS_OWNER_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      BUSINESS_OWNER_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500),
        defaultValue: ''
      },
      TECHNICAL_OWNER_ID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      TECHNICAL_OWNER_NAME: {
        allowNull: false,
        type: Sequelize.STRING(500),
        defaultValue: ''
      },
      ASSET_TAG: {
        type: Sequelize.STRING(500)
      },
      EDITABLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'Y'
      },
      SPCM_CATEGORY_ID: {
        type: Sequelize.INTEGER
      },
      SPCM_CATEGORY_NAME: {
        type: Sequelize.STRING(500)
      },
      SPCM_OFFERING_ID: {
        type: Sequelize.INTEGER
      },
      CREATED_AT: {
        type: Sequelize.BIGINT
      },
      EXT_SYS_ID: {
        type: Sequelize.STRING(500)
      },
      EXT_SOURCE: {
        type: Sequelize.STRING(500)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CONFIG_ITEMs');
  }
};
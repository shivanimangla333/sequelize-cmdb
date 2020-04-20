'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TEMP_CONFIG_ITEMs', {
      TEMP_ID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      EXT_SYS_ID: {
        allowNull: false,
        type: Sequelize.STRING(1000)
      },
      EXT_SOURCE: {
        type: Sequelize.STRING(1000),
        defaultValue: ''
      },
      CI_CODE: {
        type: Sequelize.STRING(1000)
      },
      CI_NAME: {
        type: Sequelize.STRING(1000)
      },
      CLASS_ID: {
        type: Sequelize.STRING(1000)
      },
      DESCRIPTION: {
        type: Sequelize.TEXT
      },
      COMPANY_ID: {
        type: Sequelize.TEXT
      },
      COMPANY_NAME: {
        type: Sequelize.TEXT
      },
      STATUS: {
        type: Sequelize.TEXT
      },
      CATEGORY_ID: {
        type: Sequelize.TEXT
      },
      SUB_CATEGORY_ID: {
        type: Sequelize.TEXT
      },
      METALLIC: {
        type: Sequelize.TEXT
      },
      ENVIRONMENT: {
        type: Sequelize.TEXT,
        defaultValue: '5'
      },
      GROUP_ID: {
        type: Sequelize.TEXT
      },
      GROUP_NAME: {
        type: Sequelize.TEXT
      },
      OWNER_ID: {
        type: Sequelize.TEXT
      },
      OWNER_NAME: {
        type: Sequelize.TEXT
      },
      LOCATION_ID: {
        type: Sequelize.TEXT
      },
      LOCATION_NAME: {
        type: Sequelize.TEXT
      },
      MANUFACTURER: {
        type: Sequelize.TEXT
      },
      DATASET: {
        type: Sequelize.TEXT
      },
      CREATED_BY: {
        type: Sequelize.TEXT
      },
      UPDATED_BY: {
        type: Sequelize.TEXT
      },
      UPDATED_AT: {
        allowNull: false,
        type: Sequelize.DATE
      },
      SUPPORT_COMPANY_ID: {
        type: Sequelize.TEXT
      },
      SUPPORT_COMPANY_NAME: {
        type: Sequelize.TEXT
      },
      BUSINESS_OWNER_ID: {
        type: Sequelize.TEXT
      },
      BUSINESS_OWNER_NAME: {
        type: Sequelize.TEXT
      },
      TECHNICAL_OWNER_ID: {
        type: Sequelize.TEXT
      },
      TECHNICAL_OWNER_NAME: {
        type: Sequelize.TEXT
      },
      ASSET_TAG: {
        type: Sequelize.TEXT
      },
      EDITABLE: {
        type: Sequelize.STRING(1),
        defaultValue: 'Y'
      },
      SPCM_CATEGORY_ID: {
        type: Sequelize.BIGINT
      },
      SPCM_CATEGORY_NAME: {
        type: Sequelize.STRING(1000)
      },
      SPCM_OFFERING_ID: {
        type: Sequelize.BIGINT
      },
      CREATED_AT: {
        type: Sequelize.BIGINT
      },
      JOB_ID: {
        type: Sequelize.BIGINT
      },
      SERIAL_NUMBER: {
        type: Sequelize.STRING(1000)
      },
      MODEL_ID: {
        type: Sequelize.STRING(1000)
      },
      CI_TRANS_STATUS: {
        type: Sequelize.STRING(1000)
      },
      ERR_DESCRIPTION: {
        type: Sequelize.STRING(1000)
      },
      ERR_CODE: {
        type: Sequelize.STRING(1000)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TEMP_CONFIG_ITEMs');
  }
};
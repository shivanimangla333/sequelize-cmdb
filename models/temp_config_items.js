'use strict';
module.exports = (sequelize, DataTypes) => {
  const TEMP_CONFIG_ITEMS = sequelize.define('TEMP_CONFIG_ITEMS', {
    EXT_SYS_ID: DataTypes.STRING,
    EXT_SOURCE: DataTypes.STRING,
    CI_CODE: DataTypes.STRING,
    CI_NAME: DataTypes.STRING,
    CLASS_ID: DataTypes.STRING,
    DESCRIPTION: DataTypes.STRING,
    COMPANY_ID: DataTypes.STRING,
    COMPANY_NAME: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    CATEGORY_ID: DataTypes.STRING,
    SUB_CATEGORY_ID: DataTypes.STRING,
    METALLIC: DataTypes.STRING,
    ENVIRONMENT: DataTypes.STRING,
    GROUP_ID: DataTypes.STRING,
    GROUP_NAME: DataTypes.STRING,
    OWNER_ID: DataTypes.STRING,
    OWNER_NAME: DataTypes.STRING,
    LOCATION_ID: DataTypes.STRING,
    LOCATION_NAME: DataTypes.STRING,
    MANUFACTURER: DataTypes.STRING,
    DATASET: DataTypes.STRING,
    CREATED_BY: DataTypes.STRING,
    UPDATED_BY: DataTypes.STRING,
    SUPPORT_COMPANY_ID: DataTypes.STRING,
    SUPPORT_COMPANY_NAME: DataTypes.STRING,
    BUSINESS_OWNER_ID: DataTypes.STRING,
    BUSINESS_OWNER_NAME: DataTypes.STRING,
    TECHNICAL_OWNER_ID: DataTypes.STRING,
    TECHNICAL_OWNER_NAME: DataTypes.STRING,
    ASSET_TAG: DataTypes.STRING,
    EDITABLE: DataTypes.STRING,
    SPCM_CATEGORY_ID: DataTypes.BIGINT,
    SPCM_CATEGORY_NAME: DataTypes.STRING,
    SPCM_OFFERING_ID: DataTypes.BIGINT,
    CREATED_AT: DataTypes.BIGINT,
    JOB_ID: DataTypes.BIGINT,
    SERIAL_NUMBER: DataTypes.STRING,
    MODEL_ID: DataTypes.STRING,
    CI_TRANS_STATUS: DataTypes.STRING,
    ERR_DESCRIPTION: DataTypes.STRING,
    ERR_CODE: DataTypes.STRING
  }, {});
  TEMP_CONFIG_ITEMS.associate = function(models) {
    // associations can be defined here
  };
  return TEMP_CONFIG_ITEMS;
};
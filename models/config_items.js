'use strict';
module.exports = (sequelize, DataTypes) => {
  const CONFIG_ITEMS = sequelize.define('CONFIG_ITEMS', {
    CI_CODE: DataTypes.STRING,
    CI_NAME: DataTypes.STRING,
    CLASS_ID: DataTypes.INTEGER,
    DESCRIPTION: DataTypes.STRING,
    COMPANY_ID: DataTypes.INTEGER,
    COMPANY_NAME: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    CATEGORY_ID: DataTypes.INTEGER,
    SUB_CATEGORY_ID: DataTypes.INTEGER,
    METALLIC: DataTypes.STRING,
    ENVIRONMENT: DataTypes.STRING,
    GROUP_ID: DataTypes.INTEGER,
    GROUP_NAME: DataTypes.STRING,
    OWNER_ID: DataTypes.INTEGER,
    OWNER_NAME: DataTypes.STRING,
    LOCATION_ID: DataTypes.INTEGER,
    LOCATION_NAME: DataTypes.STRING,
    MANUFACTURER: DataTypes.STRING,
    DATASET: DataTypes.STRING,
    CREATED_BY: DataTypes.STRING,
    UPDATED_BY: DataTypes.STRING,
    SUPPORT_COMPANY_ID: DataTypes.INTEGER,
    SUPPORT_COMPANY_NAME: DataTypes.STRING,
    BUSINESS_OWNER_ID: DataTypes.INTEGER,
    BUSINESS_OWNER_NAME: DataTypes.STRING,
    TECHNICAL_OWNER_ID: DataTypes.INTEGER,
    TECHNICAL_OWNER_NAME: DataTypes.STRING,
    ASSET_TAG: DataTypes.STRING,
    EDITABLE: DataTypes.STRING,
    SPCM_CATEGORY_ID: DataTypes.INTEGER,
    SPCM_CATEGORY_NAME: DataTypes.STRING,
    SPCM_OFFERING_ID: DataTypes.INTEGER,
    CREATED_AT: DataTypes.BIGINT,
    EXT_SYS_ID: DataTypes.STRING,
    EXT_SOURCE: DataTypes.STRING
  }, {});
  CONFIG_ITEMS.associate = function(models) {
    // associations can be defined here
  };
  return CONFIG_ITEMS;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const CATEGORY_LOCATION_MAP = sequelize.define('CATEGORY_LOCATION_MAP', {
    CATEGORY_ID: DataTypes.INTEGER,
    COMPANY_ID: DataTypes.INTEGER,
    COMPANY_NAME: DataTypes.STRING,
    CATEGORY_LOCATION_ID: DataTypes.INTEGER,
    CATEGORY_LOCATION_NAME: DataTypes.STRING
  }, {});
  CATEGORY_LOCATION_MAP.associate = function(models) {
    // associations can be defined here
  };
  return CATEGORY_LOCATION_MAP;
};
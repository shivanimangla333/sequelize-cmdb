'use strict';
module.exports = (sequelize, DataTypes) => {
  const CATEGORY_MASTER_V2 = sequelize.define('CATEGORY_MASTER_V2', {
    CATEGORY_NAME: DataTypes.INTEGER,
    SUB_CATEGORY_NAME: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    CLASS_ID: DataTypes.INTEGER
  }, {});
  CATEGORY_MASTER_V2.associate = function(models) {
    // associations can be defined here
  };
  return CATEGORY_MASTER_V2;
};
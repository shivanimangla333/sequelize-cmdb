'use strict';
module.exports = (sequelize, DataTypes) => {
  const CATEGORY_MASTER = sequelize.define('CATEGORY_MASTER', {
    CATEGORY_NAME: DataTypes.STRING,
    CLASS_ID: DataTypes.INTEGER,
    STATUS: DataTypes.STRING
  }, {});
  CATEGORY_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return CATEGORY_MASTER;
};
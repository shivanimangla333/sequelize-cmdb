'use strict';
module.exports = (sequelize, DataTypes) => {
  const AUDIT = sequelize.define('AUDIT', {
    ITEM_ID: DataTypes.INTEGER,
    MODULE: DataTypes.STRING,
    CREATED_ON: DataTypes.INTEGER,
    CREATED_BY: DataTypes.STRING,
    AUDIT_FIELD: DataTypes.STRING,
    FROM: DataTypes.STRING,
    TO: DataTypes.STRING,
    CREATED_BY_NAME: DataTypes.STRING
  }, {});
  AUDIT.associate = function(models) {
    // associations can be defined here
  };
  return AUDIT;
};
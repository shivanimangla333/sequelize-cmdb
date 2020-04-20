'use strict';
module.exports = (sequelize, DataTypes) => {
  const ATTRIBUTE_MASTER = sequelize.define('ATTRIBUTE_MASTER', {
    ATTRIBUTE_NAME: DataTypes.STRING,
    CLASS_ID: DataTypes.INTEGER,
    STATUS: DataTypes.STRING,
    MANDATORY: DataTypes.STRING
  }, {});
  ATTRIBUTE_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return ATTRIBUTE_MASTER;
};
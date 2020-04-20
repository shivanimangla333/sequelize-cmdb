'use strict';
module.exports = (sequelize, DataTypes) => {
  const CLASS_MASTER = sequelize.define('CLASS_MASTER', {
    CLASS_NAME: DataTypes.STRING,
    PARENT_CLASS_ID: DataTypes.INTEGER,
    STATUS: DataTypes.STRING,
    URL: DataTypes.STRING
  }, {});
  CLASS_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return CLASS_MASTER;
};
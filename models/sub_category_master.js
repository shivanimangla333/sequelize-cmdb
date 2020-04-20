'use strict';
module.exports = (sequelize, DataTypes) => {
  const SUB_CATEGORY_MASTER = sequelize.define('SUB_CATEGORY_MASTER', {
    SUB_CATEGORY_NAME: DataTypes.STRING,
    STATUS: DataTypes.STRING,
    CATEGORY_ID: DataTypes.INTEGER
  }, {});
  SUB_CATEGORY_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return SUB_CATEGORY_MASTER;
};
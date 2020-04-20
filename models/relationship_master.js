'use strict';
module.exports = (sequelize, DataTypes) => {
  const RELATIONSHIP_MASTER = sequelize.define('RELATIONSHIP_MASTER', {
    R_NAME: DataTypes.STRING,
    STATUS: DataTypes.STRING
  }, {});
  RELATIONSHIP_MASTER.associate = function(models) {
    // associations can be defined here
  };
  return RELATIONSHIP_MASTER;
};
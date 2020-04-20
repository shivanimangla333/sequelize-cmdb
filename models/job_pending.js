'use strict';
module.exports = (sequelize, DataTypes) => {
  const JOB_PENDING = sequelize.define('JOB_PENDING', {
    STATUS: DataTypes.STRING,
    JOB_TYPE: DataTypes.STRING,
    CREATED_AT: DataTypes.BIGINT,
    CUSTOMER: DataTypes.STRING
  }, {});
  JOB_PENDING.associate = function(models) {
    // associations can be defined here
  };
  return JOB_PENDING;
};
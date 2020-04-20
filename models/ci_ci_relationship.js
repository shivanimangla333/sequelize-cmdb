'use strict';
module.exports = (sequelize, DataTypes) => {
  const CI_CI_RELATIONSHIP = sequelize.define('CI_CI_RELATIONSHIP', {
    CI_ID: DataTypes.INTEGER,
    CI_ID_RELATED: DataTypes.INTEGER,
    R_ID: DataTypes.INTEGER,
    CREATED_BY: DataTypes.STRING,
    MODULE: DataTypes.STRING,
    RELATIONSHIP_TYPE: DataTypes.STRING,
    CI_ID_NUMBER: DataTypes.STRING,
    CREATED_AT: DataTypes.BIGINT,
    CI_ID_REPORTED: DataTypes.BIGINT
  }, {});
  CI_CI_RELATIONSHIP.associate = function(models) {
    // associations can be defined here
  };
  return CI_CI_RELATIONSHIP;
};
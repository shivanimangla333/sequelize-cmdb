'use strict';
module.exports = (sequelize, DataTypes) => {
  const CLASS_CLASS_RELATIONSHIP = sequelize.define('CLASS_CLASS_RELATIONSHIP', {
    CLASS_ID: DataTypes.INTEGER,
    CLASS_ID_RELATED: DataTypes.INTEGER,
    R_ID: DataTypes.INTEGER
  }, {});
  CLASS_CLASS_RELATIONSHIP.associate = function(models) {
    // associations can be defined here
  };
  return CLASS_CLASS_RELATIONSHIP;
};
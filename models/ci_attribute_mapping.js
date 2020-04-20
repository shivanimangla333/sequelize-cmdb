'use strict';
module.exports = (sequelize, DataTypes) => {
  const CI_ATTRIBUTE_MAPPING = sequelize.define('CI_ATTRIBUTE_MAPPING', {
    ATTR_ID: DataTypes.INTEGER,
    VALUE: DataTypes.STRING
  }, {});
  CI_ATTRIBUTE_MAPPING.associate = function(models) {
    // associations can be defined here
  };
  return CI_ATTRIBUTE_MAPPING;
};
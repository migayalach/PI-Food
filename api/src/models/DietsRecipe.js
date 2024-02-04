const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "DietsRecipe",
    {},
    {
      timestamps: false,
    }
  );
};

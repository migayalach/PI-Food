const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "diets",
    {
      idDiet: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      nameDiet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resumenPlato: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pasoApaso: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};

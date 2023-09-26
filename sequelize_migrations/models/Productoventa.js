'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Muchos a uno con venta
      ProductoVenta.belongsTo(models.Venta, {foreignKey:"idventa"})
      // Muchos a uno con productos
      ProductoVenta.belongsTo(models.Producto, {foreignKey:"idproducto"})
    }
  }
  ProductoVenta.init({
    idventa: DataTypes.INTEGER,
    idproducto: DataTypes.INTEGER,
    cantidadvendida: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    precioventa: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ProductoVenta',
  });
  return ProductoVenta;
};
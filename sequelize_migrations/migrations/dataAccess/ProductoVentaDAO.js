const {ProductoVenta} = require("../models/ProductoVenta");

class ProductoVentaDAO{
    constructor(){}

    async crearProductoVenta(idventa,idproducto, cantidadvendida, subtotal, precioventa){
        try {
            const productoVenta = await ProductoVenta.create({idventa,idproducto, cantidadvendida, subtotal, precioventa})
            return productoVenta;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductoVentas(){
        try {
            const productoVentas = await ProductoVenta.findAll();
            return productoVentas;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductoVentasPorId(id){
        try {
            const productoVentas = await ProductoVenta.findByPk(id);
            return productoVentas;
        } catch (error) {
            return error;
        }
    }

    async eliminarProductoVenta(id){
        try {
            const productoVentaEliminar = await ProductoVenta.findByPk(id);
            if(!productoVentaEliminar){
                throw new Error("ProductoVenta no encontrada");
            }
            await productoVentaEliminar.destroy();
            return "ProductoVenta eliminada con exito"
        } catch (error) {
            return error;
        }
    }

    async actualizarProductoVenta(id, idventa,idproducto, cantidadvendida, subtotal, precioventa){
        try {
            const productoVentaActualizar = await ProductoVenta.findByPk(id);
            if(!productoVentaActualizar){
                throw new Error("ProductoVenta no encontrada");
            }

            await productoVentaActualizar.update({idventa,idproducto, cantidadvendida, subtotal, precioventa}, {where: {id}})
            return "ProductoVenta actualizada con exito"
        } catch (error) {
            return error;
        }
    }
}

module.exports = new ProductoVentaDAO();
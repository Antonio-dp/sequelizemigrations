const {Producto} = require("../models/Producto");

class ProductoDAO{
    constructor(){}

    async crearProducto(nombre, precio, cantidad){
        try {
            const producto = await Producto.create({nombre,precio,cantidad})
            return producto;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductos(){
        try {
            const productos = await Producto.findAll();
            return productos;
        } catch (error) {
            return error;
        }
    }

    async obtenerProductosPorId(id){
        try {
            const producto = await Producto.findByPk(id);
            return producto;
        } catch (error) {
            return error;
        }
    }

    async eliminarProducto(id){
        try {
            const productoEliminar = await Producto.findByPk(id);
            if(!productoEliminar){
                throw new Error("Producto no encontrado");
            }
            await productoEliminar.destroy();
            return "Producto eliminado con exito"
        } catch (error) {
            return error;
        }
    }

    async actualizarProducto(id, nombre, precio, cantidad){
        try {
            const productoActualizar = await Producto.findByPk(id);
            if(!productoEliminar){
                throw new Error("Producto no encontrado");
            }

            await productoActualizar.update({nombre, precio, cantidad}, {where: {id}})
            return "Producto actualizado con exito"
        } catch (error) {
            return error;
        }
    }
}

module.exports = new ProductoDAO();
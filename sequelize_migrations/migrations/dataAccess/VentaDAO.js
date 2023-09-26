const {Venta} = require("../models/Venta");

class VentaDAO{
    constructor(){}

    async crearVenta(total,iva){
        try {
            const venta = await Venta.create({total,iva})
            return venta;
        } catch (error) {
            return error;
        }
    }

    async obtenerVentas(){
        try {
            const ventas = await Venta.findAll();
            return ventas;
        } catch (error) {
            return error;
        }
    }

    async obtenerVentasPorId(id){
        try {
            const venta = await Venta.findByPk(id);
            return venta;
        } catch (error) {
            return error;
        }
    }

    async eliminarVenta(id){
        try {
            const ventaEliminar = await Venta.findByPk(id);
            if(!ventaEliminar){
                throw new Error("Venta no encontrada");
            }
            await ventaEliminar.destroy();
            return "Venta eliminada con exito"
        } catch (error) {
            return error;
        }
    }

    async actualizarVenta(id, total, iva ){
        try {
            const ventaActualizar = await Venta.findByPk(id);
            if(!ventaEliminar){
                throw new Error("Venta no encontrada");
            }

            await ventaActualizar.update({total, iva}, {where: {id}})
            return "Venta actualizada con exito"
        } catch (error) {
            return error;
        }
    }
}

module.exports = new VentaDAO();
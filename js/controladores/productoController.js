class ProductoController extends ProductoModel {
    constructor(){
        super()
        this.guardarProducto = this.guardarProducto.bind(this)
    }

    async obtenerProductos(){
        this.productos = await productoService.obtenerProductosService()
        return this.productos
    }

    async guardarProducto(producto){
        let productoGuardado = await productoService.guardarProductosService(producto)
        this.productos.push(productoGuardado)

        renderProductos(this.productos)
    }

    async actualizarProducto(id){
        let producto = formularioAlta.leerProductoIngresado()
        formularioAlta.limpiarFormulario()

        let productoActualizado = await productoService.actualizarProductoService(id, producto)

        let index = this.productos.findIndex(producto => producto.id == productoActualizado.id)
        this.productos.splice(index, 1, productoActualizado)

        renderProductos(this.productos)
    }
}

const productoController = new ProductoController()

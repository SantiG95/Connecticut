class ProductoService{
    URL_PRODUCTOS = "https://61d31573b4c10c001712b7a2.mockapi.io/productos"

    async obtenerProductosService(){
        let productos = await http.get(this.URL_PRODUCTOS)
        //console.log(productos)
        return productos
    }

    async guardarProductosService(producto){
        let productoGuardado = await http.post(this.URL_PRODUCTOS, producto)
        return productoGuardado
    }

    async actualizarProductoService(id, producto){
        let productoActualizado = await http.put(this.URL_PRODUCTOS, id, producto)
        return productoActualizado
    }

    async borrarProductoService(id){
        let productoBorrado = await http.del(this.URL_PRODUCTOS, id)
        return productoBorrado
    }
}

const productoService = new ProductoService()
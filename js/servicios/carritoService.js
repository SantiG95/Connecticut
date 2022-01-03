class CarritoService{
    URL_CARRITO = "https://61d31573b4c10c001712b7a2.mockapi.io/carrito"

    async guardarCarritoService(carrito){
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()
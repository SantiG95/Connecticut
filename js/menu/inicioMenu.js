async function renderPlantillaListado(listado){
    let plantillaHbs = await fetch('plantillas/listadoInicio.hbs').then(rta => rta.text())
    var template = Handlebars.compile(plantillaHbs);
    
    let html = template({listado})
    
    document.getElementsByClassName('card-container')[0].innerHTML = html

    console.log()
    document.querySelector(".section-cards__header p").innerHTML = `Se encontraron ${document.querySelectorAll(".card").length} productos`
}

function agregarCarrito(e, id, ref){
    e.preventDefault()

    let producto = productoController.productos.find(producto => producto.id == id)
    carritoController.agregarAlCarrito(producto)
}



async function initInicio(){
    initSlideshow()
    var productos = await productoController.obtenerProductos()
    await renderPlantillaListado(productos)
}


async function renderPlantillaListado(listado){
    let plantillaHbs = await fetch('plantillas/inicio.hbs').then(rta => rta.text())
    var template = Handlebars.compile(plantillaHbs);
    let html = template({listado})
    //Ajustar aca para cada seccion de la pagina

    //console.log(html)


    document.getElementsByClassName('card-container')[0].innerHTML = html

    console.log(document.getElementsByClassName("card"))

    initCards()
}

function agregarCarrito(e, id, ref){
    e.preventDefault()

    let producto = productoController.productos.find(producto => producto.id == id)
    carritoController.agregarCarrito(producto)
}

async function initInicio(){
    initSlideshow()
    var productos = await productoController.obtenerProductos()
    await renderPlantillaListado(productos)
    document.querySelector(".section-cards__header p").innerHTML = "Se encontraron algunos productos"
}
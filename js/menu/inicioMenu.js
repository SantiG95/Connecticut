async function renderPlantillaListado(listado){
    let plantillaHbs = await fetch('plantillas/listadoInicio.hbs').then(rta => rta.text())
    var template = Handlebars.compile(plantillaHbs);
    //console.log(listado)
    let html = template({listado})
    //Ajustar aca para cada seccion de la pagina

    //console.log(html)


    document.getElementsByClassName('card-container')[0].innerHTML = html

    console.log()
    document.querySelector(".section-cards__header p").innerHTML = `Se encontraron ${document.querySelectorAll(".card").length} productos`

    initCards()
}

function agregarCarrito(e, id, ref){
    e.preventDefault()

    let producto = productoController.productos.find(producto => producto.id == id)
    carritoController.agregarAlCarrito(producto)
}

function configurarCategorias(){
    let botonesCategoria = document.getElementsByClassName("categoria")
    let listaProductos = document.getElementsByClassName("card")

    
}



async function initInicio(){
    initSlideshow()
    var productos = await productoController.obtenerProductos()
    await renderPlantillaListado(productos)
    configurarCategorias()
}


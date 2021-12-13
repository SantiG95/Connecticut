var campoNombre = document.getElementById("nombreProducto")
var campoMarca = document.getElementById("marca")
var campoPrecio = document.getElementById("precio")
var campoStock = document.getElementById("stock")
var campoDescripcion = document.getElementById("descripcion")
var campoCategoria = document.getElementById("categoria")
var campoImagen = document.getElementById("imagen")
var campoEnvio = document.getElementById("envio_gratis")

var campoVendedor = document.getElementById("nombreVendedor")
var campoEmail = document.getElementById("email")

var mensajesError = document.querySelectorAll(".mensaje_error")

var botonEnviar = document.getElementById("enviar")
botonEnviar.disabled = true

var inputs = [campoNombre, campoMarca, campoPrecio, campoStock, campoDescripcion, campoCategoria, campoImagen, campoEnvio, campoVendedor, campoEmail]
var camposValidos = [false, false, false, false, false, false, false, true, false, false]

var formulario = document.querySelector("form")

var productos = [
    {nombre: "hola", 
    marca: "sony", 
    precio: "45", 
    stock: "36", 
    descripcion: "mi descripcion", 
    categoria: "11", 
    imagen: "https://www.google.com/logos/doodles/2021/seasonal-holidays-2021-6753651837109324-6752733080595603-cst.gif", 
    envio: true, 
    vendedor: "yo", 
    email: "sangue@gmail.com"}
]


inputs.forEach(campo => {
    switch(campo.type){
        case "text":
            campo.addEventListener("input", () => {
                validarTexto(campo)
            })
            break
        
        case "number":
            campo.addEventListener("input", () => {
                validarNumero(campo)
            })
            break

        case "email":
            campo.addEventListener("input", () => {
                validarEmail(campo)
            })
            break

        case "file":
            campo.addEventListener("input", () =>{
                validarImagen(campo)
            })
            break

        case "textarea":
            campo.addEventListener("input", () =>{
                validarTexto(campoDescripcion)
            })
            break

        case "select-one":
            campo.addEventListener("input", () =>{
                camposValidos[getIndex(campoCategoria)] = true
            })
    }
});




/************************************************************************************ */
function validarTexto(campo){
    var largo = campo.value.trim().length
    camposValidos[getIndex(campo)] = false
    if(largo == 0){
        mensajesError[getIndex(campo)].innerText = "Campo obligatorio"
    }
    else if(largo < 3){
        mensajesError[getIndex(campo)].innerText = "Debe introducir un minimo de 3 caracteres"
    }
    else if(largo > 40 && campo.id != "imagen"){
        mensajesError[getIndex(campo)].innerText = "Debe introducir un maximo de 40 caracteres"
    }
    else{
        mensajesError[getIndex(campo)].innerText = ""
        camposValidos[getIndex(campo)] = true
    }
    validarCampos()
}

function validarNumero(campo){
    var valor = campo.value
    camposValidos[getIndex(campo)] = false
    if(valor <= 0){
        mensajesError[getIndex(campo)].innerText = "Introduzca un valor mayor a 0"
    }
    else if(campo.id == "stock" && valor.includes('.')){
        mensajesError[getIndex(campo)].innerText = "Introduzca valor entero"
    }
    else{
        mensajesError[getIndex(campo)].innerText = ""
        camposValidos[getIndex(campo)] = true
    }
    validarCampos()
}

function validarEmail(campo){
    var mail = campo.value.trim()
    camposValidos[getIndex(campo)] = false

    var validadorMail = /^\w+@\w+\.\w{2,3}(\.(ar|uy))?$/
    
    if(mail.length == 0){
        mensajesError[getIndex(campo)].innerText = "Introduzca un email"
    }
    else if(!validadorMail.test(mail)){
        mensajesError[getIndex(campo)].innerText = "Introduzca un email válido"
    }
    else{
        mensajesError[getIndex(campo)].innerText = ""
        camposValidos[getIndex(campo)] = true
    }
    validarCampos()
}

function validarImagen(campo){
    var valor = campo.value
    camposValidos[getIndex(campo)] = false
    if(valor == ""){
        mensajesError[getIndex(campo)].innerText = "Eliga una imagen"
    }
    else{
        mensajesError[getIndex(campo)].innerText = ""
        camposValidos[getIndex(campo)] = true
    }
    validarCampos()
}

function validarCategoria(campo){
    var valor = campo.value
    camposValidos[getIndex(campo)] = false
    if(valor == "00"){
        mensajesError[getIndex(campo)].innerText = "Eliga una categoria"
    }
    else{
        mensajesError[getIndex(campo)].innerText = ""
        camposValidos[getIndex(campo)] = true
    }
    validarCampos()
}

function validarCampos(){
    var todosOK = true
    camposValidos.forEach(campo => {
        if(!campo) todosOK = false
    });
    
        
    if(todosOK){
        botonEnviar.disabled = false
    }
    else{
        botonEnviar.disabled = true
    }
        


}


function getIndex(campo){
    return inputs.indexOf(campo)
}

/************************************************************************************ */

formulario.addEventListener("submit", e =>{
    e.preventDefault()

    var producto = {
        nombre: campoNombre.value,
        marca: campoMarca.value,
        precio: campoPrecio.value,
        stock: campoStock.value,
        descripcion: campoDescripcion.value, 
        categoria: campoCategoria.value, 
        imagen: campoImagen.value, 
        envio: campoEnvio.checked, 
        vendedor: campoVendedor.value, 
        email: campoEmail.value
        }

    
    inputs.forEach(input =>{
        if(input.type == "select-one"){
            input.value = "00"
        }
        else{
            input.value = ""
        }
    })
    campoEnvio.checked = false

    productos.push(producto)
    renderProductos()
})

/************************************************************************************ */

function renderProductos(){
    const xhr = new XMLHttpRequest
    xhr.open("get", "plantillas/listado.hbs")
    xhr.addEventListener('load', () =>{
        if(xhr.status = 200){
            var plantillaHbs = xhr.response

            var template = Handlebars.compile(plantillaHbs)

            var html = template({productos: productos})

            document.getElementById('listado-productos').innerHTML = html
        }
    })
    xhr.send()
}
renderProductos()
var inputs = [
    document.getElementById("nombreProducto"), 
    document.getElementById("marca"), 
    document.getElementById("precio"), 
    document.getElementById("stock"), 
    document.getElementById("descripcion"), 
    document.getElementById("categoria"), 
    document.getElementById("imagen"), 
    document.getElementById("envio_gratis"), 
    document.getElementById("nombreVendedor"), 
    document.getElementById("email")]

var camposValidos = [false, false, false, false, false, false, false, true, false, false]

var mensajesError = document.querySelectorAll(".mensaje_error")

var botonEnviar = document.getElementById("enviar")
botonEnviar.disabled = true


var formularioAlta = document.querySelector(".alta_form")

var productos = []


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
                validarTexto(campo)
            })
            break

        case "select-one":
            campo.addEventListener("input", () =>{
                validarCategoria(campo)
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
    mensajesError[getIndex(campo)].style.visibility = !camposValidos[getIndex(campo)] ? "visible" : "hidden"
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
    mensajesError[getIndex(campo)].style.visibility = !camposValidos[getIndex(campo)] ? "visible" : "hidden"
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
    mensajesError[getIndex(campo)].style.visibility = !camposValidos[getIndex(campo)] ? "visible" : "hidden"
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
    mensajesError[getIndex(campo)].style.visibility = !camposValidos[getIndex(campo)] ? "visible" : "hidden"
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
    mensajesError[getIndex(campo)].style.visibility = !camposValidos[getIndex(campo)] ? "visible" : "hidden"
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

formularioAlta.addEventListener("submit", e =>{
    e.preventDefault()
    var producto = {
        nombre: inputs[0].value,
        marca: inputs[1].value,
        precio: inputs[2].value,
        stock: inputs[3].value,
        descripcion: inputs[4].value, 
        categoria: inputs[5].value, 
        imagen: inputs[6].value, 
        envio: inputs[7].checked, 
        vendedor: inputs[8].value, 
        email: inputs[9].value
        }

    
    inputs.forEach(input =>{
        if(input.type == "select-one"){
            input.value = "00"
        }
        else if(input.type == "checkbox"){
            input.checked = false
        }
        else{
            input.value = ""
        }
    })

    productos.push(producto)
    document.querySelector(".lista_container").style.visibility = "visible"
    renderProductos()
})

/************************************************************************************ */

function renderProductos(){
    const xhr = new XMLHttpRequest
    xhr.open("get", "plantillas/listadoAlta.hbs")
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

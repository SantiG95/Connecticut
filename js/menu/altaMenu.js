class FormularioAlta {
    inputs = null
    formularioAlta = null
    mensajesError = null
    botonEnviar = null
    camposValidos = null
    productos = null

    constructor(renderTablaAlta, guardarProducto){
        this.inputs = [
            document.getElementById("nombreProducto"), 
            document.getElementById("marca"), 
            document.getElementById("precio"), 
            document.getElementById("stock"), 
            document.getElementById("descripcion"), 
            document.getElementById("categoria"), 
            document.getElementById("imagen"), 
            document.getElementById("envio_gratis"), 
            document.getElementById("nombreVendedor"), 
            document.getElementById("email")
        ]
        this.formularioAlta = document.querySelector(".alta_form")
        this.mensajesError = document.querySelectorAll(".mensaje_error")
        this.botonEnviar = document.getElementById("enviar")
        this.camposValidos = [false, false, false, false, false, false, false, true, false, false]
        this.productos = []

        this.botonEnviar.disabled = true
        
        this.inputs.forEach(campo => {
            switch(campo.type){
                case "text":
                    campo.addEventListener("input", () => {
                        this.validarTexto(campo)
                    })
                    break
                
                case "number":
                    campo.addEventListener("input", () => {
                        this.validarNumero(campo)
                    })
                    break
        
                case "email":
                    campo.addEventListener("input", () => {
                        this.validarEmail(campo)
                    })
                    break
        
                case "file":
                    campo.addEventListener("input", () =>{
                        this.validarImagen(campo)
                    })
                    break
        
                case "textarea":
                    campo.addEventListener("input", () =>{
                        this.validarTexto(campo)
                    })
                    break
        
                case "select-one":
                    campo.addEventListener("input", () =>{
                        this.validarCategoria(campo)
                    })
            }
        });

        this.formularioAlta.addEventListener("submit", e =>{
            e.preventDefault()
            var producto = this.leerProductoIngresado()
            this.limpiarFormulario()
            
            
            if(guardarProducto) guardarProducto(producto)
            this.productos.push(producto)
            
            renderProductos()
        })
    }

    validarTexto(campo){
        var largo = campo.value.trim().length
        this.camposValidos[this.getIndex(campo)] = false
        if(largo == 0){
            this.mensajesError[this.getIndex(campo)].innerText = "Campo obligatorio"
        }
        else if(largo < 3){
            this.mensajesError[this.getIndex(campo)].innerText = "Debe introducir un minimo de 3 caracteres"
        }
        else if(largo > 40 && campo.id != "imagen"){
            this.mensajesError[this.getIndex(campo)].innerText = "Debe introducir un maximo de 40 caracteres"
        }
        else{
            this.mensajesError[this.getIndex(campo)].innerText = ""
            this.camposValidos[this.getIndex(campo)] = true
        }
        this.mensajesError[this.getIndex(campo)].style.visibility = !this.camposValidos[this.getIndex(campo)] ? "visible" : "hidden"
        this.validarCampos()
    }
    
    validarNumero(campo){
        var valor = campo.value
        this.camposValidos[this.getIndex(campo)] = false
        if(valor <= 0){
            this.mensajesError[this.getIndex(campo)].innerText = "Introduzca un valor mayor a 0"
        }
        else if(campo.id == "stock" && valor.includes('.')){
            this.mensajesError[this.getIndex(campo)].innerText = "Introduzca valor entero"
        }
        else{
            this.mensajesError[this.getIndex(campo)].innerText = ""
            this.camposValidos[this.getIndex(campo)] = true
        }
        this.mensajesError[this.getIndex(campo)].style.visibility = !this.camposValidos[this.getIndex(campo)] ? "visible" : "hidden"
        this.validarCampos()
    }
    
    validarEmail(campo){
        var mail = campo.value.trim()
        this.camposValidos[this.getIndex(campo)] = false
    
        var validadorMail = /^\w+@\w+\.\w{2,3}(\.(ar|uy))?$/
        
        if(mail.length == 0){
            this.mensajesError[this.getIndex(campo)].innerText = "Introduzca un email"
        }
        else if(!validadorMail.test(mail)){
            this.mensajesError[this.getIndex(campo)].innerText = "Introduzca un email válido"
        }
        else{
            this.mensajesError[this.getIndex(campo)].innerText = ""
            this.camposValidos[this.getIndex(campo)] = true
        }
        this.mensajesError[this.getIndex(campo)].style.visibility = !this.camposValidos[this.getIndex(campo)] ? "visible" : "hidden"
        this.validarCampos()
    }
    
    validarImagen(campo){
        var valor = campo.value
        this.camposValidos[this.getIndex(campo)] = false
        if(valor == ""){
            this.mensajesError[this.getIndex(campo)].innerText = "Eliga una imagen"
        }
        else{
            this.mensajesError[this.getIndex(campo)].innerText = ""
            this.camposValidos[this.getIndex(campo)] = true
        }
        this.mensajesError[this.getIndex(campo)].style.visibility = !camposValidos[getIndex(campo)] ? "visible" : "hidden"
        this.validarCampos()
    }
    
    validarCategoria(campo){
        var valor = campo.value
        this.camposValidos[this.getIndex(campo)] = false
        if(valor == "00"){
            this.mensajesError[this.getIndex(campo)].innerText = "Eliga una categoria"
        }
        else{
            this.mensajesError[this.getIndex(campo)].innerText = ""
            this.camposValidos[this.getIndex(campo)] = true
        }
        this.mensajesError[this.getIndex(campo)].style.visibility = !this.camposValidos[this.getIndex(campo)] ? "visible" : "hidden"
        this.validarCampos()
    }
    
    validarCampos(){
        var todosOK = true
        this.camposValidos.forEach(campo => {
            if(!campo) todosOK = false
        });
        
            
        if(todosOK){
            this.botonEnviar.disabled = false
            desactivarBotonesProductos(false)
        }
        else{
            this.botonEnviar.disabled = true
            desactivarBotonesProductos(true)
        }
            
    
    
    }
    
    getIndex(campo){
        return this.inputs.indexOf(campo)
    }

    leerProductoIngresado(){
        return {
            nombre: this.inputs[0].value,
            marca: this.inputs[1].value,
            precio: this.inputs[2].value,
            stock: this.inputs[3].value,
            descripcion: this.inputs[4].value, 
            categoria: this.inputs[5].value, 
            imagen: this.inputs[6].value, 
            envio: this.inputs[7].checked, 
            vendedor: this.inputs[8].value, 
            email: this.inputs[9].value
        }
    }

    limpiarFormulario(){
        this.inputs.forEach(input =>{
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
        this.botonEnviar.disabled = true
        desactivarBotonesProductos(true)
    }
}

function renderProductos(productos){
    document.querySelector(".lista_container").style.visibility = "visible"
    const xhr = new XMLHttpRequest
    xhr.open("get", "plantillas/listadoAlta.hbs")
    xhr.addEventListener('load', () =>{
        if(xhr.status = 200){
            var plantillaHbs = xhr.response

            var template = Handlebars.compile(plantillaHbs)

            var html = template({productos})

            document.getElementById('listado-productos').innerHTML = html

            botonesProducto = document.querySelectorAll(".botonProducto")
        }
    })
    xhr.send()
}

function desactivarBotonesProductos(bool){
    botonesProducto.forEach(boton =>{
        boton.disabled = bool
    })
}



let formularioAlta = null

let botonesProducto = null

async function initAlta(){
    formularioAlta = new FormularioAlta(renderProductos, productoController.guardarProducto)

    let productos = await productoController.obtenerProductos()
    renderProductos(productos)
}
class filtroController{
    checkboxes = null
    cards = null
    marcados = null

    checkboxesMarcados = []

    constructor(){
        this.checkboxes = document.getElementsByClassName("checkboxCategoria")
        
        this.cards = document.getElementsByClassName("card")

        this.marcados = 0

        this.checkboxesMarcados = [[],[]]
    }

    aplicarFiltroNintendo(){
        if(this.checkboxes[0].checked){
            this.marcados++
            this.checkboxesMarcados[0].push("Nintendo")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[0].splice(this.checkboxesMarcados[0].indexOf("Nintendo"), 1)
        }
        this.cambiarVisibilidad()
        
    }

    aplicarFiltroPlaystation(){
        if(this.checkboxes[1].checked){
            this.marcados++
            this.checkboxesMarcados[0].push("Playstation")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[0].splice(this.checkboxesMarcados[0].indexOf("Playstation"), 1)
        }
        this.cambiarVisibilidad()
    }

    aplicarFiltroXbox(){
        if(this.checkboxes[2].checked){
            this.marcados++
            this.checkboxesMarcados[0].push("Xbox")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[0].splice(this.checkboxesMarcados[0].indexOf("Xbox"), 1)
        }
        this.cambiarVisibilidad()
    }

    aplicarFiltroPc(){
        if(this.checkboxes[3].checked){
            this.marcados++
            this.checkboxesMarcados[0].push("PC")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[0].splice(this.checkboxesMarcados[0].indexOf("PC"), 1)
        }
        this.cambiarVisibilidad()
    }

    aplicarFiltroConsolas(){
        if(this.checkboxes[4].checked){
            this.marcados++
            this.checkboxesMarcados[1].push("Consolas")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[1].splice(this.checkboxesMarcados[1].indexOf("Consolas"), 1)
        }
        this.cambiarVisibilidad()
    }

    aplicarFiltroJuegos(){
        if(this.checkboxes[5].checked){
            this.marcados++
            this.checkboxesMarcados[1].push("Juegos")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[1].splice(this.checkboxesMarcados[1].indexOf("Juegos"), 1)
        }
        this.cambiarVisibilidad()
    }

    aplicarFiltroAccesorios(){
        if(this.checkboxes[6].checked){
            this.marcados++
            this.checkboxesMarcados[1].push("Accesorios")
        }
        else{
            this.marcados--
            this.checkboxesMarcados[1].splice(this.checkboxesMarcados[1].indexOf("Accesorios"), 1)
        }
        this.cambiarVisibilidad()
    }



    cambiarVisibilidad(){
        var dobleCheck = false
        var cartasVisibles = 0
        
        //Por cada carta
        for(var i = 0; i < this.cards.length; i++){
            var visible = false
            var tieneMarca = false

            //No hay nada marcado
            if(!this.marcados){
                visible = true
            }

            if(this.checkboxesMarcados[0].length > 0 && this.checkboxesMarcados[1].length > 0){
                dobleCheck = true
            }

            //Por cada marca
            for(var e = 0; e < this.checkboxesMarcados[0].length; e++){

                //Se mira si tiene marca
                if(this.cards[i].classList.contains(this.checkboxesMarcados[0][e])){
                    visible = true
                    tieneMarca = true
                }
            }

            //Por cada categoria
            for(var a = 0; a < this.checkboxesMarcados[1].length; a++){

                //Se miran si tiene marca y categoria
                if(dobleCheck){

                    //Cumplio la condicion de tener marca...
                    if(tieneMarca){
                        console.log(this.cards[a])

                        //...y cumple la condicion de la categoria
                        if(this.cards[i].classList.contains(this.checkboxesMarcados[1][a])){
                            visible = true
                            break
                        }

                        //...pero no cumple la condicion de la categoria
                        else{
                            visible = false
                        }
                    }
                }

                //Se mira si tiene solo categoria, no hay marca
                else{
                    if(this.cards[i].classList.contains(this.checkboxesMarcados[1][a])){
                        visible = true
                    }
                }
            }

            //Resultado
            if(visible){
                this.cards[i].classList.add("visible")
                cartasVisibles++
            }
            else{
                this.cards[i].classList.remove("visible")
            }

            document.getElementById("cantidad-productos").innerHTML = cartasVisibles > 0 ? 
                                    `Se encontr${cartasVisibles > 1 ? `aron ${cartasVisibles} productos` : `ó ${cartasVisibles} producto`}` 
                                    : `No se encontraron productos`
                
            
        }
        
    }
}

const filtro = new filtroController()
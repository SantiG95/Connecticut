var elemSecciones = document.getElementsByTagName("section");
var contadorProductos = document.getElementsByClassName("cantidad-productos")

var cantidadesProductos = [0,0,0,0]

function Articulo(nombreArticulo, precio, imagen, marca, tipoArticulo){
    this.nombreArticulo = nombreArticulo
    this.precio = precio
    this.imagen = imagen
    this.marca = marca
    this.tipoArticulo = tipoArticulo

    this.getNombre = function(){
        return this.nombreArticulo
    }

    this.getMarca = function(){
        return this.marca
    }

    this.getTipoArticulo = function(){
        return this.tipoArticulo
    }

    this.getHtmlArticle = function(){
        var xhr = new XMLHttpRequest
        xhr.open("get", "plantillas/card.hbs")
        xhr.addEventListener("load", () =>{
            if(xhr.status == 200){
                let plantillaHbs = xhr.response
                
                var template = Handlebars.compile(plantillaHbs)

                let html = template(this)

                switch(this.getMarca()){
                    case "Nintendo":
                        cantidadesProductos[0] += 1
                        switch(this.getTipoArticulo()){
                            case "Consolas":
                                elemSecciones[0].getElementsByClassName("card-container")[0].innerHTML += html;
                                break
            
                            case "Juegos":
                                elemSecciones[0].getElementsByClassName("card-container")[1].innerHTML += html;
                                break
                                
                            case "Amiibo":
                                elemSecciones[0].getElementsByClassName("card-container")[2].innerHTML += html;
                        }
                        break
            
                    case "Playstation":
                        cantidadesProductos[1] += 1
                        switch(this.getTipoArticulo()){
                            case "Consolas":
                                elemSecciones[1].getElementsByClassName("card-container")[0].innerHTML += html;
                                break
            
                            case "Juegos":
                                elemSecciones[1].getElementsByClassName("card-container")[1].innerHTML += html;
                                break
                        }
                        break
            
                        case "Xbox":
                            cantidadesProductos[2] += 1
                            switch(this.getTipoArticulo()){
                                case "Consolas":
                                    elemSecciones[2].getElementsByClassName("card-container")[0].innerHTML += html;
                                    break
                
                                case "Juegos":
                                    elemSecciones[2].getElementsByClassName("card-container")[1].innerHTML += html;
                                    break
                            }
                            break
            
                        case "PC":
                            cantidadesProductos[3] += 1
                            switch(this.getTipoArticulo()){
                                case "Juegos":
                                    elemSecciones[3].getElementsByClassName("card-container")[0].innerHTML += html;
                                    break
                            }
                            break
                }

                actualizarContadorProductos()
            }
        })
        xhr.send()

        /*return `
        <div class="card">
            <article class="card__article">
                <div 
                    class="card__image"
                    style="background-image: url('img/${this.imagen}');"
                >
                </div>

                <div class="card__content">
                    <h3 class="card__heading">${this.nombreArticulo}</h3>
                    
                    <div class="card__price">
                        <p>$${this.precio}</p>
                    </div>
                    <div class="card__quantity">
                        <input type="button" value="-">
                        <span>
                            <label for="">Cantidad: </label>
                            <p class="product_quantity">0</p>
                        </span>
                        <input type="button" value="+">
                    </div>
                    <div class="card_shop">Comprar</div>
                </div>
            </article>
        </div>`*/
    }
}

function agregarArticuloALaPagina(articulo){
    articulo.getHtmlArticle()
    /*switch(articulo.getMarca()){
        case "Nintendo":
            cantidadesProductos[0] += 1
            switch(articulo.getTipoArticulo()){
                case "Consolas":
                    elemSecciones[0].getElementsByClassName("card-container")[0].innerHTML += articulo.getHtmlArticle();
                    break

                case "Juegos":
                    elemSecciones[0].getElementsByClassName("card-container")[1].innerHTML += articulo.getHtmlArticle();
                    break
                    
                case "Amiibo":
                    elemSecciones[0].getElementsByClassName("card-container")[2].innerHTML += articulo.getHtmlArticle();
            }
            break

        case "Playstation":
            cantidadesProductos[1] += 1
            switch(articulo.getTipoArticulo()){
                case "Consolas":
                    elemSecciones[1].getElementsByClassName("card-container")[0].innerHTML += articulo.getHtmlArticle();
                    break

                case "Juegos":
                    elemSecciones[1].getElementsByClassName("card-container")[1].innerHTML += articulo.getHtmlArticle();
                    break
            }
            break

            case "Xbox":
                cantidadesProductos[2] += 1
                switch(articulo.getTipoArticulo()){
                    case "Consolas":
                        elemSecciones[2].getElementsByClassName("card-container")[0].innerHTML += articulo.getHtmlArticle();
                        break
    
                    case "Juegos":
                        elemSecciones[2].getElementsByClassName("card-container")[1].innerHTML += articulo.getHtmlArticle();
                        break
                }
                break

            case "PC":
                cantidadesProductos[3] += 1
                switch(articulo.getTipoArticulo()){
                    case "Juegos":
                        elemSecciones[3].getElementsByClassName("card-container")[0].innerHTML += articulo.getHtmlArticle();
                        break
                }
                break
    }
    */
}

function actualizarContadorProductos(){
    for(var i = 0; i < contadorProductos.length; i++){
        contadorProductos[i].innerHTML = `Se encontraron ${cantidadesProductos[i]} productos`
    }
}



/********************************
 *          NINTENDO
 ********************************/

// CONSOLAS

var articulo1 = new Articulo(
    "Nintendo Switch",
    "79.999",
    "switch-neon.png",
    "Nintendo",
    "Consolas"
)

var articulo2 = new Articulo(
    "Nintendo Switch Lite",
    "69.999",
    "switch-lite-turquoise.png",
    "Nintendo",
    "Consolas"
)

var articulo3 = new Articulo(
    "Nintendo Switch OLED",
    "104.999",
    "switch-oled-white.png",
    "Nintendo",
    "Consolas"
)

// JUEGOS

var articulo4 = new Articulo(
    "Super Mario Odyssey",
    "7.999",
    "switch-marioodyssey.png",
    "Nintendo",
    "Juegos"
)

var articulo5 = new Articulo(
    "Mario Kart 8 Deluxe",
    "7.999",
    "switch-mariokart.png",
    "Nintendo",
    "Juegos"
)

var articulo6 = new Articulo(
    "Super Mario Party",
    "7.999",
    "switch-marioparty.png",
    "Nintendo",
    "Juegos"
)

var articulo7 = new Articulo(
    "Pikmin 3 Deluxe",
    "7.999",
    "switch-pikmin.png",
    "Nintendo",
    "Juegos"
)

var articulo8 = new Articulo(
    "Pokemon Let´s Go Pikachu",
    "7.999",
    "switch-pokemonpikachu.png",
    "Nintendo",
    "Juegos"
)

var articulo9 = new Articulo(
    "Pokemon Let´s Go Eevee",
    "7.999",
    "switch-pokemoneevee.png",
    "Nintendo",
    "Juegos"
)

// AMIIBO

var articulo10 = new Articulo(
    "Amiibo Mario",
    "7.000",
    "amiibo-mario.png",
    "Nintendo",
    "Amiibo"
)

var articulo11 = new Articulo(
    "Amiibo Luigi ",
    "7.000",
    "amiibo-luigi.png",
    "Nintendo",
    "Amiibo"
)

var articulo12 = new Articulo(
    "Amiibo Peach",
    "7.000",
    "amiibo-peach.png",
    "Nintendo",
    "Amiibo"
)

var articulo13 = new Articulo(
    "Amiibo Bowser",
    "7.000",
    "amiibo-bowser.png",
    "Nintendo",
    "Amiibo"
)

var articulo14 = new Articulo(
    "Amiibo Pikachu",
    "7.000",
    "amiibo-pikachu.png",
    "Nintendo",
    "Amiibo"
)

/********************************
 *          PLAYSTATION
 ********************************/

// CONSOLAS

var articulo15 = new Articulo(
    "Playstation 4",
    "90.000",
    "ps4-fat.png",
    "Playstation",
    "Consolas"
)

var articulo16 = new Articulo(
    "Playstation 4 Pro",
    "121.000",
    "ps4-pro.png",
    "Playstation",
    "Consolas"
)

var articulo17 = new Articulo(
    "Playstation 5",
    "178.000",
    "ps5-digital.png",
    "Playstation",
    "Consolas"
)

// JUEGOS

var articulo18 = new Articulo(
    "Mortal Kombat 11",
    "7.999",
    "ps4-mortalkombat.png",
    "Playstation",
    "Juegos"
)

var articulo19 = new Articulo(
    "Crash Bandicoot: N Sane Trilogy",
    "7.999",
    "ps4-crashtrilogy.png",
    "Playstation",
    "Juegos"
)

var articulo20 = new Articulo(
    "Crash Bandicoot 4: It's About Time",
    "7.999",
    "ps4-crash4.png",
    "Playstation",
    "Juegos"
)

var articulo21 = new Articulo(
    "The Last of Us Remastered",
    "7.999",
    "ps4-lastofus.png",
    "Playstation",
    "Juegos"
)

var articulo22 = new Articulo(
    "The Last of Us Part II",
    "7.999",
    "ps4-lastofus2.png",
    "Playstation",
    "Juegos"
)

var articulo23 = new Articulo(
    "Spider-Man",
    "7.999",
    "ps4-spiderman.png",
    "Playstation",
    "Juegos"
)

/********************************
 *          XBOX
 ********************************/

// CONSOLAS

var articulo24 = new Articulo(
    "Xbox One",
    "100.000",
    "xbox-original.png",
    "Xbox",
    "Consolas"
)

var articulo25 = new Articulo(
    "Xbox Series S",
    "100.000",
    "xbox-seriess.png",
    "Xbox",
    "Consolas"
)

var articulo26 = new Articulo(
    "Xbox Series X",
    "195.000",
    "xbox-seriesx.png",
    "Xbox",
    "Consolas"
)

// JUEGOS

var articulo27 = new Articulo(
    "Crash Bandicoot: N Sane Trilogy",
    "7.999",
    "xbox-crashtrilogy.png",
    "Xbox",
    "Juegos"
)

var articulo28 = new Articulo(
    "Crash Bandicoot 4: It's About Time",
    "7.999",
    "xbox-crash4.png",
    "Xbox",
    "Juegos"
)

var articulo29 = new Articulo(
    "Back 4 Blood (Xbox)",
    "7.999",
    "xbox-back4blood.png",
    "Xbox",
    "Juegos"
)

var articulo30 = new Articulo(
    "Call of Duty: Infinite Warfare",
    "7.999",
    "xbox-callofduty.png",
    "Xbox",
    "Juegos"
)

var articulo31 = new Articulo(
    "Mortal Kombat 11",
    "7.999",
    "xbox-mortalkombat.png",
    "Xbox",
    "Juegos"
)

var articulo32 = new Articulo(
    "Kingdom Hearts 3",
    "7.999",
    "xbox-kingdomhearts.jpg",
    "Xbox",
    "Juegos"
)

/********************************
 *          PC
 ********************************/


// JUEGOS

var articulo33 = new Articulo(
    "Los Sims 4",
    "2.499",
    "pc-sims4.jpg",
    "PC",
    "Juegos"
)

var articulo34 = new Articulo(
    "Call of Duty: Infinite Warfare",
    "999",
    "pc-callofduty.jpg",
    "PC",
    "Juegos"
)

var articulo35 = new Articulo(
    "Cities Skylines",
    "329",
    "pc-cities.png",
    "PC",
    "Juegos"
)

var articulo36 = new Articulo(
    "Sonic Generations",
    "225",
    "pc-sonic.jpg",
    "PC",
    "Juegos"
)

var articulo37 = new Articulo(
    "Crash Bandicoot: N Sane Trilogy",
    "679",
    "pc-crashtrilogy.jpg",
    "PC",
    "Juegos"
)



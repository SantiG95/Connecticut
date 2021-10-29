var listaCartas = document.getElementsByClassName("card")

for(var i = 0; i < listaCartas.length; i++){
    listaCartas[i].addEventListener("click", miFuncion)
}

function miFuncion(){
    console.log("Se compro: " + this.getElementsByClassName("card__heading")[0].innerHTML)
}
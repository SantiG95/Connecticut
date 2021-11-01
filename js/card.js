var listaCartas = document.getElementsByClassName("card")
var listaStock  = []


for(var i = 0; i < listaCartas.length; i++){
    //Se imprime en la consola el mensaje "Se compro (nombre del producto)" 
    //al hacer clic en la carta
    /*listaCartas[i].addEventListener("click", function(){
        console.log("Se compro: " + this.getElementsByClassName("card__heading")[0].innerHTML)
        }
    )
*/
    //Botones para cambiar cantidad
    var botones = listaCartas[i].getElementsByTagName("input")
    
    botones[0].addEventListener("click", function(){
        if(this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML > 0){
            this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML = parseInt(this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML) - 1
        }
        
    })

    botones[1].addEventListener("click", function(){
        this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML = parseInt(this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML) + 1
    })
    


}
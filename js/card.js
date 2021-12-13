var listaCartas = document.getElementsByClassName("card")
console.log(listaCartas)
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
            console.log(`${this.parentElement.parentElement.getElementsByClassName("card__heading")[0].innerHTML}\nUnidades compradas: ${this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML}`)
        }
        
    })

    botones[1].addEventListener("click", function(){
        this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML = parseInt(this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML) + 1
        console.log(`${this.parentElement.parentElement.getElementsByClassName("card__heading")[0].innerHTML}\nUnidades compradas: ${this.parentElement.getElementsByClassName("product_quantity")[0].innerHTML}`)
    })
    
}
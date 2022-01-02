var slideIndex = 1
var tiempoCambio = 3000
var timeOut1
var timeOut2

var slides = document.getElementsByClassName("slideshow-container__images")
var dots = document.getElementsByClassName("dot")

showSlides(slideIndex);
cambiarImagenAuto()

//Controles de los botones
function plusSlides(n){
    
    showSlides(slideIndex += n)
}

//Control puntos
function currentSlide(n){
    
    showSlides(slideIndex = n)
}

function showSlides(n){
    var i

    if(n == null){
        slideIndex++
    }

    if(n > slides.length || (n == null && slideIndex > slides.length)){
        slideIndex = 1
    }

    if(n < 1){
        slideIndex = slides.length
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" actual", "");
    }

    //console.log(slideIndex)
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " actual"
}

function cambiarImagenAuto(){
    if(location.hash.slice(1) == "home"){
        timeOut1 = setTimeout(showSlides, 3000);
        timeOut2 = setTimeout(cambiarImagenAuto, 3000)
    }
    
}
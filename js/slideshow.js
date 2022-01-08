class Slideshow {
    slideIndex = null
    tiempoCambio = null
    timeOut1 = null
    timeOut2 = null
    slides = null
    dots = null

    constructor(){
        this.slideIndex = 1
        this.tiempoCambio = 3000

        this.slides = document.getElementsByClassName("slideshow-container__images")
        this.dots = document.getElementsByClassName("dot")
    }

    //Controles de los botones
    plusSlides(n){
        
        this.showSlides(this.slideIndex += n)
    }

    //Control puntos
    currentSlide(n){
        
        this.showSlides(this.slideIndex = n)
    }

    showSlides(n){
        var i
    
        if(n == null){
            this.slideIndex++
        }
        
        if(n > this.slides.length || (n == null && this.slideIndex > this.slides.length)){
            this.slideIndex = 1
        }
    
        if(n < 1){
            this.slideIndex = this.slides.length
        }
    
        for(i = 0; i < this.slides.length; i++){
            this.slides[i].style.display = "none"
        }
        for(i = 0; i < this.dots.length; i++){
            this.dots[i].className = this.dots[i].className.replace(" actual", "");
        }
    
        //console.log(this.slides[this.slideIndex-1])
        this.slides[this.slideIndex-1].style.display = "block"
        this.dots[this.slideIndex-1].className += " actual"
    }

    cambiarImagenAuto(){
        
        
    }

    
}

const slideshow = new Slideshow()

function cambiarImagenAuto(n){
    if(location.hash.slice(1) == "home"){
        slideshow.showSlides(n)
        setTimeout(cambiarImagenAuto, 3000)
    }
}

async function initSlideshow(){
    cambiarImagenAuto(slideshow.slideIndex)
}
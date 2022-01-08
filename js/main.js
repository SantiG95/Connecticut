class Main{
    async ajax(url, metodo="get"){
        return await fetch(url, {method: metodo}).then(rta => rta.text())
    }

    getNombreArchivo(id){
        return `vistas/${id}.html`
    }

    marcarLink(id){
        let links = document.querySelectorAll("header nav a")
        links.forEach(link => {
            if(link.id == id){
                link.classList.add("active")
            }
            else{
                link.classList.remove("active")
            }
        })
    }

    initJS(id){
        switch(id){
            case "alta":
                initAlta()
                break

            case "home":
                initInicio()
                break

            case "nosotros":
                initNosotros()
                break

            case "contacto":
                initContacto()
                break
        }
    }

    async cargarPlantilla(id){
        let archivo = this.getNombreArchivo(id)
        let plantilla = await this.ajax(archivo)

        let main = document.querySelector("main")
        main.innerHTML = plantilla

        this.initJS(id)
    }

    async cargarPlantillas(){
        let id = location.hash.slice(1) || "Home"
        this.marcarLink(id)
        await this.cargarPlantilla(id)

        let links = document.querySelectorAll("header nav a")

        links.forEach(link => {
            link.addEventListener("click", e =>{
                e.preventDefault()

                let id = link.id
                location.hash = id
            })
        })

        window.addEventListener("hashchange", async () =>{
            let id = location.hash.slice(1) || "Home"
            this.marcarLink(id)
            await this.cargarPlantilla(id)
        })
    }

    

    async start(){
        await this.cargarPlantillas()
    }
}

const main = new Main()
main.start()
class Http{

    /* Get */
    async get(url, id){
        try{
            return await fetch(url + (id || ''), {method: 'get'})
            .then(rta => rta.json())
        }
        catch(error){
            console.error("GET ERROR", error)
        }
    }


    /* Post */
    async post(url, dato){
        try{
            return await fetch(url, {
                method: 'post',
                body: JSON.stringify(dato),
                headers: {'content-type': 'application/json'}
            })
            .then(rta => rta.json())
        }
        catch(error){
            console.error("POST ERROR", error)
        }
    }

    /* Put */
    async put(url, id, dato){
        try{
            return await fetch(`${url}/${id}`, {
                method: 'put',
                body: JSON.stringify(dato),
                headers: {'content-type': 'application/json'}
            })
            .then(rta => rta.json())
        }
        catch(error){
            console.error("PUT ERROR", error)
        }
    }

    /* Delete */
    async del(url, id){
        try{
            return await fetch(`${url}/${id}`, {method: 'delete'})
            .then(rta => rta.json())
        }
        catch(error){
            console.error("DELETE ERROR", error)
        }
    }
}

const http = new Http()
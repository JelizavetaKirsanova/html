

window.addEventListener("load",( ) => {
    fetch("https://api.ipify.org/?format=json").then(
        (response) => {
            return response.json()
        },
        (error) => {
            console.log(error)
        }
    ).then( (data) => {
        fetch(`https://ipinfo.io/${data.ip}/geo`).then(
            (response) => { 
                return response.json()
            },
            (error) => {
                console.log(error)
            }
        ).then(
            (data) => {
                let divApi = document.getElementById("ip")
                
                for(let i in data){
                    let p = document.createElement("p")
                    console.log(data)
                    p.innerText = data[i]
                    divApi.append(p) 
                }
                 
            }
        )
    })

}

)
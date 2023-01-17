

window.addEventListener("load",( ) => {
    fetch('https://api.publicapis.org/entries').then(
        (response) => {
            return response.json()
        },
        (error) => {
            console.log(error)
        }
    ).then((data) => {
        let divApi = document.getElementById("api")
        for (let i of data.entries){
            let p = document.createElement("p")
            p.innerText = i.Description
            divApi.append(p)
        }
    })

    const rightAnswers = ['don’t drink', "watches", "go", "has", "Did you go", "stopped", "lost", "do you finish", "will be able to", "Are you going out"]
    let bCheck = document.getElementById('checkTest')
    bCheck.addEventListener('click', () => {
        let q = document.getElementsByClassName('q')
        let score = 0
        for (let i = 0; i < q.length; i++) {
            if(rightAnswers[i] == q[i].value){
                q[i].style.background = "green"
                score++
            }else{
                q[i].style.background = "red"}
        }
        alert(score)

    })



    let answers = document.getElementsByClassName('answers')
    for(let answersButs of answers) {
        let list = answersButs.children
        for(let button of list){
            button.onclick = () => {
                if(button.classList.contains('rightAnswer')){
                    button.style.background = "green"
                }else{
                    button.style.background = "red"
                }
            }

        }
    }
} )


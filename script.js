let score = 0

window.addEventListener("load",( ) => {
    const rightAnswers = ['don’t drink', "watches", "go", "has", "Did you go", "stopped", "lost", "do you finish", "will be able to", "Are you going out"]
    let bCheck = document.getElementById('checkTest')
    bCheck.addEventListener('click', () => {
        let q = document.getElementsByClassName('q')
        for (let i = 0; i < q.length; i++) {
            if(rightAnswers[i] == q[i].value){
                q[i].style.background = "green"
                score++
            }else{
                q[i].style.background = "red"}
            
        }
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

alert(score)
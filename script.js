const url = 'https://opentdb.com/api.php?amount=10' 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function getTriviaFunction(num){
    const response = await fetch(url)
    const jsonData = await response.json()

    const divvy = document.getElementById('bulletlist')
    removeAllChildNodes(divvy)
    const jokeList = document.createElement('ol')

    for(let i = 0; i<num;i++){
        const joke = document.createElement('li')
        joke.setAttribute('class','number')
        const question = document.createElement('div')
        const answer = document.createElement('div')
        const lineBreak = document.createElement('br')

        question.innerText = `Question: ${jsonData.results[i].question}`
        question.setAttribute('class','question')

        answer.setAttribute('class','answer')
        answer.innerText = `Answer: ${jsonData.results[i].correct_answer}`

        joke.appendChild(question)
        answer.appendChild(lineBreak)
        answer.appendChild(lineBreak)
        answer.appendChild(lineBreak)

        joke.appendChild(answer)
        jokeList.appendChild(joke)
    }

    divvy.appendChild(jokeList)

}

document.getElementById('button').addEventListener("click", ()=>{
    getTriviaFunction(10)
});

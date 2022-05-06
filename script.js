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
        const difficulty = document.createElement('div')
        const lineBreak = document.createElement('br')

        question.innerText = `Question: ${jsonData.results[i].question}`
        question.setAttribute('class','question')

        answer.innerText = `Answer: ${jsonData.results[i].correct_answer}`
        answer.setAttribute('class','answer')

        difficulty.innerText = `Difficulty: ${jsonData.results[i].difficulty}`
        difficulty.setAttribute('class','difficulty')

        joke.appendChild(question)
        joke.appendChild(answer)
        joke.appendChild(difficulty)
        joke.appendChild(lineBreak)
        jokeList.appendChild(joke)
    }
    divvy.appendChild(jokeList)
}

document.getElementById('button').addEventListener("click", ()=>{
    getTriviaFunction(10)
});

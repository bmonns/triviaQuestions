const url = 'https://opentdb.com/api.php?amount=10' 

async function getTriviaFunction(num){
    const response = await fetch(url)
    const jsonData = await response.json()

    const divvy = document.getElementById('bulletlist')
    const jokeList = document.createElement('ol')

    for(let i = 0; i<num;i++){
        const joke = document.createElement('li')
        joke.setAttribute('class','number')
        const question = document.createElement('div')
        const answer = document.createElement('div')

        question.innerText = `Question: ${jsonData.results[i].question}\n`
        question.setAttribute('class','question')

        answer.setAttribute('class','answer')
        answer.innerText = `Answer: ${jsonData.results[i].correct_answer}`

        joke.appendChild(question)
        joke.appendChild(answer)
        jokeList.appendChild(joke)
    }

    divvy.appendChild(jokeList)

}

document.getElementById('button').addEventListener("click", ()=>{
    getTriviaFunction(10)
});

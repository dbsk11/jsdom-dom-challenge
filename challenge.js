//increment the counter
//find the counter element/node
//increase that counter every second 

const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton  = document.getElementById('pause')
const submitButton = document.querySelector("#submit")
const likesUL = document.querySelector("body > ul")
const commentsDiv = document.querySelector("#list")

let isTimerRunning = true



let timer = setInterval(incrementCounter, 1000);

function incrementCounter(){
    let number = parseInt(counter.innerText)
    number++
    counter.innerText = number
}

function decrementCounter(){
    let number = parseInt(counter.innerText)
    number--
    counter.innerText = number
}

plusButton.addEventListener('click', incrementCounter)
minusButton.addEventListener('click', decrementCounter)
heartButton.addEventListener('click', function(e){
    let liExist = document.getElementById(`${counter.innerText}Likes`)
    if (liExist){
        let likes = parseInt(liExist.dataset.likes)
        likes += 1
        liExist.dataset.likes = likes 
        liExist.innerText = `${counter.innerText} has been liked ${liExist.dataset.likes} times`
    }else {
        let likeLI = document.createElement('li')
        likeLI.dataset.likes = 1
        likeLI.id = `${counter.innerText}Likes`
        likeLI.innerText = `${counter.innerText} has been liked ${likeLI.dataset.likes} time`
        likesUL.append(likeLI)
    }
})
pauseButton.addEventListener('click', function(e){
    if (isTimerRunning === true) {
        clearInterval(timer)
        pauseButton.innerText = 'resume'
        minusButton.disabled = true
        plusButton.disabled = true
        heartButton.disabled = true
        submitButton.disabled = true
        isTimerRunning = false
    } else {
        timer = setInterval(incrementCounter, 1000);
        pauseButton.innerText = 'pause'
        minusButton.disabled = false
        plusButton.disabled = false
        heartButton.disabled = false
        submitButton.disabled = false
        isTimerRunning = true
    }
})

submitButton.addEventListener('click', function(e){
    e.preventDefault()
    let commentDiv = document.createElement('div')
    let comment = document.querySelector("#comment-input").value
    document.querySelector("#comment-input").value = ''
    commentDiv.innerText = comment
    commentsDiv.append(commentDiv)
})


// plusButton.addEventListener('click', function(e){
//     incrementCounter()
// })
// minusButton.addEventListener('click', function(e){
//     decrementCounter()
// })





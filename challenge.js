document.addEventListener('DOMContentLoaded', function(e){
    const counter = document.querySelector("#counter")
    const buttons = document.querySelectorAll('button')
    const pauseButton = document.querySelector("#pause")
    const likesList = document.querySelector("body > ul")

    let timerRunning = true

    timer = setInterval(function(){ 
        currentNum = parseInt(counter.innerText)
        currentNum += 1
        counter.innerText = currentNum 
    }, 1000);

    // document.querySelector("#minus").addEventListener('click', amIWorking)

    
    
    buttons.forEach((btn) => {
        btn.addEventListener('click', (e)=> {
            buttonClick(e)
        })
    })

    function buttonClick(e){
        switch (e.target.id) {
            case "minus":
                currentNum = parseInt(counter.innerText)
                currentNum -= 1
                counter.innerText = currentNum 
                break
            case "plus":
                currentNum = parseInt(counter.innerText)
                currentNum += 1
                counter.innerText = currentNum 
                break
            case "heart":
                let likeLI = document.getElementById(`${counter.innerText} likes`)
                if (likeLI) {
                    likeLI.dataset.likeCounter = parseInt(likeLI.dataset.likeCounter) + 1
                    likeLI.innerText = `${counter.innerText} has been liked ${likeLI.dataset.likeCounter} times`
                } else {
                    let like = document.createElement("LI")
                    like.id = `${counter.innerText} likes`
                    like.dataset.likeCounter = 1
                    like.innerText = `${counter.innerText} has been liked ${like.dataset.likeCounter} time`
                    likesList.appendChild(like)
                }
                break
            case "pause":
                if (timerRunning === true) {
                    clearInterval(timer)
                    pauseButton.innerText = "resume"
                    timerRunning = false
                    buttons.forEach((btn) => {
                        if (btn.id != "pause"){
                            btn.disabled = true
                        }
                    })
                } else {
                    timer = setInterval(function(){ 
                        currentNum = parseInt(counter.innerText)
                        currentNum += 1
                        counter.innerText = currentNum 
                    }, 1000);
                    pauseButton.innerText = "pause"
                    timerRunning = true
                    buttons.forEach((btn) => {
                        if (btn.id != "pause"){
                            btn.disabled = false
                        }
                    })
                }
                break
            case "submit":
                e.preventDefault()
                commentList = document.querySelector("#list")
                comment = document.querySelector("#comment-input").value
                document.querySelector("#comment-input").value = ""
                commentDiv = document.createElement("div")
                commentDiv.innerText = comment
                commentList.appendChild(commentDiv)
                console.log(commentDiv)
                break
        }
    }
    
    function amIWorking(e){
        console.log(e.target.id)
    }

})
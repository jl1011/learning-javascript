function startGame(playerChoice) {
    if (playerChoice !== "") {
        let result = ""
        let computerChoice = computerChooses()
        if (playerChoice === "Rock") {
            if (computerChoice === "rock") {
                result = "Tie"
            } else if (computerChoice === "paper") {
                result = "You lose"
            } else if (computerChoice === "scissors") {
                result = "You win"
            }
        } else if (playerChoice === "Paper") {
            if (computerChoice === "rock") {
                result = "You win"
            } else if (computerChoice === "paper") {
                result = "Tie"
            } else if (computerChoice === "scissors") {
                result = "You lose"
            }
        } else if (playerChoice === "Scissors") {
            if (computerChoice === "rock") {
                result = "You lose"
            } else if (computerChoice === "paper") {
                result = "You win"
            } else if (computerChoice === "scissors") {
                result = "Tie"
            }
        }
        let color = ""
        if (result === "Tie") {
            color = 'white'
        } else if (result === "You lose") {
            color = 'red'
            increment_points("computer")
        } else if (result === "You win") {
            color = 'green'
            increment_points("user")
        }
        let new_status = `${result}, because the computer chose ${computerChoice}!`
        let status_text = document.querySelector(".status-text")
        status_text.textContent = new_status
        status_text.style.cssText ="color: " + color + "; font-weight: 700"
    } else {
        console.log("You need to enter a value!")
    }

    function computerChooses() {
        let choices = ["rock", "paper", "scissors"]
        let computerChoice
        computerChoice = choices[Math.floor(Math.random() * choices.length)]
        return computerChoice
    }
}

function restart(winner){
    let flexbox = document.createElement("div")
    flexbox.style.display = "flex"
    flexbox.classList.add("flexbox")
    flexbox.style.alignItems = "center"
    flexbox.style.alignContent = "center"
    flexbox.style.textAlign = "center"
    flexbox.style.padding = "3px"
    flexbox.style.fontFamily = "Mont, Verdana, sans-serif"
    flexbox.style.fontWeight = "700"
    flexbox.style.backgroundColor = "lightblue"
    document.body.appendChild(flexbox)
    let thanks_message_div = document.createElement("div")
    thanks_message_div.classList.add("thanks_message_div")
    thanks_message_div.style.paddingRight = "10vw"
    thanks_message_div.style.paddingLeft = "30vw"
    flexbox.appendChild(thanks_message_div)

    let thanks_message = document.createElement("p")
    thanks_message.classList.add("thanks_message")
    if (winner === "user") {
    thanks_message.textContent = "You win!! Thanks for playing! :)"
    } else if (winner === "computer") {
        thanks_message.textContent = "Aw man!! The computer won! Try again?"
    }
    thanks_message_div.appendChild(thanks_message)

    let restart_link = document.createElement("a")
    restart_link.href = "index.html"
    restart_link.classList.add("meow")
    restart_link.textContent = "Restart?"
    flexbox.appendChild(restart_link)
}

function increment_points(winner) {
    if (winner === "computer") {
        comp_points++;
    } else if (winner === "user") {
        user_points++;
    }
    let scoreContainer
    scoreContainer = document.querySelector(".score-numbers-container")
    console.log(scoreContainer.innerText)
    scoreContainer.textContent = `${user_points} - ${comp_points}`
    if (user_points >= 5 || comp_points >= 5) {
        let qweery = document.getElementById("center-screen")
        qweery.style.display = "none";
        restart(winner)
    }

}

let user_points = 0
let comp_points = 0
answerButtonContainer = document.querySelector(".button-container")
buttons = document.querySelectorAll(".answer-buttons")
for (let button of buttons) {
    button.addEventListener(
        'click',
        function (e) {
            startGame(button.textContent)
        }
    )
}

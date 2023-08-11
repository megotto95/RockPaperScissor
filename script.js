function getComputerChoice() {
    let x = Math.floor((Math.random() * 10))
    console.log(x)
    while (x == 0) {
        x = Math.floor(Math.random() * 10)
    }
    console.log(x)
    let comResult;
    if (x >= 7) {
        comResult = "rock"
        return comResult
    } else if (x >= 4) {
        comResult = "paper"
        return comResult
    } else if ( x >= 1) {
        comResult = "scissors"
        return comResult
    }
    
    }

const computerSelection = getComputerChoice ()
console.log(computerSelection)
const playerSelection = "rock"

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            let winner = "none"
            result = "It's a tie!"
        } else if (computerSelection == "paper") {
            winner = "computer"
            result = "You Lose! Paper beats rock!"
        } else if (computerSelection == "scissors") {
            winner = "player"
            result = "You Win! Rock beats scissors!"
        }
        return result;
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player"
            result = "You win! Paper beats rock!"
        } else if (computerSelection == "paper") {
            winner = "none"
            result = "It's a tie!"
        } else if (computerSelection == "scissors") {
            winner = "computer"
            result = "You Lose! Scissors beats paper!"
        }
        return result;
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            winner = "computer"
            result = "You lose! Rock beats scissors!"
        } else if (computerSelection == "paper") {
            winner = "player"
            result = "You win! Scissors beats paper!"
        } else if (computerSelection == "scissors") {
            winner = "none"
            result = "It's a tie!"
        }
        return winner;
    }

    else {
        return "error"
    }
}

let whoWins = round(playerSelection, computerSelection)
console.log(round(playerSelection, computerSelection));

function game() {
    let computerScore = 0;
    let playerScore = 0;
    for (let index = 0; index < 4; index++) {
        round(playerSelection, computerSelection);
        if (whoWins == "computer") {
            computerScore++;
        } else if (whoWins == "player") {
            playerScore++;
        }
        console.log("computer:" + computerScore + ", player:" + playerScore) 
        return computerScore, playerScore
    }

}

console.log(game())


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

const playerSelection = "rock"

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let winner;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            winner = "none"
            result = "It's a tie!"
        } else if (computerSelection == "paper") {
            winner = "computer"
            result = "You Lose! Paper beats rock!"
        } else if (computerSelection == "scissors") {
            winner = "player"
            result = "You Win! Rock beats scissors!"
        }
        console.log(result)
        return winner;
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
        console.log(result)
        return winner;
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
        console.log(result)
        return winner;
    }

    else {
        return "error"
    }
}



function game() {
    
    let computerScore = 0;
    let playerScore = 0;
    for (let index = 0; index <= 4; index++) {
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let winner = round(playerSelection, computerSelection);
        if (winner == "computer") {
            computerScore++;
            continue;
        } else if (winner == "player") {
            playerScore++;
            continue;
        } else {
            continue;
        }
    }
    finalScore = (`computer:${computerScore}, player:${playerScore}`)
    return finalScore 
}

console.log(game())


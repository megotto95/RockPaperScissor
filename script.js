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

    

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
console.log(rock.textContent)
let results = document.querySelector('#result');
let score = document.querySelector('#score');
let final = document.querySelector('#final');
let computerScore = 0;
let playerScore = 0;


{
rock.addEventListener('click', () => {game("rock")}
);

paper.addEventListener('click', () => {game("paper")}
);

scissors.addEventListener('click', () => {game("scissors")}
);


function round(playerSelection, computerSelection) {

    console.log(computerSelection)
    playerSelection = playerSelection.toLowerCase()
    
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            winner = "none"
            result = "It's a tie!"
        } else if (computerSelection == "paper") {
            winner = "computer"
            result = "You Lose! Paper beats rock!"
            ++computerScore
        } else if (computerSelection == "scissors") {
            winner = "player"
            result = "You Win! Rock beats scissors!"
            ++playerScore
        }
        results.textContent = result
        score.textContent = "player: " + playerScore + " Computer: " + computerScore
        } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "player"
            result = "You win! Paper beats rock!"
            ++playerScore
        } else if (computerSelection == "paper") {
            winner = "none"
            result = "It's a tie!"
        } else if (computerSelection == "scissors") {
            winner = "computer"
            result = "You Lose! Scissors beats paper!"
            ++computerScore;
        }
        results.textContent = result
        score.textContent = "player: " + playerScore + " Computer: " + computerScore
        
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            winner = "computer"
            result = "You lose! Rock beats scissors!"
            ++computerScore
        } else if (computerSelection == "paper") {
            winner = "player"
            result = "You win! Scissors beats paper!"
            ++playerScore
        } else if (computerSelection == "scissors") {
            winner = "none"
            result = "It's a tie!"
        }
        results.textContent = result
        score.textContent = "player: " + playerScore + " Computer: " + computerScore
        
    }

    else {
        return "error"
    }


    }

}



function game(playerSelection) {
   if (final.textContent !== "") {
    final.textContent = ""
   }
    round(playerSelection, getComputerChoice())
    if (playerScore >= 5) {
        final.textContent = "You won the game! Congrats!"
        score.textContent = ""
        playerScore = 0
        computerScore = 0
    } else if (computerScore >= 5) {
        final.textContent = "Computer won the game! Try Again!"
        score.textContent = ""
        playerScore = 0
        computerScore = 0

    } else {return}
    

}


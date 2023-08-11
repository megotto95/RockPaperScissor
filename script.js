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
            result = "It's a tie!"
            return result
        } else {
            return "none"
        }
    } else {
        return "wrong"
    }
}

console.log(round(playerSelection, computerSelection));


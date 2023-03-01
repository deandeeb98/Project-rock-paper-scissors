function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    
    if (computer === 0) {
        return 'rock';
    } else if (computer === 1) {
        return 'paper';
    } else if (computer === 2) {
        return 'scissors';
    }    
}

console.log(getComputerChoice()); 

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();      

    if (playerSelection === computerSelection) {
        return "That's a tie";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Yon won! Rock beats Scissors';
  }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
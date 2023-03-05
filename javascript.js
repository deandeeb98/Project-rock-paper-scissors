let choices = ["rock", "paper", "scissors"];

// Generates a random answer. Either: rock, paper, or scissors, by using the Math.floor(Math.random()) method.
function getComputerChoice() {
  let computer = choices[Math.floor(Math.random() * choices.length)];
  return computer;
}
// Grabs the input of the user and allowed the input to be case-insensitive.
function getPlayerChoice() {
  let validateInput = false;
  while (validateInput === false) {
    const user = prompt("Choose either: Rock, Paper, or Scissors");
    if (user === null) {
      continue;
    }
    const userInLower = user.toLowerCase();
    if (choices.includes(userInLower)) {
      validateInput = true;
      return userInLower;
    }
  }
}

// Returns the result of a rock, paper, scissors round.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    return "You lose!";
  } else {
    return "You win!";
  }
}

// Makes the game 5 rounds long and prompts the user with a message and a way to input his answer.
function game() {
  let playerScore = 0;
  let computerScore = 0;
  console.log("Are you ready for a battle?");
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("------");

    if (playRound(playerSelection, computerSelection) === "You lose!") {
      computerScore++;
    } else if (playRound(playerSelection, computerSelection) === "You win!") {
      playerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log("You won the match!");
  } else if (computerScore > playerScore) {
    console.log("You lost the match!");
  } else {
    console.log("That match is tied!");
  }
}

game();

// Selectors.
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const score = document.querySelector("#score");
const result = document.querySelector("#result");

// Event Listeners.
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
});

// Functions.
// Generate a choice for the computer
function computerPlay() {
  let num = Math.floor(Math.random() * 3);

  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    score.textContent = "You: " + playerScore + " CPU: " + computerScore;
    result.textContent = `It's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    score.textContent = "You: " + playerScore + " CPU: " + computerScore;
    result.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    score.textContent = "You: " + playerScore + " CPU: " + computerScore;
    result.textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  // for (let i = 0; i < 5; i++) {
  //   let playerSelection = prompt("Make your choice!", "").toLowerCase();
  //   let computerSelection = computerPlay();
  //   console.log(playRound(playerSelection, computerSelection));
  // }

  if (playerScore === computerScore) {
    result.textContent = "It's a tie! " + playerScore + " to " + computerScore;
  } else if (playerScore < computerScore) {
    result.textContent = "CPU wins! " + computerScore + " to " + playerScore;
  } else if (playerScore > computerScore) {
    result.textContent = "You win! " + playerScore + " to " + computerScore;
  }
}

let playerScore = 0;
let computerScore = 0;

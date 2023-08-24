function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;

  let gameResult = "";

  if (player === computer) return `You Draw!`;
  else if (player === "rock" && computer === "scissors") gameResult = "player";
  else if (player === "paper" && computer === "rock") gameResult = "player";
  else if (player === "scissors" && computer === "paper") gameResult = "player";
  else gameResult = "computer";

  return gameResult === "player"
    ? `You Win! ${player} beats ${computer}`
    : `Computer Win! ${computer} beats ${player}`;
}

const playerSelection = prompt(
  "Which of the rock paper scissors will you serve?"
);

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

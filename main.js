let computerSelection = "";
let playerSelection = "";

let totalRound = 5;
let userCount = 0;
let computerCount = 0;

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paperBtn-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

const playerQuestionImg = document.querySelector(".user .question-btn img");
const computerQuestionImg = document.querySelector(
  ".computer .question-btn img"
);

const allBtn = document.querySelectorAll(".btn-box button");
const playerAllBtn = document.querySelectorAll(".user .btn-box button");

playerAllBtn.forEach((button) => {
  button.addEventListener("click", startGame);
});

function imageChange(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerQuestionImg.src = "./image/rocks.png";
      break;
    case "paper":
      playerQuestionImg.src = "./image/paper.png";
      break;
    case "scissors":
      playerQuestionImg.src = "./image/scissor.png";
      break;
  }

  switch (computerSelection) {
    case "rock":
      computerQuestionImg.src = "./image/rocks.png";
      break;
    case "paper":
      computerQuestionImg.src = "./image/paper.png";
      break;
    case "scissors":
      computerQuestionImg.src = "./image/scissor.png";
      break;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function startGame(e) {
  playerSelection = e.target.alt;
  computerSelection = getComputerChoice();
  if (playerSelection && computerSelection) game();
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection;
  const computer = computerSelection;

  let gameResult = "";

  if (player === computer) gameResult = "draw";
  else if (player === "rock" && computer === "scissors") gameResult = "player";
  else if (player === "paper" && computer === "rock") gameResult = "player";
  else if (player === "scissors" && computer === "paper") gameResult = "player";
  else gameResult = "computer";

  // return gameResult === "player"
  //   ? `You Win! ${player} beats ${computer}`
  //   : `Computer Win! ${computer} beats ${player}`;
  return gameResult;
}

function game() {
  imageChange(playerSelection, computerSelection);
  --totalRound;
  let gameResult = playRound(playerSelection, computerSelection);
  if (gameResult === "draw") return;
  gameResult === "player" ? ++userCount : ++computerCount;
}

console.log(`${totalRound} ${userCount} ${computerCount}`);

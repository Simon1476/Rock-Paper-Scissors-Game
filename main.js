import * as Sound from "./sound.js";

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

const scorePlayer = document.querySelector(".score__player span:last-child");
const scoreComputer = document.querySelector(
  ".score__computer span:last-child"
);
const scoreRound = document.querySelector(".score__round span:last-child");
scoreRound.textContent = totalRound;

const popUp = document.querySelector(".pop-up");
const overlay = document.querySelector(".overlay");
const restart = document.querySelector(".pop-up button");
const popUpText = document.querySelector(".pop-up p");
overlay.addEventListener("click", closePopUp);
restart.addEventListener("click", restartGame);

function closePopUp() {
  popUp.classList.remove("active");
  overlay.classList.remove("active");
}

function showPopUp() {
  popUp.classList.add("active");
  overlay.classList.add("active");
}

function restartGame() {
  totalRound = 5;
  userCount = 0;
  computerCount = 0;
  closePopUp();
  scorePlayer.textContent = userCount;
  scoreComputer.textContent = computerCount;
  scoreRound.textContent = totalRound;
}
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
  if (totalRound === 0) {
    showPopUp();
    return;
  }

  Sound.playClick();
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

  return gameResult;
}

function game() {
  imageChange(playerSelection, computerSelection);
  --totalRound;
  scoreRound.textContent = totalRound;
  if (totalRound === 0) {
    showPopUp();
    if (userCount > computerCount) {
      popUpText.textContent = "You Win!";
    } else if (userCount < computerCount) {
      popUpText.textContent = "You Lose!";
    } else popUpText.textContent = "Draw!";
  }

  let gameResult = playRound(playerSelection, computerSelection);

  if (gameResult === "draw") return;

  if (gameResult === "player") {
    ++userCount;
    Sound.playWin();
  } else {
    ++computerCount;
    Sound.playLose();
  }
  scorePlayer.textContent = userCount;
  scoreComputer.textContent = computerCount;
}

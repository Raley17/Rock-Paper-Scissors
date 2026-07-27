const computerResult = document.querySelector("h1");
const matchResult = document.querySelector("p");
const playBtn = document.querySelector(".play-btn");
let scoreCount = document.querySelector("#score");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let computerResponse = "";
let matchCountComputer = 0;
let matchCountHuman = 0;

let gameOver = false;

function getComputerChoice() {
  const computerHand = Math.random();
  if (computerHand > 0.66 && computerHand < 1) {
    computerResponse = "Rock";
  } else if (computerHand < 0.66 && computerHand > 0.33) {
    computerResponse = "Paper";
  } else {
    computerResponse = "Scissors";
  }
  return console.log(computerResponse);
}

function scoreDisplay() {
  scoreCount.textContent = `${matchCountComputer} - ${matchCountHuman}`;
}

function matchCounting() {
  if (matchCountComputer === 5) {
    computerResult.textContent = "Machine Won The Match Series";
    playBtn.textContent = "Replay";
    gameOver = true;
  } else if (matchCountHuman === 5) {
    computerResult.textContent = "You Won The Match Series";
    playBtn.textContent = "Replay";
    gameOver = true;
  } else {
  }
}

function replay() {
  matchCountComputer = 0;
  matchCountHuman = 0;
  gameOver = false;
  scoreDisplay();
  computerResult.textContent = "";
  matchResult.textContent = "";
  playBtn.textContent = "Play";
}

const hand = "";

function matchPlayed(hand) {
  if (gameOver) return;
  playBtn.textContent = "Play";
  getComputerChoice();

  if (hand === "rock" && computerResponse === "Paper") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
    matchCountComputer += 1;
  } else if (hand === "paper" && computerResponse === "Scissors") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
    matchCountComputer += 1;
  } else if (hand === "scissors" && computerResponse === "Rock") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
    matchCountComputer += 1;
  } else if (hand === "paper" && computerResponse === "Rock") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
    matchCountHuman += 1;
  } else if (hand === "scissors" && computerResponse === "Paper") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
    matchCountHuman += 1;
  } else if (hand === "rock" && computerResponse === "Scissors") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
    matchCountHuman += 1;
  } else if (hand === "rock" && computerResponse === "Rock") {
    computerResult.textContent = `It's A ${computerResponse} Tie`;
  } else if (hand === "paper" && computerResponse === "Paper") {
    computerResult.textContent = `It's A ${computerResponse} Tie`;
  } else if (hand === "scissors" && computerResponse === "Scissors") {
    computerResult.textContent = `It's A ${computerResponse} Tie`;
  } else {
  }
  matchResult.textContent = `${computerResponse}`;
  scoreDisplay();
  matchCounting();
}
playBtn.addEventListener("click", replay);

rockBtn.addEventListener("click", () => matchPlayed("rock"));
paperBtn.addEventListener("click", () => matchPlayed("paper"));
scissorsBtn.addEventListener("click", () => matchPlayed("scissors"));

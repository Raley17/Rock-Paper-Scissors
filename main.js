const computerResult = document.querySelector("h1");
const matchResult = document.querySelector("p");
const humanHand = document.querySelector("input");
const playBtn = document.querySelector("button");
let scoreCount = document.getElementById("score");

let computerResponse = "";
let matchCountComputer = 0;
let matchCountHuman = 0;

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
    matchCountComputer = 0;
    matchCountHuman = 0;
  } else if (matchCountHuman === 5) {
    computerResult.textContent = "You Won The Match Series";
    playBtn.textContent = "Replay";
    matchCountComputer = 0;
    matchCountHuman = 0;
  } else {
  }
}

function matchPlayed() {
  getComputerChoice();
  if (humanHand.value === "Rock" && computerResponse === "Paper") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
    matchCountComputer += 1;
  } else if (humanHand.value === "Paper" && computerResponse === "Scissors") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
    matchCountComputer += 1;
  } else if (humanHand.value === "Scissors" && computerResponse === "Rock") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
    matchCountComputer += 1;
  } else if (humanHand.value === "Paper" && computerResponse === "Rock") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
    matchCountHuman += 1;
  } else if (humanHand.value === "Scissors" && computerResponse === "Paper") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
    matchCountHuman += 1;
  } else if (humanHand.value === "Rock" && computerResponse === "Scissors") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
    matchCountHuman += 1;
  } else if (humanHand.value === "Rock" && computerResponse === "Rock") {
    computerResult.textContent = `It's A ${computerResponse} Tie`;
  } else if (humanHand.value === "Paper" && computerResponse === "Paper") {
    computerResult.textContent = `It's A ${computerResponse} Tie`;
  } else if (
    humanHand.value === "Scissors" &&
    computerResponse === "Scissors"
  ) {
    computerResult.textContent = `It's A ${computerResponse} Tie`;
  } else {
  }
  matchResult.textContent = `${computerResponse}`;
  scoreDisplay();
  matchCounting();
}

playBtn.addEventListener("click", matchPlayed);

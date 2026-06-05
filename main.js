const computerResult = document.querySelector("h1");
const matchResult = document.querySelector("p");
const humanHand = document.querySelector("input");
const playBtn = document.querySelector("button");

let computerResponse = "";

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

function matchPlayed() {
  getComputerChoice();
  if (humanHand.value === "Rock" && computerResponse === "Paper") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
  } else if (humanHand.value === "Paper" && computerResponse === "Scissors") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
  } else if (humanHand.value === "Scissors" && computerResponse === "Rock") {
    computerResult.textContent = `You Lose Against ${computerResponse}`;
  } else if (humanHand.value === "Paper" && computerResponse === "Rock") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
  } else if (humanHand.value === "Scissors" && computerResponse === "Paper") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
  } else if (humanHand.value === "Rock" && computerResponse === "Scissors") {
    computerResult.textContent = `You Win Against ${computerResponse}`;
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
}

playBtn.addEventListener("click", matchPlayed);

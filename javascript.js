// get DOM elements:

const paperButtonElement = document.querySelector(".js-paper-button");
const scissorsButtonElement = document.querySelector(".js-scissors-button");
const rockButtonElement = document.querySelector(".js-rock-button");
const resultElement = document.querySelector(".js-result");
const roundElement = document.querySelector(".js-round");
const roundDescriptionElement = document.querySelector(".js-round-title");
const gameButtonElements = document.querySelector(".player-move-buttons");
const selectMoveElement = document.querySelector(".js-select-move");
const titleElement = document.querySelector(".js-title");
const gameOverExistingElement = document.querySelector(".js-game-over-element");
const roundCounterSpanElement = document.querySelector(".js-round-counter");
const playerScoreElement = document.querySelector(".js-player-scores");
const roundVictorElement = document.querySelector(".js-round-victor");
const computerMoveElement = document.querySelector(".js-computer-move-element");
const humanMoveElement = document.querySelector(".js-human-move-element");
const initialHumanIcon = document.querySelector(".js-initial-human-icon");
const initialComputerIcon = document.querySelector(".js-initial-com-icon");

const gameOverElement = document.createElement("div");
const gameOverContent = document.createElement("h2");

const gameOverMessageElement = document.createElement("p");

gameOverContent.textContent = "Game Over!";
const restartGameButton = document.createElement("button");
restartGameButton.textContent = "Restart";
restartGameButton.classList.add("js-restart-button");

gameOverElement.appendChild(gameOverContent);
gameOverElement.appendChild(gameOverMessageElement);
gameOverElement.appendChild(restartGameButton);

restartGameButton.addEventListener("click", restartButtonClick);

paperButtonElement.addEventListener("click", () => getHumanChoice("paper"));
scissorsButtonElement.addEventListener("click", () =>
  getHumanChoice("scissors")
);
rockButtonElement.addEventListener("click", () => getHumanChoice("rock"));

let humanScore = 0;
let computerScore = 0;
let round = 0;
let roundStatus = "";

function getComputerChoice() {
  randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber <= 0.66 && randomNumber > 0.33) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(choice) {
  console.log(`${choice}`);
  playerAction(choice);
  return choice;
}

function playRound(humanChoice, computerChoice) {
  const roundData = {};

  if (humanChoice === "rock" && computerChoice === "rock") {
    roundStatus = "Draw";
    return `You played Rock & the computer played Rock`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    roundStatus = "Win";
    return `You played Rock & the computer played Scissors`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    roundStatus = "Loss";
    return `You played Rock & the computer played Paper`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundStatus = "Win";
    return `You played Paper & the computer played Rock`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    roundStatus = "Loss";
    return `You played Paper & the computer played Scissors`;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    roundStatus = "Draw";
    return `You played Paper & the computer played Paper`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    roundStatus = "Draw";
    return `You played Scissors & the computer played Rock`;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    roundStatus = "Draw";
    return `You played Scissors & the computer played Scissors`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundStatus = "Win";
    return `You played Scissors && the computer played Paper`;
  } else {
    return "Something weird happened";
  }
}

function checkWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return `Human wins with a score of ${humanScore} vs ${computerScore}!`;
  } else if (computerScore > humanScore) {
    return `Computer wins with a score of ${computerScore} vs ${humanScore}!`;
  } else {
    return `It's a DRAW O.o`;
  }
}

function roundCounter(humanScore, computerScore) {
  console.log(round);
  if (round < 5) {
  } else {
    console.log(checkWinner(humanScore, computerScore));
    gameButtonElements.remove();
    selectMoveElement.remove();
    gameOverExistingElement.appendChild(gameOverElement);
    gameOverMessageElement.textContent = checkWinner(humanScore, computerScore);
  }
}

function playerAction(humanChoice) {
  const computerChoice = getComputerChoice();

  initialHumanIcon.textContent = "- 🧑";
  initialComputerIcon.textContent = "🤖 -";

  console.log(`${computerChoice} and ${humanChoice}`);
  const result = playRound(humanChoice, computerChoice);

  if (roundStatus === "Win") {
    roundVictorElement.textContent = "🧑 WINS!";
  } else if (roundStatus === "Draw") {
    roundVictorElement.textContent = "It's A DRAW!";
  } else {
    roundVictorElement.textContent = "🤖 WINS!";
  }

  if (computerChoice === "rock") {
    computerMoveElement.textContent = "🪨";
  } else if (computerChoice === "paper") {
    computerMoveElement.textContent = "📄";
  } else {
    computerMoveElement.textContent = "✂️";
  }

  if (humanChoice === "rock") {
    humanMoveElement.textContent = "🪨";
  } else if (humanChoice === "paper") {
    humanMoveElement.textContent = "📄";
  } else {
    humanMoveElement.textContent = "✂️";
  }

  console.log(`Human Score: ${humanScore} - Computer Score ${computerScore}`);
  playerScoreElement.textContent = `🤖 ${computerScore} 🧑 ${humanScore}`;

  // Create a new div element for each result
  roundDescriptionElement.textContent = `Round ${round + 1}`;
  resultElement.textContent = result;

  // Update the round counter
  round++;
  roundCounterSpanElement.textContent = round;
  roundCounter(humanScore, computerScore);
}

function restartButtonClick() {
  console.log("restart button clicked");
  location.reload();
}

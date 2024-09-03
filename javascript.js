let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let humanChoice = prompt("What is your choice?").toLowerCase();
  console.log(`Human Choice = ${humanChoice}`);
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    return `CASE 1: You played Rock & the computer played Rock | It's a DRAW!`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return `CASE 2: You played Rock & the computer played Scissors | You WIN!`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return `CASE 3: You played Rock & the computer played Paper | You LOSE!`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return `CASE 4: You played Paper & the computer played Rock | You WIN!`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return `CASE 5: You played Paper & the computer played Scissors | You LOSE!`;
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    return `CASE 6: You played Paper & the computer played Paper | It's a DRAW`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return `CASE 7: You played Scissors & the computer played Rock | You LOSE`;
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    return `CASE 8: you played Scissors & the computer played Scissors | It's a DRAW`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return `CASE 9: You played Scissors && the computer played Paper | You WIN!`;
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

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(
      `Current score - Human: ${humanScore}, Computer: ${computerScore}\n`
    );
  }
  console.log(checkWinner(humanScore, computerScore));
}

playGame();

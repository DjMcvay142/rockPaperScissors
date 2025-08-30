function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else if (choice === 3) {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose your move!/Rock/Paper/Scissors/");
  return choice;
}

let computerScore = 0;
let humanScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log(
      `You won the game! Final score: You ${humanScore} - ${computerScore} Computer`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer won the game! Final score: Computer ${computerScore} - ${humanScore} You`
    );
  } else {
    console.log(
      `It's a tie game! Final score: ${humanScore} - ${computerScore}`
    );
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie!");
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Scissors") {
      console.log("You Win! Rock beats Scissors");
      humanScore++;
    } else {
      console.log("You lose! Paper beats Rock");
      computerScore++;
    }
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log("You win! Paper beats Rock");
      humanScore++;
    } else {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    }
  } else if (humanChoice === "Scissors") {
    if (computerChoice === "Paper") {
      console.log("You win! Scissors beat Paper");
      humanScore++;
    } else {
      console.log("You lose! Rock beats Scissors");
      computerScore++;
    }
  }
}

playGame();

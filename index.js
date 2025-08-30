function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    console.log("Rock");
  } else if (choice === 2) {
    console.log("Paper");
  } else if (choice === 3) {
    console.log("Scissors");
  }
}

function getHumanChoice() {
  let choice = prompt("Choose your move! /1 = Rock /2 = Paper /3 = Scissors");
  if (choice === "1") {
    console.log("Rock");
  } else if (choice === "2") {
    console.log("Paper");
  } else if (choice === "3") {
    console.log("Scissors");
  }
}

let computer = 0;
let humanScore = 0;

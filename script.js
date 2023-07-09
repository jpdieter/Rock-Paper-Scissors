// Variables //
//let playerScore = 0;
//let computerScore = 0;
let score = 0

// computer choice //
function computerChoice(){
    let computerArray = ['rock', 'paper', 'scissors'];
    return randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
  }

// game function that loops 5 times while tracking score. if selection is invalid, it loops until a valid selection is entered. //   
function game() {
    selectionLoop:
    for(let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Enter rock, paper or scissors.").toLowerCase();
        if((playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") || (playerSelection == "")) {
            i--;
            alert("Invalid choice!")
            continue selectionLoop;      
        }
        const computerSelection = computerChoice();
        console.log("The computer chose: " + computerSelection);
        console.log("You chose: " + playerSelection);
        playRound(playerSelection, computerSelection);
    }
}
// playRound function 
function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock") {
        if(computerSelection == "rock") {
            console.log("You tied this round!");
        }
        else if(computerSelection == "paper") {
            console.log("You lost this round!");
        }
        else {
            console.log("You won this round!")
            score++;
            }
        }
        else if(playerSelection == "paper") {
            if(computerSelection == "paper") {
                console.log("You tied this round!");
            }
            else if(computerSelection == "scissors") {
                console.log("You lost this round!");
            }
            else {
                console.log("You won this round!")
                score++;
        }
        }
        else {
            if(computerSelection == "scissors") {
                console.log("You tied this round!");
            }
            else if(computerSelection == "rock") {
                console.log("You lost this round!");
            }
            else {
                console.log("You Won this round!")
                score++;
            }
        }
    }

// console.log to print results to console
game();
console.log("Your score is " + score + "/5");

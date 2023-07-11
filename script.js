   
    // Variables //
let playerScore = 0;
let computerScore = 0;

// computer choice //
function computerChoice(){
    let computerArray = ['rock', 'paper', 'scissors'];
    return randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
  }

  function checkForWin(){
    if(computerScore == 5){
        alert("You lost the game!");
        var lose = "";
        document.getElementById("results").innerHTML = lose;
        resetGame();
    }
    if(playerScore == 5){
        alert("You won the game!");
        var win = "";
        document.getElementById("results").innerHTML = win;
        resetGame();
    }
  }

  function resetGame(){
    computerScore = 0;
    playerScore = 0;
    var compRunningScore = "";
    document.getElementById("computerscore").innerHTML = compRunningScore;
    var playerRunningScore = "";
    document.getElementById("playerscore").innerHTML = playerRunningScore;
    var computer = ("");
    document.getElementById("computerchoice").innerHTML = computer;
    var user = ("");
    document.getElementById("playerchoice").innerHTML = user;
  }

// game function that loops 5 times while tracking score. if selection is invalid, it loops until a valid selection is entered. //   
function game() {
  //  selectionLoop:
 // for(let i = 0; i < 5; i++) {
    //    const playerSelection = window.prompt("Enter rock, paper or scissors.").toLowerCase();
      //  if((playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") || (playerSelection == "")) {
        //    i--;
          //  alert("Invalid choice!")
          //  continue selectionLoop;   
          let button = document.querySelectorAll('.choices');
          button.forEach((btn) => {
              btn.addEventListener("click", playRound); 
          //const choices = document.querySelectorAll('.btn');
         // choices.forEach((choices => choices.addEventListener('click', playRound)       playerSelection.addEventListener('click', playRound) 
         // const playerSelection = choices.id
        })
    }
// playRound function 
function playRound(player) {
    playerSelection = player.srcElement.id;
    computerSelection = computerChoice();
    var computer = ("The computer chose: " + computerSelection);
    document.getElementById("computerchoice").innerHTML = computer;
    var user = ("You chose: " + playerSelection);
    document.getElementById("playerchoice").innerHTML = user;
   // console.log("You chose: " + playerSelection);
    if(playerSelection == "rock") {
        if(computerSelection == "rock") {
            tieRound();
        }
        else if(computerSelection == "paper") {
            loseRound();
        }
        else {
            winRound();
            }
        }
        else if(playerSelection == "paper") {
            if(computerSelection == "paper") {
                tieRound();
            }
            else if(computerSelection == "scissors") {
                loseRound();
            }
            else {
                winRound();
        }
        }
        else {
            if(computerSelection == "scissors") {
                tieRound();
            }
            else if(computerSelection == "rock") {
                loseRound();
            }
            else {
                winRound();
            }
        }
    }

function tieRound(){
    var tie = 'You tied this round!';
    document.getElementById("results").innerHTML = tie;
}

function loseRound(){
    var lose = 'You lost this round!';
    document.getElementById("results").innerHTML = lose;
    computerScore++
    var compRunningScore = "The computers score is " + computerScore ;
    document.getElementById("computerscore").innerHTML = compRunningScore;
    checkForWin();
}

function winRound(){
    var win = 'You won this round!';
    document.getElementById("results").innerHTML = win;
    playerScore++;
    var playerRunningScore = "Your score is " + playerScore ;
    document.getElementById("playerscore").innerHTML = playerRunningScore;
    checkForWin();
}

// console.log to print score to console
game();

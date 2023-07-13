   
// Variables //
let playerScore = 0;
let computerScore = 0;

// computer choice //
function computerChoice(){
    let computerArray = ['rock', 'paper', 'scissors'];
    return randomChoice = computerArray[Math.floor(Math.random() * computerArray.length)];
  }

//check for game winner
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

//resets game after game over
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

// game function that transmits user button choice to playRound function
function game() {
    let button = document.querySelectorAll('.choices');
    button.forEach((btn) => {
    btn.addEventListener("click", playRound); 
        })
    }
// playRound function that performs one round of play
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

//returns tied round 
function tieRound(){
    var tie = 'You tied this round!';
    document.getElementById("results").innerHTML = tie;
}

//returns loses round
function loseRound(){
    var lose = 'You lost this round!';
    document.getElementById("results").innerHTML = lose;
    computerScore++
    var compRunningScore = "The computers score is " + computerScore ;
    document.getElementById("computerscore").innerHTML = compRunningScore;
    checkForWin();
}

//returns wins round
function winRound(){
    var win = 'You won this round!';
    document.getElementById("results").innerHTML = win;
    playerScore++;
    var playerRunningScore = "Your score is " + playerScore ;
    document.getElementById("playerscore").innerHTML = playerRunningScore;
    checkForWin();
}

// calls function to start the game
game();

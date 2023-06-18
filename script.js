
const computerSelection = getComputerChoice();
const playerPrompt = prompt("Please enter rock, paper or scissors");
let playerSelection = playerPrompt.toLowerCase()

function getComputerChoice(){
    const randomArray = ['rock', 'paper', 'scissors'];
    const randomChoice = randomArray[Math.floor(Math.random() * randomArray.length)];
    return randomChoice;
   
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `It's a tie! you both picked ${playerSelection}`;}
            else if (playerSelection === "rock" && computerSelection === "scissors"){
                return "You Win! rock beats scissors!";}      
            else if (playerSelection === "paper" && computerSelection === "rock"){
                return "You Win! paper beats rock!";}
            else if (playerSelection === "scissors" && computerSelection === "paper"){
                return "You win! scissors beats paper!";}    
            else {
                return `You lose! ${computerSelection} beats ${playerSelection}!`; }          

}
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection))


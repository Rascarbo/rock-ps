//function randomly generate number between 1 and 3
//function return rock, paper or scissors
function getComputerChoice(){
    switch (Math.floor(Math.random()*3+1)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

//Ask the player rock, paper or scissors
//Get player input
function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper or Scissors?");
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

//Initialize human and computer scores
//into two variables
let humanScore = 0;
let computerScore = 0;

//Start by getting human and computer choice
//Compare the two answers
//Output results
//Add points to the winner
function playRound(humanChoice, computerChoice){

}


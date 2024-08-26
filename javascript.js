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

//function to get the player choice
//Ask the player rock, paper or scissors
//Get player input
function getHumanChoice(){
    return prompt("Rock, Paper or Scissors?")
}

//Initialize human and computer scores
//into two variables
let humanScore = 0;
let computerScore = 0;

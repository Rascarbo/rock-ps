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
    return humanChoice;
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
    if (humanChoice == computerChoice){
            console.log("Draw!");
    } else if(humanChoice === "Rock" || computerChoice === "Rock" && humanChoice === "Paper" || computerChoice === "Paper"){
        switch ("Paper"){
            case humanChoice:
                console.log("You win, Paper beats Rock!");
                humanScore++;
                break;
            case computerChoice:
                console.log("You lose, Paper beats Rock!")
                computerScore++;
                break;
        }
    } else if(humanChoice === "Rock" || computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Scissors"){
        switch ("Rock"){
            case humanChoice:
                console.log("You win, Rock beats Scissors!");
                humanScore++;
                break;
            case computerChoice:
                console.log("You lose, Rock beats Scissors!");
                computerScore++;
                break;
        }
    } else if (humanChoice === "Paper" || computerChoice === "Paper" && humanScore === "Scissors" || computerChoice === "Scissors"){
        switch ("Scissors"){
            case humanChoice:
                console.log("You win, Scissors beats Paper!");
                humanScore++;
                break;
            case computerChoice:
                console.log("You lose, Scissors beats Paper!");
                computerScore++;
                break;
        }
    } else{
        console.log("Wrong input, try again!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(humanSelection);

playRound(humanSelection, computerSelection);
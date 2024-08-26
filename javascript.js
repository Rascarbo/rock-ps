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
console.log(getComputerChoice())
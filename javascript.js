//function randomly generate number between 1 and 3
//function return rock, paper or scissors
function getComputerChoice(){
    return Math.floor(Math.random()*3+1)
}
console.log(getComputerChoice())
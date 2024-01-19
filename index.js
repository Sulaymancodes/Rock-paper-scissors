//function to get the choice of the computer
function getComputerChoice(){
    // creating a container for the rock,paper,scissors elements
    let elements = ['rock','paper','scissors']

    //container for returning random element
    let randomElement = elements[Math.floor(Math.random() * 3)]
    return randomElement

}

//function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper'){
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'){
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return " It's a tie"
    }
    else{
        return "You loose"
    }
}
//getting user input
const playerSelection = prompt("Choose Your Weapon between Rock, Paper, Scissors:")

//getting computers input
const computerSelection = getComputerChoice()

//printing the output of the game to the console
console.log(playRound(playerSelection,computerSelection))
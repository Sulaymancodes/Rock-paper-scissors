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
    //making user and computer input case insensitive
    let playerSelect = playerSelection.toLowerCase()
    let computerSelect = computerSelection.toLowerCase()

    //logic for the game
    if(playerSelect === 'rock' && computerSelect === 'scissors'){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelect === 'scissors' && computerSelect === 'paper'){
        return "You Win! Scissors beats Paper"
    }
    else if(playerSelect === 'paper' && computerSelect === 'rock'){
        return "You Win! Paper beats Rock"
    }
    else if (playerSelect === computerSelect){
        return " It's a tie"
    }
    else{
        return "You loose"
    }
}

//function to run the game
function game(){
    //getting user input
    const playerSelection = prompt("Choose Your Weapon between Rock, Paper, Scissors:")

    //getting computers input
    const computerSelection = getComputerChoice()

    //printing the output of the game to the console
    return console.log(playRound(playerSelection,computerSelection))
}

game()
game()
game()
game()
game()

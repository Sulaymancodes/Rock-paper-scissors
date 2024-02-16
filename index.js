const rock = document.querySelector('.game-container_box_1');
const paper = document.querySelector('.game-container_box_2');
const scissors = document.querySelector('.game-container_box_3');

let playerInput = document.querySelector('.player_input');
let computerInput = document.querySelector('.computer_input');

let subHeading = document.querySelector('.subheading_text');
let secondSubheading = document.querySelector('.subheading_text_2');

let playerScore = document.querySelector('.player_text');
let computerScore = document.querySelector('.computer_text');
let pScore = 0;
let cScore = 0;

let body = document.querySelector('body');

const restart = document.querySelector('.restart_btn');

restart.addEventListener('click', () =>{
    body.style.backgroundColor = 'rgb(182, 145, 86)';
    rock.style.backgroundColor = 'rgb(210, 176, 123)';
    paper.style.backgroundColor = 'rgb(210, 176, 123)';
    scissors.style.backgroundColor = 'rgb(210, 176, 123)';

    pScore = 0;
    cScore = 0;
    subHeading.textContent = 'Choose Your Element🗡️';
    secondSubheading.textContent = 'First to Score 5 points Wins the game';
    playerInput.textContent = '❔';
    computerInput.textContent = '❔';
    playerScore.textContent = `Player:${pScore}`;
    computerScore.textContent = `Computer:${pScore}`;
});

rock.addEventListener('click', () =>{
    let playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection)
});

paper.addEventListener('click', () =>{
    let playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection)
});

scissors.addEventListener('click', () =>{
    let playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection)
});

//function to get the choice of the computer
function getComputerChoice(){
    let elements = ['rock','paper','scissors']

    let randomElement = elements[Math.floor(Math.random() * 3)]
    return randomElement

}

function updatePlayerScore(){
    pScore++;
    playerScore.textContent = `Player: ${pScore}`;
}

function updateComputerScore(){
    cScore++;
    computerScore.textContent = `Computer: ${cScore}`;
}


//function to play a single round of rock paper scissors
function playRound(playerSelection, computerSelection){
    if (pScore+cScore < 5){
        //logic for the game
        if(playerSelection === 'rock' && computerSelection === 'scissors'){
            playerInput.textContent = '🪨';
            computerInput.textContent = '✂️';
            subHeading.textContent = 'You Win!';
            secondSubheading.textContent = 'Rock beats Scissors';
            updatePlayerScore();
        }
        else if(playerSelection === 'scissors' && computerSelection === 'paper'){
            playerInput.textContent = '✂️';
            computerInput.textContent = '📰';
            subHeading.textContent = 'You Win!';
            secondSubheading.textContent = 'Scissors beats Paper';
            updatePlayerScore();
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock'){
            playerInput.textContent = '📰';
            computerInput.textContent = '🪨';
            subHeading.textContent = 'You Win!';
            secondSubheading.textContent = 'Paper beats Rock';
            updatePlayerScore();
        }
        else  if(computerSelection === 'rock' && playerSelection === 'scissors'){
            playerInput.textContent = '✂️';
            computerInput.textContent = '🪨';
            subHeading.textContent = 'You Loose';
            secondSubheading.textContent = 'Rock beats Scissors';
            updateComputerScore();
        }
        else if(computerSelection === 'scissors' && playerSelection === 'paper'){
            playerInput.textContent = '📰';
            computerInput.textContent = '✂️';
            subHeading.textContent = 'You Loose';
            secondSubheading.textContent = 'Scissors beats Paper';
            updateComputerScore();
        }
        else if(computerSelection === 'paper' && playerSelection === 'rock'){
            playerInput.textContent = '🪨';
            computerInput.textContent = '📰';
            subHeading.textContent = 'You Loose';
            secondSubheading.textContent = 'Paper beats Rock';
            updateComputerScore();
        }
        else if (playerSelection === computerSelection){
            playerInput.textContent = 'tie';
            computerInput.textContent = 'tie';
            subHeading.textContent = 'Its a tie';
            secondSubheading.textContent = 'You Choose the same element';
        }
    }
    else{
        subHeading.textContent = 'Click on Restart';
        secondSubheading.textContent = 'Its a game of 5';
    }
    
    gameScore()
}

//Calculate Total Game Score
function gameScore(){
    if((pScore+cScore === 5) && (pScore > cScore)){
     body.style.backgroundColor = 'rgb(101, 235, 119)';
     rock.style.backgroundColor = 'rgb(141, 252, 156)';
     paper.style.backgroundColor = 'rgb(141, 252, 156)';
     scissors.style.backgroundColor = 'rgb(141, 252, 156)';
     subHeading.textContent = 'You Win!';
     secondSubheading.textContent = 'Good game👍 Click on Restart to play again'; 
    }
    else if((pScore+cScore === 5) && (pScore < cScore)){
     body.style.backgroundColor = 'rgb(251, 114, 98)';
     rock.style.backgroundColor = 'rgb(255, 91, 73)';
     paper.style.backgroundColor = 'rgb(255, 91, 73)';
     scissors.style.backgroundColor = 'rgb(255, 91, 73)';
     subHeading.textContent = 'You Loose';
     secondSubheading.textContent = 'Better Luck Next Time. Click on Restart to play again';
    }
 }
 





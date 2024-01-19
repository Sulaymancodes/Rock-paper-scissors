//function to get the choice of the computer
function getComputerChoice(){
    // creating a container for the rock,paper,scissors elements
    let elements = ['rock','paper','scissors']

    //container for returning random element
    let randomElement = elements[Math.floor(Math.random() * 3)]
    return (console.log(randomElement))

}

getComputerChoice()
let options = ['rock', 'paper', 'scissors'];
let score = [0, 0, 0];
let number;
let playerOptionCheck = false;
let buttons = document.querySelectorAll('.option')

function getComputerChoice() {
    number = Math.floor(Math.random()*3);
    computerSelection = options[number];
    return computerSelection;

}

// function getPlayerChoice() {
//     playerSelection = prompt("Choose! Rock, Paper or Scissors?").toLowerCase();

//     while (!playerOptionCheck) {
//         if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper') { playerSelection = prompt("Incorrect input! Please choose Rock, Paper or Scissors!").toLowerCase()}
//         else {
//             playerOptionCheck = true;
//         }
        
//     }

//     playerOptionCheck = false;
//     return playerSelection;

// }

function getPlayerChoice() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
        });
    });
    return playerSelection = 'rock';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            score[2] += 1;
            return console.log("It's a tie!")
        }
        else if (computerSelection === 'paper') {
            score[1] += 1;
            return console.log("Computer wins!")
        }
        else {
            score[0] += 1;
            return console.log("Player wins!")
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            score[1] += 1;
            return console.log("Computer wins!")
        }
        else if (computerSelection === 'paper') {
            score[0] += 1;
            return console.log("Player wins!")
        }
        else {
            score[2] += 1;
            return console.log("It's a tie!")
        }
    }
    else {
        if (computerSelection === 'rock') {
            score[0] += 1;
            return console.log("Player wins!")
        }
        else if (computerSelection === 'paper') {
            score[2] += 1;
            return console.log("It's a tie!")
        }
        else {
            score[1] += 1;
            return console.log("Computer wins!")
        }
    }

}

function game() {

    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    playRound(playerChoice, computerChoice);
    console.log(`Player ${score[0]}, Computer ${score[1]}, Ties ${score[2]}. `);
    

    if (score[0] > score[1]) {
        console.log("The Player Wins!!");
    }
    else if (score[0] < score[1]) {
        console.log("The Computer Wins!!");
    }
    else {
        console.log("It's a tie game!");
    }
    
}


console.log(game());



let options = ['rock', 'paper', 'scissors'];
let score = [0, 0, 0];
let number;
let buttons = document.querySelectorAll('.btn');
let scoreDiv = document.querySelector('#scoreDiv');

function getComputerChoice() {
    number = Math.floor(Math.random()*3);
    computerSelection = options[number];
    return computerSelection;

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

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        let playerChoice = String(button.id);
        playRound(computerChoice, playerChoice);
        scoreDiv.textContent = `Player:${score[0]}, Computer: ${score[1]}, Draws: ${score[2]}`
    });
});

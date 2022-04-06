function computerPlay() { // computer's move
    let randomNumber = Math.floor(Math.random()*3); // random 0-2

    switch (randomNumber) { // assign move
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase(); // case INsensitivity

    switch (playerLowerCase) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    return "It's a tie!";
                case 'paper':
                    return "You Lose! Paper beats Rock.";
                case 'scissors':
                    return "You Win! Rock beats Scissors.";
            }

        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    return "You Win! Paper beats Rock."
                case 'paper':
                    return "It's a tie!";
                case 'scissors':
                    return "You Lose! Scissors beats Paper.";
            }

        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    return "You Lose! Rock beats Scissors.";
                case 'paper':
                    return "You Win! Scissors beats Paper.";
                case 'scissors':
                    return "It's a tie!";
            }
    }
}

function game(event) {
    let userMove = event.target.id;
    let computerMove = predictMove;
    
    let result = playRound(userMove, computerMove);

    if (result === "It's a tie!") { // tie
        outcome.textContent = "Oops, a tie!";
        explanation.textContent = "No score given...";
    } else if (result.substring(4,7) === "Win") { // user won
        userScore++;
        outcome.textContent = result.substring(0,8);
        explanation.textContent = result.substring(9);
    } else { // user lost
        computerScore++;
        outcome.textContent = result.substring(0,9);
        explanation.textContent = result.substring(10);
    }

    // change html displays
    score.textContent = `Score: ${userScore}/5`;
    health.textContent = `Health: ${1-computerScore}/1`;

    if (userScore>=5) {
        outcome.textContent = "Congratulations You Won!";
        explanation.textContent = "Press reset for a new one...";
        buttons.forEach((button) => button.removeEventListener('click', game));
    } else if (computerScore>=1) {
        outcome.textContent = "You lost?";
        explanation.textContent = "This is awkward...";
        buttons.forEach((button) => button.removeEventListener('click', game));
    }

    predictMove = computerPlay();
    predict.textContent = `Computer will play: ${predictMove}`;
}

function newGame() {
    userScore = 0;
    computerScore = 0;
    predictMove = computerPlay();
    
    predict.textContent = `Computer will play: ${predictMove}`;
    score.textContent = "Score: 0/5";
    health.textContent = "Health: 1/1";
    outcome.textContent = "Jan, Ken, Pon!";
    explanation.textContent = "Choose your move!";
    buttons.forEach((button) => button.addEventListener('click', game));
}

let userScore = 0;
let computerScore = 0;
let predictMove = computerPlay();

const predict = document.querySelector("#predict");
const buttons = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const health = document.querySelector("#health");
const outcome = document.querySelector("#outcome");
const explanation = document.querySelector("#explanation");
const reset = document.querySelector("#reset");

predict.textContent = `Computer will play: ${predictMove}`;
score.textContent = "Score: 0/5";
health.textContent = "Health: 1/1";
outcome.textContent = "Jan, Ken, Pon!";
explanation.textContent = "Choose your move!";

buttons.forEach((button) => button.addEventListener('click', game));
reset.addEventListener('click', newGame);
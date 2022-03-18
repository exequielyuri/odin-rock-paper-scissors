/*
== pseudocode ==

Get 2 inputs
    - from user
    - from computer
        - generate random number 0 - 2
            - 0: rock
            - 1: paper
            - 2: scissors 

Compare who wins
    - rock > scissors
    - paper > rock
    - scissors > paper

Output: declare who wins
*/

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

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) { // play 5 rounds
        let userMove = prompt("Enter your move: "); // get user move
        let computerMove = computerPlay();

        let result = playRound(userMove, computerMove);

        if (result === "It's a tie!") { // if they tie,
            alert(result);
            continue; // no one scores
        } else {
            (result.substring(4,7) === "Win") ? // if user won,
                userScore++ : // increase user's score
                computerScore++; // else, increase computer's score
        }

        alert(result);
        console.log("=== Scores ===");
        console.log(`User: ${userScore}\nComputer: ${computerScore}`);
    }
}

game();
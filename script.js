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

game: function game() {
    let userScore = 0;
    let computerScore = 0;
    let predictMove = computerPlay();

    const predict = document.querySelector("#predict");
    predict.textContent = `Computer will play: ${predictMove}`;

    const buttons = document.querySelectorAll("button");
    const score = document.querySelector("#score");
    const health = document.querySelector("#health");
    const outcome = document.querySelector("#outcome");
    const explanation = document.querySelector("#explanation");
    

    outcome.textContent = "Jan, Ken, Pon!";
    explanation.textContent = "Choose your move!";


    buttons.forEach((button) => button.addEventListener('click', () => {
        let userMove = button.id;
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
        health.textContent = `Health: ${5-computerScore}/5`;

        if (userScore>=5) {
            outcome.textContent = "Congratulations You Won!";
            explanation.textContent = "Press reset for a new one...";
            return game; // end game
        } else if (computerScore>=5) {
            outcome.textContent = "Oh, better luck next time...";
            explanation.textContent = "Press reset for a new one...";
            return game;
        }

        predictMove = computerPlay();
        predict.textContent = `Computer will play: ${predictMove}`;
    }));
}

game();
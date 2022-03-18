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
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}
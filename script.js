function getComputerChoice(){
    let random = Math.floor(Math.random()*10);
    let output;
    if (random <= 4) {
        output = "Rock";
    } else if (random >= 7) {
        output = "Paper";
    } else {
        output = "Scissors";
    }
    return output  
}

function playRound(playerSelection,computerSelection){
    playerSelection = prompt("Rock-Paper-Scissors").toLowerCase();
    computerSelection = getComputerChoice();
    if(playerSelection === "rock" & computerSelection === "Scissors") {
        console.log("You Win! Rock Beats Scissors");
    } else if (playerSelection === "paper" & computerSelection === "Rock") {
        console.log("You Win! Paper Beats Rock");
    } else if (playerSelection === "scissors" & computerSelection === "Paper") {
        console.log("You Win! Scissors Beats Paper");
    } else if (playerSelection === "paper" & computerSelection === "Scissors") {
        console.log("You Lose! Scissors Beats Paper");
    } else if (playerSelection === "scissors" & computerSelection === "Rock") {
        console.log("You Win! Rock Beats Scissors");
    } else if (playerSelection === "rock" & computerSelection === "Paper") {
        console.log("You Win! Paper Beats Rock");
    } else if (playerSelection === computerSelection.toLowerCase()) {
        console.log("Tie!");
    } else {
        console.log("You have entered the wrong input");
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}

game()
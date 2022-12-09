let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getComputerChoice(){
    let ComputerChoice = getRandomInt(3);
    switch(ComputerChoice) {
        case 0 :
            return "Rock";
            case 1 :
                return "Paper";
            case 2 :
                return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    switch(playerSelection) {
        case "Rock" :
            if (computerSelection === "Rock") {
                document.getElementById("result").innerHTML = "Draw! Try Again"
            } else if (computerSelection === "Paper") {
                document.getElementById("result").innerHTML = "You Lose! Paper beats Rock"
                computerScore++;
            } else if (computerSelection === "Scissor") {
                document.getElementById("result").innerHTML = "You Win! Rock beats Scissor" 
                playerScore++;
            }
            break;
            case "Paper" :
                if (computerSelection === "Rock") {
                    document.getElementById("result").innerHTML = "You Win! Paper beats Rock"
                } else if (computerSelection === "Paper") {
                    document.getElementById("result").innerHTML = "Draw! Try Again"
                    playerScore++;
                } else if (computerSelection === "Scissor") {
                    document.getElementById("result").innerHTML = "You Lose! Scissor beats Paper" 
                    computerScore++;
                }
                break;
                case "Scissors" :
                    if (computerSelection === "Rock") {
                        document.getElementById("result").innerHTML = "You Lose! Rock beats Scissors"
                        computerScore++;
                    } else if (computerSelection === "Paper") {
                        document.getElementById("result").innerHTML = "You Win! Scissor beats Paper"
                        playerScore++;
                    } else if (computerSelection === "Scissor") {
                        document.getElementById("result").innerHTML = "Draw! Try Again" 
                    } 
                    break;

    }
    document.getElementById("playerScore").innerHTML = `Player : ${playerScore}`;
    document.getElementById("computerScore").innerHTML = `Computer : ${computerScore}`;

        if (playerScore === 5) {
            document.getElementById("endresult").innerHTML = `You Won! by ${playerScore} to ${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            document.getElementById("endresult").innerHTML = `You Lost! by ${playerScore} to ${computerScore}`;
            playerScore = 0;
            computerScore = 0;
        }
    }
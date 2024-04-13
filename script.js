function getComputerChoice() {
    let rand = Math.random();
    if(rand<=0.33) return "rock";
    else if(rand<=0.66) return "paper";
    else return "scissor";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection)
        return "It's a Tie! Both chode "+playerSelection+".";
    else if( (playerSelection=="rock" && computerSelection=="scissor") || (playerSelection=="paper" && computerSelection=="rock") || (playerSelection=="scissor" && computerSelection=="paper") )
        return "You Won! "+playerSelection + " beats " + computerSelection + ".";
    else
        return "You Lose! "+ computerSelection + " beats " + playerSelection;
}

function playGame() {
    let playerScore=0;
    let computerScore=0;
    for(let i=0;i<5;i++) {
        let playerSelection = prompt("Ebter your choice. Rock, Paper or Scissor");
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();
        
        if(playerSelection == computerSelection)
            console.log("It's a Tie! Both chode "+playerSelection+".");
        else if( (playerSelection=="rock" && computerSelection=="scissor") || (playerSelection=="paper" && computerSelection=="rock") || (playerSelection=="scissor" && computerSelection=="paper") ) {
            console.log("You Won! "+playerSelection + " beats " + computerSelection + ".");
            playerScore++;
        }
        else {
            console.log("You Lose! "+ computerSelection + " beats " + playerSelection);
            computerScore++;
        }
    }

    if(playerScore == computerScore)
        console.log("It's a Tie. Both Player and Computer scored " + playerScore + ".");
    else if(playerScore > computerScore)
        console.log("You Won. Your Score " + playerScore + ", compuer Score " + computerScore + ".");
    else
        console.log("You Lose. Your Score " + playerScore + ", compuer Score " + computerScore + ".");
}

playGame();
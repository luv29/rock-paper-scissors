function getComputerChoice() {
    let rand = Math.random();
    if(rand<=0.33) return "rock";
    else if(rand<=0.66) return "paper";
    else return "scissor";
}

let ps=0;
let cs=0;
function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection)
        return "It's a Tie! Both chode "+playerSelection+".";
    else if( (playerSelection=="rock" && computerSelection=="scissor") || (playerSelection=="paper" && computerSelection=="rock") || (playerSelection=="scissor" && computerSelection=="paper") ) {
        ps++;
        return "You Won! "+playerSelection + " beats " + computerSelection + ".";
    }
    else {
        cs++;
        return "You Lose! "+ computerSelection + " beats " + playerSelection;
    }
}

let para = document.createElement("p");
para.style.textAlign = "center";
para.style.fontSize="30px";
para.style.fontWeight="bold";
document.body.appendChild(para);

let btns = document.querySelector(".buttons");

Array.from(btns.children).forEach(button=>{
    button.addEventListener("click", e=> {
        let computerSelection = getComputerChoice();
        let message = playRound(button.id, computerSelection);

        para.textContent = message;
    })
})


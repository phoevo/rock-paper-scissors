const options = ["rock", "paper", "scissors"];
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector(".results");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const tieScore = document.querySelector("#tieScore");


rockButton.addEventListener('click',() => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)

});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    
});


function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper")||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}


const playRound = (playerSelection, computerSelection) => {
    
    let playerNumber = 1;
    let computerNumber = 1;
    let tieNumber = 1;
    
   
    
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        const p = document.createElement('p')
        p.innerText = `Tie, you both picked ${playerSelection}`
        results.appendChild(p);
        const i = document.createTextNode(
            `${tieNumber++}`,
          );
          tieScore.appendChild(i);
    }

    else if(result == "Player"){
        const p = document.createElement('p')
        p.innerText = `You win, ${playerSelection} beats ${computerSelection}`
        results.appendChild(p);
        const i = document.createTextNode(
            `${playerNumber++}`
        );
        playerScore.appendChild(i);
    }

    else{
        const p = document.createElement('p')
        p.innerText = `You lose, ${computerSelection} beats ${playerSelection}`
        results.appendChild(p);
        const i = document.createTextNode(
            `${computerNumber}`
            );
    }
}            



function game(){
    for (let i = 0; i< 5; i++){
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("---------");

        if(checkWinner(playerSelection, computerSelection) == "Tie"){
            scoreTie++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }            
    }
    console.log("Game over")
    if(scorePlayer > scoreComputer){
        console.log("Player is the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer is the winner");
    }
    else{
        console.log("We have a tie")
    }
    
}


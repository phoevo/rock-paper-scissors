const options = ["rock", "paper", "scissors"];
const container = document.querySelector(".container")
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

let tieNumber = 1;
let playerNumber = 1;
let computerNumber = 1;

function checkWinner(playerSelection, computerSelection, tieNumber){

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
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        const p = document.createElement('p')
        p.innerText = `Tie, ${playerSelection} and ${computerSelection} are the same.`
        results.appendChild(p);
        const i = document.createTextNode(
            `${tieNumber++}`
        );
        tieScore.appendChild(i); 
        setTimeout(() => {
            p.remove();
         }, 3000);
    }
    
    
    else if(result == "Player"){
        const p = document.createElement('p')
        p.innerText = `You win, ${playerSelection} beats ${computerSelection}`
        results.appendChild(p);
        const i = document.createTextNode(
            `${playerNumber}`,    
        );
        playerScore.appendChild(i);   
        setTimeout(() => {
            p.remove();
         }, 3000);
        
    }

    else{
        const p = document.createElement('p')
        p.innerText = `You lose, ${computerSelection} beats ${playerSelection}`
        results.appendChild(p);
        const i = document.createTextNode(
            `${computerNumber++}`
            );
        computerScore.appendChild(i);
        setTimeout(() => {
            p.remove();
         }, 3000);
        
    }

    if (tieNumber > 5){
        const p = document.createElement('p')
        p.innerText = 'GAME OVER, TIE'
        results.appendChild(p);
        document.getElementById('rock').setAttribute('disabled','disabled');
        document.getElementById('paper').setAttribute('disabled','disabled');
        document.getElementById('scissors').setAttribute('disabled','disabled');

        
    }

    else if(playerNumber > 5){
        const p = document.createElement('p')
        p.innerText = `GAME OVER, PLAYER WINS ${playerNumber - 1} to ${computerNumber - 1}`
        results.appendChild(p);
        document.getElementById('rock').setAttribute('disabled','disabled');
        document.getElementById('paper').setAttribute('disabled','disabled');
        document.getElementById('scissors').setAttribute('disabled','disabled');


    }

    else if (computerNumber > 5){
        const p = document.createElement('p')
        p.innerText = `GAME OVER, COMPUTER WINS ${computerNumber - 1} to ${playerNumber - 1}`
        results.appendChild(p);
        document.getElementById('rock').setAttribute('disabled','disabled');
        document.getElementById('paper').setAttribute('disabled','disabled');
        document.getElementById('scissors').setAttribute('disabled','disabled');

    }
}    




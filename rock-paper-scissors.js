console.log("hi");

const options = ["rock", "paper", "scissors"];

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

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "Its a tie";
       
    }
    else if(result == "Player"){
        return `You win, ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose, ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase(); 
        if (options.includes(choiceInLower)){
            validatedInput == true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    let scoreTie = 0;
    console.log("welcome")
    for (let i = 0; i< 5; i++){
        const playerSelection = getPlayerChoice();
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
    console.log("The players score is " ,scorePlayer);
    console.log("The computers score is ", scoreComputer);
    console.log("With ",scoreTie, "tie(s)");
}

game()
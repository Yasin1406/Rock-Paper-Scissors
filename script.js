function getComputerChoice(){
    let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(choice == 1){
        return "Rock";
    }
    else if(choice == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ");
    choice = choice[0].toUpperCase()+choice.slice(1).toLowerCase();
    if(choice != "Rock" && choice != "Paper" && choice != "Scissors"){
        alert("Invalid input!");
        choice = getHumanChoice();
    }
    return choice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice != computerChoice){
            if(humanChoice == "Rock"){
                if(computerChoice == "Scissors"){
                    humanScore++;
                    console.log("You win! Rock beats Scissors");
                }
                else{
                    computerScore++;
                    console.log("You lose! Paper beats Rock");
                }
            }
            else if(humanChoice == "Paper"){
                if(computerChoice == "Rock"){
                    humanScore++;
                    console.log("You win! Paper beats Rock");
                }
                else{
                    computerScore++;
                    console.log("You lose! Scissors beats Paper");
                }
            }
            else{
                if(computerChoice == "Paper"){
                    humanScore++;
                    console.log("You win! Scissors beats Paper");
                }
                else{
                    computerScore++;
                    console.log("You lose! Rock beats Scissors");
                }
            }
        }
        else{
            console.log("This round is a draw!");
        }
        console.log("\n");
    }

    for(let i = 0; i < 5; i++){
        console.log("Round " + (i + 1) + ":");
        let humanChoice = getHumanChoice();
        console.log("You chose: "+humanChoice);
        let computerChoice = getComputerChoice();
        console.log("Computer chose: "+computerChoice);
        playRound(humanChoice, computerChoice);
    }

    console.log("Final score:");
    console.log("YOU " + humanScore + "-" + computerScore + " COM");
    
    if(humanScore > computerScore){
        console.log("You win!");
    }
    else if(humanScore < computerScore){
        console.log("You lose!");
    }
    else{
        console.log("Its a draw!");
    }
}

playGame();
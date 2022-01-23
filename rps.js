let gameWins = 0;
let gameLosses = 0;

const choice = ["Rock", "Paper", "Scissors"];
const btn = document.getElementById("btn");

/* this is using the logic from the color flipper as the system
the way we will have our "computer" pick randomly from rock, paper or scissors */


function playerChoice(rpsSelect) {
    const randomChoiceIndex = getRandomNumber();
    const computerChoice = choice[randomChoiceIndex];
    console.log("Computer Chose:", computerChoice); 

/* this is where we are declaring a variable for our HTML to read for the computer's choice */

    const computerOutcome = document.getElementById("computerChoice");
    computerOutcome.textContent = "Computer Choice: " + computerChoice;
    console.log(computerOutcome);

/* we are using radio inputs for the buttons, one for each value
for the player's choice */

    let playerChoice = rpsSelect;

    console.log("Player Choice", playerChoice);
    let gameResult;
    
/* we use if /else if/ else statements to determine the outcome of the game */

    if (playerChoice == computerChoice)
    {
        document.getElementById("gameResult").style.background= "#6199E9";
        gameResult = "Tie";
    } 
    else if (playerChoice == "Rock" && computerChoice != "Paper")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        gameResult = "Rock beats Scissors, You Win!";
        gameWins ++;
        localStorage.setItem("games won", gameWins);
    }
    else if (playerChoice == "Paper" && computerChoice != "Scissors")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        gameResult = "Paper beats Rock, You Win!";
        gameWins ++;
        localStorage.setItem("games won", gameWins);
    }
    else if (playerChoice == "Scissors" && computerChoice != "Rock")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        gameResult = "Scissors beats Paper, You Win!";
        gameWins ++;
        localStorage.setItem("games won", gameWins);
    }
    else {
        document.getElementById("gameResult").style.background= "#B0280F";
        gameResult = "You Lose :(";
        gameLosses ++;
        localStorage.setItem("games lost", gameLosses);
    }

    /* our outcomes are then given variables to be read by the HTML document */

    const outcome = document.getElementById("gameResult");
    outcome.textContent = gameResult;
    console.log(gameResult);
    const winCount = document.getElementById("gameWins");
    winCount.textContent = gameWins;
    console.log(gameWins);
    const lossCount = document.getElementById("gameLosses");
    lossCount.textContent = gameLosses;
    console.log(gameLosses);
}

window.onload = function()
{
gameWins = localStorage.getItem("games won");
console.log(gameWins);
gameLosses = localStorage.getItem("games lost");
console.log(gameLosses);

const winCount = document.getElementById("gameWins");
winCount.textContent = gameWins;
console.log(gameWins);
const lossCount = document.getElementById("gameLosses");
lossCount.textContent = gameLosses;
console.log(gameLosses);
}


function getRandomNumber(){
    return Math.floor(Math.random() * choice.length);
}
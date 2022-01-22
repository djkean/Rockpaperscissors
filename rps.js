let gameWins = 0;
let gameLosses = 0;

const choice = ["Rock", "Paper", "Scissors"];
const btn = document.getElementById("btn");

/* this is using the logic from the color flipper as the system
the way we will have our "computer" pick randomly from rock, paper or scissors */

btn.addEventListener("click", function() {
    const randomChoiceIndex = getRandomNumber();
    const computerChoice = choice[randomChoiceIndex];
    console.log('Computer Chose:', computerChoice);

/* this is where we are declaring a variable for our HTML to read for the computer's choice */

    const computerOutcome = document.getElementById("computerChoice");
    computerOutcome.textContent = "Computer Choice: " + computerChoice;
    console.log(computerOutcome);

/* we are using radio inputs for the buttons, one for each value
for the player's choice */

    const getChoicesFromHTML = document.getElementsByName("rock-paper-scissors");
    console.log(getChoicesFromHTML);

    let playerChoice;

    for (let i = 0; i < getChoicesFromHTML.length; i++)
    {
       if (getChoicesFromHTML[i].checked)
        { 
            playerChoice = getChoicesFromHTML[i].value;
        }
    }
    console.log("Player Choice", playerChoice);
    let gameResult;
    
/* we use if /else if/ else statements to determine the outcome of the game */

    if (playerChoice == computerChoice)
    {
        gameResult = "Tie";
    } 
    else if (playerChoice == "Rock" && computerChoice != "Paper")
    {
        gameResult = "Rock beats Scissors, You Win!";
        gameWins ++;
    }
    else if (playerChoice == "Paper" && computerChoice != "Scissors")
    {
        gameResult = "Paper beats Rock, You Win!";
        gameWins ++;
    }
    else if (playerChoice == "Scissors" && computerChoice != "Rock")
    {
        gameResult = "Scissors beats Paper, You Win!";
        gameWins ++;
    }
    else {
        gameResult = "You Lose :(";
        gameLosses ++;
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
});

function getRandomNumber(){
    return Math.floor(Math.random() * choice.length);
}
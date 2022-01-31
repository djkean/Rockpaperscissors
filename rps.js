const gameData = {
    wins: 0,
    losses: 0,
    addWin: () => {
        gameData.wins++;
    },
    addLoss: () => {
        gameData.losses++;
    },
    save: () => {
        localStorage.setItem("gameData", JSON.stringify(gameData));
    },
    load: () => {
        const getGameData = JSON.parse(localStorage.getItem("gameData"));
        if (localStorage.getItem("gameData") !== null)
        {
            gameData.wins = getGameData.wins;
            gameData.losses = getGameData.losses;
        }
        document.getElementById("gameWins").textContent = gameData.wins;
        document.getElementById("gameLosses").textContent = gameData.losses;
    },
};

const choice = ["Rock", "Paper", "Scissors"];
const btn = document.getElementById("btn");

/* our "computer" picks randomly from rock, paper or scissors */

function playerChoice(rpsSelect) {
    const randomChoiceIndex = getRandomNumber();
    const computerChoice = choice[randomChoiceIndex];
    console.log("Computer Chose:", computerChoice); 

/* we declare a variable for our HTML to read for the computer's choice */

    const computerOutcome = document.getElementById("computerChoice");
    computerOutcome.textContent = "Computer Choice: " + computerChoice;
    console.log(computerOutcome);

/* we use "onclick function()" on the images and their values are tied into the "choice" array */

    let playerChoice = rpsSelect;

    console.log("Player Choice", playerChoice);
    let gameResult;
    
/* we use if /else if/ else statements to determine the outcome of the game,
then wins/losses are set in localstorage */

    if (playerChoice == computerChoice)
    {
        document.getElementById("gameResult").style.background= "#6199E9";
        gameResult = "Tie";
    } 
    else if (playerChoice == "Rock" && computerChoice != "Paper")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        gameResult = "Rock beats Scissors, You Win!";
        gameData.addWin();
    }
    else if (playerChoice == "Paper" && computerChoice != "Scissors")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        gameResult = "Paper beats Rock, You Win!";
        gameData.addWin();
    }
    else if (playerChoice == "Scissors" && computerChoice != "Rock")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        gameResult = "Scissors beats Paper, You Win!";
        gameData.addWin();
    }
    else {
        document.getElementById("gameResult").style.background= "#B0280F";
        gameResult = "You Lose :(";
        gameData.addLoss();
    }

    gameData.save();

    /* our outcomes are given variables to be read by the HTML document */

    const outcome = document.getElementById("gameResult");
    outcome.textContent = gameResult;
    console.log({gameResult});
    document.getElementById("gameWins").textContent = gameData.wins;
    console.log({gameWins});
    document.getElementById("gameLosses").textContent = gameData.losses;
    console.log({gameLosses});
}

/* this retrieves the user's win/loss from localstorage */

window.onload = function()
{
    gameData.load();
}
/* this is the function used for computer choice */

function getRandomNumber(){
    return Math.floor(Math.random() * choice.length);
}
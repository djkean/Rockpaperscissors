/* localstorage with an object */

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

function playerChoice(rpsSelect) {
    const randomChoiceIndex = getRandomNumber();
    const computerChoice = choice[randomChoiceIndex];
    console.log("Computer Chose:", computerChoice); 

    const computerOutcome = document.getElementById("computerChoice");
    computerOutcome.textContent = "Computer Choice: " + computerChoice;
    console.log(computerOutcome);

    let playerChoice = rpsSelect;

    console.log("Player Choice", playerChoice);
    let gameResult;
    
/* we use if /else if/ else statements to determine the outcome of the game,
then wins/losses are set in localstorage */

    if (playerChoice == computerChoice)
    {
        document.getElementById("gameResult").style.background= "#6199E9";
        document.getElementById(playerChoice + "Tie").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Tie";
    } 
    else if (playerChoice == "Rock" && computerChoice != "Paper")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        document.getElementById("rockbeatsscissorsWin").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Rock beats Scissors, You Win!";
        gameData.addWin();
    }
    else if (playerChoice == "Paper" && computerChoice != "Scissors")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        document.getElementById("paperbeatsrockWin").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Paper beats Rock, You Win!";
        gameData.addWin();
    }
    else if (playerChoice == "Scissors" && computerChoice != "Rock")
    {
        document.getElementById("gameResult").style.background= "#5FB679";
        document.getElementById("scissorsbeatspaperWin").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Scissors beats Paper, You Win!";
        gameData.addWin();
    }
    else if (playerChoice == "Rock" && computerChoice == "Paper")
    {
        document.getElementById("gameResult").style.background= "#B0280F";
        document.getElementById("paperbeatsrockLoss").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Paper beats Rock, You Lose! :(";
        gameData.addLoss();
    }
    else if (playerChoice == "Paper" && computerChoice == "Scissors")
    {
        document.getElementById("gameResult").style.background= "#B0280F";
        document.getElementById("scissorsbeatspaperLoss").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Scissors beats Paper, You Lose :(";
        gameData.addLoss();
    }
    else {
        document.getElementById("gameResult").style.background= "#B0280F";
        document.getElementById("rockbeatsscissorsLoss").style.display= "block";
        document.getElementById("parentOutcomeImage").style.display= "flex";
        gameResult = "Rock beats Scissors, You Lose :(";
        gameData.addLoss();
    }

    gameData.save();

    const outcome = document.getElementById("gameResult");
    outcome.textContent = gameResult;
    console.log(gameResult);
    document.getElementById("gameWins").textContent = gameData.wins;
    console.log(gameWins);
    document.getElementById("gameLosses").textContent = gameData.losses;
    console.log(gameLosses);
}
 
/* a whole mess of stuff for hiding things for "page2" */

document.getElementById("replayButton").addEventListener("click", () => {
    document.getElementById("parentOutcomeImage").style.display= "none";
    document.getElementById("rockbeatsscissorsWin").style.display= "none";
    document.getElementById("rockbeatsscissorsLoss").style.display= "none";
    document.getElementById("paperbeatsrockWin").style.display= "none";
    document.getElementById("paperbeatsrockLoss").style.display= "none";
    document.getElementById("scissorsbeatspaperWin").style.display= "none";
    document.getElementById("scissorsbeatspaperLoss").style.display= "none";
    document.getElementById("RockTie").style.display= "none";
    document.getElementById("PaperTie").style.display= "none";
    document.getElementById("ScissorsTie").style.display= "none";
});

window.onload = function()
{
    gameData.load();
    document.getElementById("parentOutcomeImage").style.display= "none";
}

function getRandomNumber(){
    return Math.floor(Math.random() * choice.length);
}
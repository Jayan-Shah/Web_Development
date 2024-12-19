// Declaration of playerid
let editedPlayer  = 0;
let activePlayer = 0;
let currentRound = 0;
let gameover=false;
//Storing Playername for further use
const players=[
    {
        name:'',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O',
    },
];

const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

//Edit Button
const EditNameofPlayerOneButton = document.getElementById("player-one-edit");
const EditNameofPlayerTwoButton = document.getElementById("player-two-edit");

//Edit player name
const EditPlayerOneName = document.querySelector("#player-one h3");
const EditPlayerTwoName = document.querySelector("#player-two h3");

//  To get the overlay module
const EditOverlay = document.querySelector(".modal");

// To get the backdrop module
const EditOverlayBackDrop = document.getElementById("backdrop");

//Confirm Button
const ConfirmName = document.querySelector("#confirm-name");

//Cancel Button
const CancelName = document.querySelector("#cancel-name");

//Form
const FormControlElement = document.querySelector('form');

//Error Message
const ErrorsOutput = document.querySelector('#config-errors')

//Start New Game
const StartNewGameButton = document.querySelector('#start-game-btn');
const activeGameBoard = document.getElementById('active-game');
// const gameFieldElements = document.querySelectorAll('#game-board li');

const gameBoardElement = document.getElementById('game-board');
const activePlayerName = document.getElementById('active-player-name');

// Buttons
EditNameofPlayerOneButton.addEventListener('click',openPlayerConfig);
EditNameofPlayerTwoButton.addEventListener('click',openPlayerConfig);

CancelName.addEventListener('click',closePlayerConfig);
EditOverlayBackDrop.addEventListener('click',closePlayerConfig);

//Handling Submit Form
FormControlElement.addEventListener('submit',savePlayerConfig);

//Start New Game
StartNewGameButton.addEventListener('click',startNewGame);

// for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectGameField);
// }

gameBoardElement.addEventListener('click',selectGameField);


//Game over
const GameOverElement = document.getElementById('game-over');
const spanWinnerGame = document.getElementById('winner-name');




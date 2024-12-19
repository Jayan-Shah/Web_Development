function startNewGame(event) {
    GameOverElement.style.display='none';
    if (players[0].name === "" || players[1].name === "") {
        alert("Please set custom player names for both players!");
        return;
    }
  currentRound =1;
  resetGame();
  activePlayerName.textContent = players[activePlayer].name;
  activeGameBoard.style.display = "block";
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || gameover) {
    return;
  }
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
      alert("Please select empty field");
      return;
    }
    
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    
    const winnerid = checkForGameOver();
    currentRound++;
    if(winnerid !== 0){
        endGame(winnerid);
    }
    switchPlayer();

}

// Checking column for equality
function checkForGameOver(event) {
    for(let i=0;i<3;i++)
    {
        if(gameData[0][i]>0 && 
            gameData[0][i] === gameData[1][i] && 
            gameData[0][i] ===gameData[2][i]
          )
        {
          return gameData[0][i]; 
        }
    }

    // Check for rows
    for(let i=0;i<3;i++)
    {
        if(gameData[i][0]>0 && 
            gameData[i][0] === gameData[i][1] && 
            gameData[i][0] === gameData[i][2]
          )
        {
          return gameData[i][0]; 
        }
    }

    //Diagonal top left to bottom right
    if( gameData[0][0]>0 &&
        gameData[0][0]===gameData[1][1] && 
        gameData[1][1]===gameData[2][2]){
        return gameData[0][0];
    }

    //Diagonal bottom left to top right
    if(
        gameData[2][0]>0 &&
        gameData[2][0]===gameData[1][1]&&
        gameData[1][1]===gameData[0][2]
    ){
        return gameData[2][0];
    }

    if(currentRound == 9)
    {
        return -1;
    }
    return 0;
}



function endGame(winnerid){
    gameover=true;
    GameOverElement.style.display='block';
    activeGameBoard.children[1].style.display='none';
    if(winnerid>0){
        const winnername =players[winnerid -1].name;
        GameOverElement.firstElementChild.firstElementChild.textContent = winnername;
    }
    else{
        GameOverElement.firstElementChild.textContent = 'It\'s a draw!';
    }
}


function resetGame(){
    activePlayer = 0;
    currentRound = 1;
    gameover=false;
    activeGameBoard.children[1].style.display='block';
    GameOverElement.firstElementChild.innerHTML='You won, <span id="winner-name">Player Name</span>!';
    GameOverElement.style.display = 'none';

    let gameBoardIndex =0;
    for(let i=0;i<3;i++){
        for  (let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameBoardPlayElement = gameBoardElement.children[gameBoardIndex]
            gameBoardPlayElement.textContent='';
            gameBoardPlayElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }

    activeGameBoard.style.display='none';
}





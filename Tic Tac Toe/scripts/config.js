function openPlayerConfig(event){
    // player-id name consist of - which is not allowed with . operator
    // So we can write it as dataset['player-id']
    // + will convert it into number
    editedPlayer = +event.target.dataset.playerid;
    EditOverlayBackDrop.style.display = "block";
    EditOverlay.style.display = "block";
  
}

function closePlayerConfig(){
    EditOverlayBackDrop.style.display = "none";
    EditOverlay.style.display = "none";
    FormControlElement.firstElementChild.classList.remove('error'); //Use reset in HTML
    ErrorsOutput.textContent = '';
    FormControlElement.firstElementChild.lastElementChild.value='';
}

function savePlayerConfig(event){
    // To not let submit send http request
    event.preventDefault();
    //it looks for input field especially the name defined in input field...It will check entire form.
    // It is simply blueprint of form...There are multiple blueprint available in JS which browser support..
    const formData =new FormData(event.target);
    //"    Max"=>'Max', trim gets rid of whitespace;
    const enteredPlayername = formData.get('playername').trim();
    // Empty string is considered false
    if(!enteredPlayername)
    {
        event.target.firstElementChild.classList.add('error');
        ErrorsOutput.textContent = 'Please enter a valid name!';
        // Stop function execution 
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-'+editedPlayer+'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    // if (editedPlayer == 1){
    //     players[0].name=enteredPlayername;
    // }
    // else{
    //     player[1].name = enteredPlayername;
    // }
    
    // Same way to write than if else statement
    players[editedPlayer-1].name=enteredPlayername;
    closePlayerConfig();
}











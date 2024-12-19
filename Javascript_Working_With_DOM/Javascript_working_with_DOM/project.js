let inputProductName = document.querySelector("input");
let remainingCharsElement = document.getElementById('remaining-chars');

let maxAllowedChars = inputProductName.maxLength;

function updateRemainingCharacters(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    
    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
    if(remainingCharacters<=10){
        inputProductName.style.backgroundColor='rgb(248,191,145)';
        remainingCharsElement.className='warning'
    }
    else{
        inputProductName.style.backgroundColor='rgb(253,245,196)';
        remainingCharsElement.classList.remove('warning');
    }
}

inputProductName.addEventListener('input',updateRemainingCharacters);
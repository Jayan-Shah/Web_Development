let paragraphElement = document.querySelector('p');

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked';
}

paragraphElement.addEventListener('click',changeParagraphText); 

let inputeElement=document.querySelector('input');
function retrieveUserInput(event){
    // let enteredText = inputeElement.value;
    let enteredText = event.target.value;
    // let enteredText = event.data;
    console.log(enteredText);
    // console.log(event);
}
inputeElement.addEventListener('input',retrieveUserInput);



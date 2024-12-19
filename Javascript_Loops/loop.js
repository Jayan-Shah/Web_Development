// JavaScript Calculator
const Calculator = document.getElementById("calculator");
// console.dir(Calculator);
const Calculate_Sum = document.querySelector("#user-number");
// console.dir(Calculate_Sum);
const Calci = Calculator.children[3];
// console.log(Calci);
const AddSum = document.querySelector("#calculated-sum");

function CalculateSum(event) {
  let number = Calculate_Sum.value;
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  if (number >= 0) {
    AddSum.textContent = sum;
    AddSum.style.display ='block'; 
  } 
  else {
    AddSum.textContent = "Negative Input...Kindly add positive number";
    AddSum.style.display ='block'; 
  }

}

function ClickonButton() {
  CalculateSum();
}

Calci.addEventListener("click", ClickonButton);

// Highlight 
const highlightLinkButtonElement = document.querySelector('#highlight-links button');
function HighlightLinks(event){
    const highlightLinksAll = document.querySelectorAll('#highlight-links a');
    for(const anchorElement of highlightLinksAll){
        anchorElement.classList.add('highlight');
    } 
}
highlightLinkButtonElement.addEventListener('click',HighlightLinks);


// Display Data
const dummyUserData={
    firstName: 'Jayan',
    middleName: 'Kashish',
    lastName: 'Shah',
    Years: '3'
};

const displayDataButton = document.querySelector('#yourinfo button');
function displayData(){
    const outputDataElement = document.querySelector('#output-user-data');
    outputDataElement.innerHTML='';
    for (const key in dummyUserData){
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' + dummyUserData[key];
        newUserDataListElement.textContent = outputText;
        outputDataElement.append( newUserDataListElement);
    }
}
displayDataButton.addEventListener('click',displayData);

//Stats

const rollDiceButton = document.querySelector('#statistics button');

function rollDice(){
    return Math.floor(Math.random()*6) + 1; //Random Number Between 1 and 6
}

function DeriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElements = document.getElementById('dice-rolls');
    
    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElements.innerHTML = '';
   
    let hasRolledTargetNumber = false;
    let numberOfRolls =0;

    while(!hasRolledTargetNumber){
        const rolledNumber =rollDice();
        numberOfRolls++;

        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ':' + rolledNumber;
        newRollListItemElement.textContent=outputText;
        diceRollsListElements.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber ==enteredNumber;
    }

    const outputTotalRolls = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');
    
    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRolls.textContent = numberOfRolls;
    
}

rollDiceButton.addEventListener('click',DeriveNumberOfDiceRolls);
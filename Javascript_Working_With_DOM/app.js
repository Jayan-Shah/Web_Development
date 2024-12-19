
// console.dir(window.document);

// Drilling into dom
// document.body.children[1].children[0].href = 'https://www.google.com';


// anchorElement=document.querySelector('#external-id'); //querySelector('a') a{color :red};
// anchorElement.href="https://academind.com";

// Add an element
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href="https://google.com";
newAnchorElement.textContent =" This leads to google";

// 2. Get access to parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);
console.dir(firstParagraph);



// Remove an element

// 1. Select an element you want to remove
let firstH1Element =  document.querySelector('h1');

//2. Remove the element
firstH1Element.remove();


// Moving elements around
firstParagraph.parentElement.append(firstParagraph);

//Inner html
console.log(firstParagraph.innerHTML);
firstParagraph.innerHTML = 'Hi! this is <strong>important!</strong>';






 
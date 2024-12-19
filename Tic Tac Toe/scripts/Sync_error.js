// // Design Edit

// const EditNameofPlayerOneButton = document.getElementById("player-one-edit");
// const EditNameofPlayerTwoButton = document.getElementById("player-two-edit");

// //Edit player name
// const EditPlayerOneName = document.querySelector("#player-one h3");
// const EditPlayerTwoName = document.querySelector("#player-two h3");
// //  To get the overlay module
// const EditOverlay = document.querySelector(".modal");

// // To get the backdrop module
// const EditOverlayBackDrop = document.getElementById("backdrop");

// //Confirm Button
// const ConfirmName = document.querySelector("#confirm-name");

// //Cancel Button
// const CancelName = document.querySelector("#cancel-name");

// function EditBackdrop() {
//   EditOverlayBackDrop.style.display = "block";
//   EditOverlay.style.display = "block";
// }

// function CancelChange() {
//   EditOverlayBackDrop.style.display = "none";
//   EditOverlay.style.display = "none";
// }

// function GetUserNameOne() {
//   EditBackdrop();
//   ConfirmName.addEventListener("click", EditNameOne);
// }

// function EditNameOne() {
//   CancelChange();
//   const userInput = document.getElementById("player-name");
//   const UserNamee = userInput.value;
//   EditPlayerOneName.textContent = UserNamee;
//   userInput.value='';
// }

// function GetUserNameTwo() {
//   EditBackdrop();
//   ConfirmName.addEventListener("click", EditNameTwo);
// }

// function EditNameTwo() {
//   CancelChange();
//   const userInput = document.getElementById("player-name");
//   const UserName=userInput.value;
//   EditPlayerTwoName.textContent = UserName;
// }

// EditNameofPlayerOneButton.addEventListener("click", GetUserNameOne);
// EditNameofPlayerTwoButton.addEventListener("click", GetUserNameTwo);
// CancelName.addEventListener("click", CancelChange);


const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

var bill = billAmount.value
var given = cashGiven.value

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  message.style.display = "none";;
  if (billAmount.value > 0) {    
    if (given >= bill) {      
      var amountToBeReturned = cashGiven.value - billAmount.value; 
      calculateChange(amountToBeReturned);
     } else {
      showMessage("Do you wanna wash plates?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {  
  for (let i = 0; i < availableNotes.length; i++) {    
    var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);  
    if (numberOfNotes >= 0){     
    amountToBeReturned = amountToBeReturned % availableNotes[i];    
    noOfNotes[i].innerText = numberOfNotes;
    }else{
      showMessage("The cash provided should atleast be equal to the bill amount")
    }
  }
}

// function hideMessage() {
//   message.style.display = "none";
// }

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

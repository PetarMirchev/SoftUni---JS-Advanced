function notify(message) {  // message --> 'Something happened!'

// Write a JS function that receives a string message and displays it inside a div with id "notification. 
// The div starts hidden and when the function is called, reveal it. After the user clicks on it, 
// hide the div.

// 1 -  get the div for put the text into
let divNotification = document.getElementById("notification");

// 2 - get the tex & attached to the div
divNotification.textContent = message;

// 3 - show the div & data text by CSS styles "block"
divNotification.style.display = "block";

// 4 -attach onClick event to DIV area
divNotification.addEventListener("click", onClick)


// 5 - hide the div
  function onClick(){
    divNotification.style.display = "none";
  }

}
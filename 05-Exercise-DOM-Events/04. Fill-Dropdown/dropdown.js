function addItem() {
    //50/100
    //get elements
    // let newItemText =  document.getElementById('newItemText').value;
    // let newItemValue = document.getElementById('newItemValue').value;
    // let menu = document.getElementById('menu');


    let newItemText =  document.querySelector('#newItemText').value;
    let newItemValue = document.querySelector('#newItemValue').value;
    let menu = document.querySelector('#menu');



    // create new element & attach new data in menu
    //you should create and append an <option>
    let option = document.createElement("option");

    option.textContent = newItemText;
    option.value = newItemValue;

    menu.appendChild(option);


    // reset input fields to empty
    newItemText.value = '';
    newItemValue.value = '';
    
    // console.log(newItemText);
    // console.log(newItemValue);
}



// 100/100
function addItem() {
    // capture elements
    const inputTextElement = document.querySelector("#newItemText");
    const inputValueElement = document.querySelector("#newItemValue");
    const menu = document.querySelector("#menu");
    const option = document.createElement("option");
  
    // setupoption
    option.textContent = inputTextElement.value;
    option.value = inputValueElement.value;
  
    // append content
    menu.appendChild(option);
  
    // clear input value
    inputValueElement.value = "";
    inputTextElement.value = "";
}
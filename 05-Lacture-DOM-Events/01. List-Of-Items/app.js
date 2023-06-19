function addItem() {

    // querySelector --> '#newItemText'
    // getElementById --> 'newItemText'

    
    // get the value from input 
    let boxInputText = document.querySelector('#newItemText').value;

    //create 'li' tag
    let li = document.createElement("li")

    // attach text to the created 'li' tag
    li.appendChild(document.createTextNode(boxInputText));

    //attach new 'li' tag & text to the list element
    document.getElementById('items').appendChild(li);

    // clear the input / box input
    document.getElementById('newItemText').value= '';

}
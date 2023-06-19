function addItem() {
    let newTextAdd = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    if (newTextAdd.length === 0) { return; };

    let newListItem = document.createElement('li');
    newListItem.textContent = newTextAdd;


    let deleteRemove = document.createElement('a');
    let linkText = document.createTextNode('[Delete]');
    deleteRemove.appendChild(linkText); // attach '[Delete]' --> in 'a'
    deleteRemove.href = '#' // add dummy web link
    
    // put all data on new create element in to the list
    newListItem.appendChild(deleteRemove);
    list.appendChild(newListItem);


    // delete item logic
    deleteRemove.addEventListener('click', deleteItemFunction); 
    
    function deleteItemFunction(){
        newListItem.remove();
    }
}
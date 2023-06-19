function deleteByEmail() {
    let searchEmail = document.getElementsByName('email')[0].value;

    //get all elements whit emails
    let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");

    
    for (let i = 0; i < secondColumn.length; i++) {
        let td = secondColumn[i];
        
        // check for matches text vs emails
        if (td.textContent == searchEmail) {
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById('result').
            textContent = "Deleted.";

            return;
        }
    }
    document.querySelector('#result').textContent = "Not found.";
}
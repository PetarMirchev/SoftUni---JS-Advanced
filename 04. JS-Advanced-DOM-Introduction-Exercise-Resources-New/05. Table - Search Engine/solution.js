function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rows = document.querySelectorAll('tbody tr'); // <tbody> <tr>

   function onClick() {
      let inputValueToLower = document.getElementById('searchField').value.toLowerCase();
      //console.log({rows});

      for (const row of rows) {
        let rowToLowerCase =  row.textContent.toLowerCase();

        if (rowToLowerCase.includes(inputValueToLower)){ // mark if is included
            row.setAttribute('class', 'select');
        } else { // set to default (no mark)
            row.removeAttribute('class');
        }
      }
   }
}
function search() {
   let listItems = document.querySelectorAll('#towns li'); 
   let inputValue = document.querySelector("input").value;
   let renderResult = document.getElementById("result");

    let sum = 0; //counter word match

    // get inputToLowerCase -->  to compare whit data
    let inputToLower = inputValue.toLowerCase();
   
    for (let itemLi of listItems) {
      
      const liTextToLowerCase = itemLi.textContent.toLowerCase(); // sofia, pleven, varna.....
      //console.log(liTextToLowerCase);
      // console.log({itemLi});

      if (liTextToLowerCase.includes(inputToLower)) { // true -> match !
         itemLi.style.fontWeight = 'bold';
         itemLi.style.textDecoration = 'underline';
         sum++;
      } else {
         itemLi.style.fontWeight = '';
         itemLi.style.textDecoration = '';
      }

    }
   
    //render sum results found matching
    renderResult.textContent = `${sum} matches found`;
}

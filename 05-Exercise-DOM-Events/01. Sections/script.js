function create(words) {
   
   let content = document.getElementById('content');

   //console.log(words); //Section 1', 'Section 2', 'Section 3', 'Section 4
   words.forEach(element => {

      let divP = document.createElement("div");
      let paragraphP = document.createElement("p");

      //put text in paragraph & set to be not visible
      paragraphP.textContent = element;
      paragraphP.style.display = "none";

      //attach paragraph int Div
      divP.appendChild(paragraphP);

      // on click show the text
      divP.addEventListener("click", (e) =>{
         console.log(e);
         e.currentTarget.children[0].style.display = "block";
      })

      //put render DIV/P into content
      content.appendChild(divP);
   });
}
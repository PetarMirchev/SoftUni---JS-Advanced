window.addEventListener("load", solve);

// 87/100
function solve() {
 
  // 1.0 get the input, btn & tag for manipulating
  let gemNameInput = document.getElementById("gem-name");
  let colorInput = document.getElementById("color");
  let caratsInput = document.getElementById("carats");
  let priceInput = document.getElementById("price");
  let typeInput = document.getElementById("type");
  let btnAddGem = document.getElementById("add-btn");

  let previewListAreaUL = document.getElementById("preview-list");
  let collectionListAreaUL = document.getElementById("collection");


  // 
  btnAddGem.addEventListener("click", function addGem(e) {
    e.preventDefault();

    let gemName = gemNameInput.value;
    let color = colorInput.value;
    let carats = caratsInput.value;
    let price = priceInput.value;
    let type = typeInput.value;

    // check for non empty string
    if (gemName === "" || color === "" || carats === "" || price  === "" || type === ""){
      return;
    }


    //create table for displaying data
    let liGemInfo = document.createElement("li");
    liGemInfo.classList.add("gem-info"); // <li class="gem-info">


    let crArticle = document.createElement("article"); // <article>

    let h4 = document.createElement("h4");
    h4.textContent = gemName; //<h4>Ruby</h4>

    let p1 = document.createElement("p");
    p1.textContent = "Color: " + color; //<p>Color: Red</p>

    let p2 = document.createElement("p");
    p2.textContent = "Carats: " + carats; //<p>Carats: 1.5</p>

    let p3 = document.createElement("p");
    p3.textContent = "Price: " + price; //<p>Price: 2000$</p>

    //! type.textContent = `Type: ${typeElement.value}`;
    let p4 = document.createElement("p");
    p4.textContent = "Type: " + type; //<p>Type: Precious</p>


    let btnSave = document.createElement("button");
    btnSave.classList.add("save-btn");
    btnSave.textContent = "Save to Collection";
    btnSave.addEventListener("click", saveHandler);

    let btnEdit = document.createElement("button");
    btnEdit.classList.add("edit-btn");
    btnEdit.textContent = "Edit Information";
    btnEdit.addEventListener("click", editHandler);

    let btnCancel = document.createElement("button");
    btnCancel.classList.add("cancel-btn");
    btnCancel.textContent = "Cancel";
    btnCancel.addEventListener("click", cancelHandler);


    //join elements according task structure
    // I - h4, p, p, p, p  to  article
    crArticle.appendChild(h4);
    crArticle.appendChild(p1);
    crArticle.appendChild(p2);
    crArticle.appendChild(p3);
    crArticle.appendChild(p4);

    // II - article & buttons  to  'li'
    liGemInfo.appendChild(crArticle);
    liGemInfo.appendChild(btnSave);
    liGemInfo.appendChild(btnEdit);
    liGemInfo.appendChild(btnCancel);

    // 'li' whit all data to <ul id="preview-list">
    previewListAreaUL.appendChild(liGemInfo);

//•	When the button is clicked, the input fields must be cleared and the ["Add Gem"] button must be disabled.
    btnAddGem.disabled = true;

    //set to empty input felts
    gemNameInput.value = "";
    colorInput.value = "";
    caratsInput.value = "";
    priceInput.value = "";
    typeInput.value = "";


  
    function saveHandler(e){ // save btn
      // button is clicked, the gem information must be transferred from "preview" to "collection", 
      // for you that means a new list item should be added to the unordered list with id: "collection", 
      // having the information about gems.

      // remove selected html elements from 'Posts for review:'
      let liElement = e.target.parentElement; // get event target --> btn --> get parent element on dat target --> li element content post
      liElement.remove(); // clear event target & parent element form DOM (delete li element)
  
      // add current post data to input fields for edit
      // take parent element (li) directly (Post) & get take fields
      let titleH4 = liElement.querySelector('h4');
      let gemNameValue = titleH4.textContent;
  
      let selectAllParagraphs = liElement.querySelectorAll('p');
      let colorValueP = selectAllParagraphs[0].textContent; // first paragraph 'p1'
      let caratsValueP = selectAllParagraphs[1].textContent; // second paragraph 'p2'
      let priceValueP = selectAllParagraphs[2].textContent; // 3-t paragraph 'p3'
      let typeValueP = selectAllParagraphs[3].textContent; // 4-t paragraph 'p4'


      let liCollectionPCS = document.createElement("li");
      let tagP = document.createElement("p");
      tagP.classList.add("collection-item");
      tagP.textContent = `${gemNameValue} - ${colorValueP}/ ${caratsValueP}/ ${priceValueP}$/ ${typeValueP}`;
      
      liCollectionPCS.appendChild(tagP);
      collectionListAreaUL.appendChild(liCollectionPCS);

      btnAddGem.disabled = false; 
    }





    function editHandler(e){  // edit btn
      // remove selected html elements from 'Posts for review:'
      let liElement = e.target.parentElement; // get event target --> btn --> get parent element on dat target --> li element content post
      liElement.remove(); // clear event target & parent element form DOM (delete li element)
  
      // add current post data to input fields for edit
      // take parent element (li) directly (Post) & get take fields
      let titleH4 = liElement.querySelector('h4');
      let gemNameValue = titleH4.textContent;
  
      let selectAllParagraphs = liElement.querySelectorAll('p');
      let colorValueP = selectAllParagraphs[0].textContent; // first paragraph 'p1'
      let caratsValueP = selectAllParagraphs[1].textContent; // second paragraph 'p2'
      let priceValueP = selectAllParagraphs[2].textContent; // 3-t paragraph 'p3'
      let typeValueP = selectAllParagraphs[3].textContent; // 4-t paragraph 'p4'
     
      //put values into form for changing 
      gemNameInput.value = gemNameValue;
      colorInput.value = colorValueP.substring(6); //.substring(4) -> to cut form  beginning of text "Color: " that we attach
      caratsInput.value = caratsValueP.substring(8); //.substring(4) -> to cut form  beginning of text "Color: " that we attach;
      priceInput.value = priceValueP.substring(7); //.substring(4) -> to cut form  beginning of text "Color: " that we attach
      typeInput.value = typeValueP.substring(6); //.substring(4) -> to cut form  beginning of text "Color: " that we attach

      btnAddGem.disabled = false;   
      debugger
    }





    function cancelHandler(e){ // delete
      liGemInfo.remove();
      btnAddGem.disabled = false; 
    }


  })

}

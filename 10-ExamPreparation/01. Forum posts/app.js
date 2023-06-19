window.addEventListener("load", solve);

function solve() {
  
  // 1.0 get all elements from HTML
  let inputFieldTitle = document.getElementById("post-title");
  let inputFieldCategory = document.getElementById("post-category");
  let inputFieldContentType = document.getElementById("post-content");
  let btnPublish = document.getElementById("publish-btn");
  let reviewListID = document.getElementById("review-list");

  // list for clear & btn (-->5.0)
  let publishedList = document.getElementById("published-list");
  let btnClear = document.getElementById("clear-btn");
  btnClear.addEventListener("click", clearPostHandler);


  // 1.1 get data & store it in Posts for review:
  btnPublish.addEventListener("click", onClickPublish);



  // 2.0 create post
  function onClickPublish(e){
    e.preventDefault();
    let titleValue = inputFieldTitle.value;
    let categoryValue = inputFieldCategory.value;
    let contentValue = inputFieldContentType.value;

    //check for empty string!
    if (titleValue === "" ||  categoryValue === "" || contentValue === ""){
      return;
    }

    // 2.1 call createPost() to generate new post
    let post = createPost(titleValue, categoryValue, contentValue);
    // 2.2 publish post in "Posts for review:"
    reviewListID.appendChild(post);  //<ul id="review-list">  --> reviewListID & all logic created in function
    // 2.3 after create post set input fields to empty ""
    inputFieldTitle.value = "";
    inputFieldCategory.value = "";
    inputFieldContentType.value = "";


    // func to generate new post
    function createPost(inputTitleValue, inputCategoryValue, inputContentValue){
      // When you click the ["Publish"] button, the information from the input fields 
      // must be added to the ul with the id "review-list" and then clear input fields. 
      let liTag = document.createElement("li");
      liTag.classList.add("rpost"); // li element need to have class='rpost';
      let article = document.createElement("article");
      let h4 = document.createElement("h4");
      h4.textContent = inputTitleValue;
      let p1 = document.createElement("p");
      p1.textContent = `Category: ${inputCategoryValue}`;
      let p2 = document.createElement("p");
      p2.textContent = `Content: ${inputContentValue}`;

      article.appendChild(h4)
      article.appendChild(p1);
      article.appendChild(p2);
    
      let btnEdit = document.createElement("button");
      btnEdit.textContent = "Edit";
      btnEdit.classList.add("action-btn", "edit"); // button class = "action-btn edit"
      //attach edit logic for each button by add editHandler()
      btnEdit.addEventListener("click", editHandler); 

      let btnApprove = document.createElement("button");
      btnApprove.textContent = "Approve";
      btnApprove.classList.add("action-btn", "approve"); // button class = "action-btn approve"
      btnApprove.addEventListener("click", approveHandlerPost);

      liTag.appendChild(article);
      liTag.appendChild(btnEdit);
      liTag.appendChild(btnApprove);

      return liTag; // return created post whit 2 buttons down
  }


  

  // 3.0 implement Edit Logic
  function editHandler(e){
    // 3.1 remove selected html elements from 'Posts for review:'
    let liElement = e.target.parentElement; // get event target --> btn --> get parent element on dat target --> li element content post
    liElement.remove(); // clear event target & parent element form DOM (delete li element)


    // 3.2 add current post data to input fields for edit
    // take parent element (li) directly (Post) & get take fields
    let titleH4 = liElement.querySelector('h4');
    let titleValue = titleH4.textContent;

    let selectAllParagraphs = liElement.querySelectorAll('p');
    let categoryValueP = selectAllParagraphs[0].textContent; // first paragraph 'p1'
    let contentValueP = selectAllParagraphs[1].textContent; // second paragraph 'p2'
 
    
    //put values into form for changing 
    inputFieldTitle.value = titleValue;
    inputFieldCategory.value = categoryValueP.substring(10); //.substring(10) -> to cut form  beginning of text "Category: " that we attach
    inputFieldContentType.value = contentValueP.substring(9); //.substring(9) -> to cut form  beginning of text "Content: " that we attach
  }




    // 4.0 implement Approve Logic
    function approveHandlerPost(e){
      let liElement = e.target.parentElement; // get event target --> btn --> get parent element on dat target --> li element content post
      liElement.remove(); // clear event target & parent element form DOM (delete li element)

      // select 2 or more buttons and remove hem from dom element to stay only text
      let buttons = Array.from(liElement.querySelectorAll('button'));
      buttons.forEach(b => b.remove());

      publishedList.appendChild(liElement);
    }

  }


   // 5.0 clear Post logic
  function clearPostHandler(){
    //take all 'children'/posts in the tag and use dem as array
    let postsToCLear = Array.from(publishedList.children);
    //filter the not need post from list
    postsToCLear.forEach(p => p.remove());
  }
    
}

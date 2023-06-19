function lockedProfile() {
    
    //  select all buttons /Show more/ from cards
    let btnElements = Array.from(document.querySelectorAll("div button"));


    // attach event listener to each button
    for (let btn of btnElements) {
        btn.addEventListener("click", showMore);
    }



    
     // on click event
    function showMore(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const locked = divChildren[2].checked;


        // if locked - do nothing
        if (locked) {
            return;
        }

        // else enable functionality
        const hiddenFieldsElement = e.target.previousElementSibling;

        if (e.target.textContent === "Show more") {
            hiddenFieldsElement.style.display = "inline";
            e.target.textContent = "Hide it";
            return;
          }
      
        hiddenFieldsElement.style.display = "";
        e.target.textContent = "Show more";

    }

}
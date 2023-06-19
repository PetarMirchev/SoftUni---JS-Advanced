function getArticleGenerator(articles) {
    // get element for to render needed staff
    let outputArticleBox = document.querySelector('#content');
    //get text arr
    let getTextArr = [...articles];
    //debugger

    return function showText(){ //returns render logic function
        if (getTextArr.length !== 0){ // not empty array!
            let createArticle = document.createElement('article');
            createArticle.innerHTML = getTextArr.shift(); //get 1 element & create article
            outputArticleBox.appendChild(createArticle); // put creted element & data into dom element
        }
       return showText; // :) no text return 'undefined' 
    }
}

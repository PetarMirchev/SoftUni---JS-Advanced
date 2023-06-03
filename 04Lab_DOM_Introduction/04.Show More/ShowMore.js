function showText() {
    // TODO
    let moreInfo = document.getElementById('more');
    let span = document.getElementById('text');

    // alternative select of text
    //let span1 = document.querySelector('#text');

    span.style.display = 'inline'; // show --> Welcome to JavaScript and DOM.
    moreInfo.style.display = 'none'; // hide --> Read more ...

}
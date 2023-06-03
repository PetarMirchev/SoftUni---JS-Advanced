function extractText() {
    // collect all LI tags
    let lis = document.getElementsByTagName("li"); 
    // liArray = (3) [li, li, li];
    let liArray = Array.from(lis);
    // allTexts = (3) ['first item', 'second item', 'third item'];
    let allTexts = liArray.map(x => x.textContent);

    // select <textarea id="result"></textarea> for manipulation
    let textArea = document.getElementById('result');
    // put collected data into textarea
    textArea.value = allTexts.join("\n");

    // let ul = document.getElementById('items')
    // console.log(ul.children);
}
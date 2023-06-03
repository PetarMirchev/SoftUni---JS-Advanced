function extract(content) {

    let pText = document.getElementById(content);
    let text = pText.textContent; // get the text content  from 'content' element/<p>

    let regex = /\(([^()]*)\)/g; // on x[1] is my group whit no name 

    // get all matches in text by regex & put them in result array
    let result  = [...text.matchAll(regex)].map(x => x[1]); // 'Bulgaria', 'Kazanlak, 'Rosa damascena Mill'

    let resultString = result.join('; ');
    return resultString;
    //console.log(result);



    // alternative solution to the Uppercase!
    let para = document.getElementById(content).textContent; // document.getElementById(elementId)
    let pattern = /\(([^)]+)\)/g;
    let result1 = [];
    let match = pattern.exec(para);

    while(match) {
        result1.push(match[1]);
        match = pattern.exec(para);
    }
    return result.join('; ');


}
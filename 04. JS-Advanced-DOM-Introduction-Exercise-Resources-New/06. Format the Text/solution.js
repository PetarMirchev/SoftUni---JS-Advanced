function solve() {

// * Create a new paragraph element that holds no more than 3 sentences from the given input.
// * Hint: Use interpolation string to create paragraph element. (`<p> {text} </p>`)
// * If the given input contains less or 3 sentences, you need to create only 1 paragraph, fill it with these
// sentences and append this paragraph to the div with an id="output".
// Otherwise, when you have more than 3 sentences, create enough paragraphs to get all sentences from the textarea.


let textAreaBoxInput = document.getElementById('input').value;

let resultDIV = document.getElementById('output');

//filter empty or incorrect staff
let sentencesArr = textAreaBoxInput
.split('.')
  .filter((s) => s !== '')
  .map((s) => s + '.');


  let paragraphLimit = Math.ceil(sentencesArr.length / 3);

  for (let i = 0; i < paragraphLimit; i++) {
      let joinedSentences = sentencesArr.splice(0, 3).join('');
      resultDIV.innerHTML += `<p>${joinedSentences}</p>`;

      // console.log({joinedSentences});
  }
}

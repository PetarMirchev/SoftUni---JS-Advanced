function solve() {
  let randomText = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let resultText = document.getElementById('result');

  let buffWord = randomText.toLowerCase().split(' '); // 'this', 'is', 'an', 'example'  
  let arrWordsResult = [];

  switch (namingConvention) {

    case 'Camel Case': { //thisIsAnExample

      for (let i = 0; i < buffWord.length; i++) {
        let word = buffWord[i].split('');

        if (i === 0){ // is first word i n the array of words
          arrWordsResult.push(buffWord[i]);
        } else { // rest of words in the array of words 
        
        word[0] = word[0].toUpperCase(); // start first chart whit big Letter!
        word = word.join('');
        arrWordsResult.push(word);
        }
      }
    } break;

    case 'Pascal Case': {  //SecondExample
      for (let i = 0; i < buffWord.length; i++) {
        let word = buffWord[i].split('');
        
        word[0] = word[0].toUpperCase(); // start first chart whit big Letter!
        word = word.join('');
        arrWordsResult.push(word);
        }
    } break;


    default : {  //Error!
      let word = 'Error!'
      arrWordsResult.push(word);
    } break;
  }


  resultText.textContent = arrWordsResult.join('')
  // console.log(buffWord); 
  // console.log(namingConvention);
  // console.log(arrWordsResult.join(''));
} 

        //  Lecture 2  --> Arrays



// 1. Even Position Element


// function sumEvenNumbers(numbers){
//     let arr = numbers;
//     let resultArray = [];

//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
        
//         if (i % 2 === 0) { //Even Position Element
//             resultArray.push(element);
//         }
//     }

//     console.log(resultArray.join(' '));
// }

// sumEvenNumbers(['20', '30', '40','50', '60']);  // 20 40 60 
// sumEvenNumbers(['5', '10']); // 5
// sumEvenNumbers(['A', 'B']);  // A


//*************************************************************************************************** */



// 02. Last K Numbers Sequence




//**************************************************************************************************** */


//3. Sum First Last


// function sumFirstLastElementArr(input){

//         let x = Number(input[0]);
//         let k = input.length - 1;
//         let y = Number(input[k]);

//         let result = x + y;
//         console.log(result);
// }

// sumFirstLastElementArr(['20', '30', '40']); //60
// sumFirstLastElementArr(['5', '10']); //15


//*************************************************************************************************** */




//4. Negative / Positive Numbers


// function negativePositiveNumbers(input){

//         let arr = [...input]; //[7, -2, 8, 9]
//         let result = []; //

//         //Otherwise, if the current element is a positive number (or 0), use a push method to add
//         //  the number to the end of the array.

//         for (let j = 0; j < arr.length; j++) {

//                 if (arr[j] < 0){
//                         result.unshift(arr[j]);
//                 } else {
//                         result.push(arr[j]); 
//                 }        
//         }
//         console.log(result.join('\n'));
// }

// negativePositiveNumbers([7, -2, 8, 9] );
// // -2
// // 7
// // 8
// // 9

// negativePositiveNumbers([3, -2, 0, -1] );
// // -1
// // -2
// // 3
// // 0


//***************************************************************************************************** */



//05. Smallest Two Numbers

// function find2SmallNumbers(input){

//         let arr = [...input]; //[30, 15, 50, 5]
        
//         arr.sort( (a,b) =>  {return a-b}); //[5, 15, 30, 50]
//         console.log(arr[0],arr[1]); //// 5 15
// }

// find2SmallNumbers([30, 15, 50, 5]); // 5 15
// find2SmallNumbers([3, 0, 10, 4, 7, 3]); // 0 3


//****************************************************************************************************** */



//6. Bigger Half


function biggerHalfOfArr(input){

        let arr = [...input]; //[3, 19, 14, 7, 2, 19, 6]
        arr.sort( (a,b) =>  a-b); // [2, 3, 6, 7, 14, 19, 19]
        let hafArr = Math.floor(arr.length / 2); // 3/7 
        let result = arr.slice(hafArr); //[7, 14, 19, 19]
        
        return result;

}

biggerHalfOfArr([4, 7, 2, 5]); //[5, 7]
biggerHalfOfArr([3, 19, 14, 7, 2, 19, 6]); //[7, 14, 19, 19]


//**************************************************************************************************** */




//07. Piece of Pies

// function cutPieceFromStartToEnd(arr, startWord, endWord){

//         let arr1 = [...arr];
//         let startIndex = arr1.indexOf(startWord); // 1  -> 'Key Lime Pie'
//         let endIndex = arr1.indexOf(endWord); // 3  -> 'Lemon Meringue Pie'

//         let cutPart = arr1.slice(startIndex, endIndex + 1);
//         return cutPart;
// }

// console.log(cutPieceFromStartToEnd(['Pumpkin Pie',                //['Key Lime Pie',
//                         'Key Lime Pie',               //'Cherry Pie',
//                         'Cherry Pie',                 //'Lemon Meringue Pie']
//                         'Lemon Meringue Pie',
//                         'Sugar Cream Pie'],
//                         'Key Lime Pie',
//                         'Lemon Meringue Pie'));


// console.log(cutPieceFromStartToEnd(
//         ['Apple Crisp',                  //['Pot Pie',
//         'Mississippi Mud Pie',           // 'Steak and Cheese Pie',
//         'Pot Pie',                       // 'Butter Chicken Pie',
//         'Steak and Cheese Pie',          //'Smoked Fish Pie']
//         'Butter Chicken Pie',
//         'Smoked Fish Pie'],
//         'Pot Pie',
//         'Smoked Fish Pie'));


//****************************************************************************************************** */




//8. Process Odd Positions


// Write a JS function that returns the elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.


// function oddPositionsNumbers(array1) {

//         let arr = [...array1];
//         let buffer = [];  //[10, 15, 20, 25]

//         for (let i = 0; i < arr.length; i++) {
//                 let element = arr[i];
//                 if (i % 2 !== 0){
//                         buffer.push(element);  
//                 }
//         }
//         //console.log(buffer); //[15, 25]
//         let increaseArrayBy2 = buffer.map(x => x * 2); //[30, 50]
//         let result = increaseArrayBy2.reverse().join(" ");
//         console.log(result);     
// }


// oddPositionsNumbers([10, 15, 20, 25]);  // 50 30 
// oddPositionsNumbers([3, 0, 10, 4, 7, 3]); //6 8 0





//****************************************************************************************************** */






//Nested Arrays --> 9. Biggest Element



// function matrixInMatrixFindBigNumber(input){

//         let maxNumber = Number.MIN_SAFE_INTEGER;

//         for (let i = 0; i < input.length; i++) {
//                 let el = input[i];
//                 //console.log(el);
//                 for (let j = 0; j < el.length; j++) {
//                         let element = el[j];
//                         //console.log(element);

//                         if (element > maxNumber){
//                                  maxNumber = element;  
//                         }
//                 }
//         }

//         console.log(maxNumber);
// }

// matrixInMatrixFindBigNumber([[20, 50, 10],[8, 33, 145]]); // 145 
// console.log(`-----------------------------`);
// matrixInMatrixFindBigNumber([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]]) // 33



//************************************************************************************************* */




//Nested Arrays --> 10. Diagonal Sums



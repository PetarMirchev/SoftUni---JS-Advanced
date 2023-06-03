
                        // 2 UPR - Exercise: Arrays and Nested Arrays




// 1. Print an Array with a Given Delimiter


//The input comes as two parameters – an array of strings and a string. 
//The second parameter is the delimiter.


function joinArrayWithDelimiter(array, delimiter) {

    let newArray = array.join(delimiter);

    console.log(newArray);
}

joinArrayWithDelimiter(['One','Two','Three','Four','Five'],'-');
//One-Two-Three-Four-Five
joinArrayWithDelimiter(['How about no?','I','will','not','do','it!'],'_');
//How about no?_I_will_not_do_it!


//**************************************************************************************** */


//02. Print every N-th Element from an Array


// The input comes as two parameters – an array of strings and a number. 
// The second parameter is N – the step.
// The output is every element on the N-th step starting from the first one. 
// If the step is 3, you need to return the 1-st,
// the 4-th, the 7-th … and so on, until you reach the end of the array. 

function getEveryN_Element(array, step){

    let arr = [...array];
    let number = Number(step);
    let resultArray = [];

    for (let i = 0; i < array.length; i+=number) {
        let element = array[i]; // 5 31 20
        //console.log(element);
        resultArray.push(element);
    }
    return resultArray;
}


// getEveryN_Element(['5','20','31','4','20'],2);  //['5', '31','20']
// console.log(`--------------------------------`);
// getEveryN_Element(['dsa','asd','test','tset'],2); // ['dsa', 'test']
// console.log(`--------------------------------`);
// getEveryN_Element(['1','2','3','4','5'],6); // ['1']


//****************************************************************************************************** */




//03. Add and Remove Elements 


function addAndRemoveElements(commandsInArray){

    let resultArray = [];
    let count = 0;

    for (let i = 0; i < commandsInArray.length; i++) {
        let element = commandsInArray[i];
        count++;

        if (element === 'add') {
            resultArray.push(count); 
        }
        if (element === 'remove'){
            resultArray.pop();
        }
    }

    if (resultArray.length === 0 ){
        console.log('Empty');
    } else {

        for (let j = 0; j < resultArray.length; j++) {
            let element = resultArray[j];
            console.log(element);
        }
    }
}

// addAndRemoveElements(['add','add','add','add']); //1 2 3 4
// console.log(`------------------------------------------`);
// addAndRemoveElements(['add','add','remove','add','add']); //1 4 5
// console.log(`------------------------------------------`);
// addAndRemoveElements(['remove','remove','remove']); // Empty


//********************************************************************************************************* */




//4. Rotate Array

// The array should be rotated to the right side, meaning that the last
// element should become the first, upon rotation. 

function rotateArray(arr, amountRotation){

    let count = amountRotation;
    let resultArray = [...arr];

    for (let i = 0; i < count; i++) {
      
       let cutElement = resultArray.pop(); // 4 , 3
       //console.log(cutElement);
        
       resultArray.unshift(cutElement);
    }
    console.log(resultArray.join(' '));
}


// rotateArray(['1','2','3','4'],2);  //3 4 1 2 
// console.log(`--------------------------------`);
// rotateArray(['Banana','Orange','Coconut','Apple'],15); // Orange Coconut Apple Banana



//********************************************************************************************************* */




// 5. Extract Increasing Subset from Array


function filterOnlyBiggest(array){

    let arr = [...array];
    let buffArray = [];
    let x = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let numberX = Number(arr[i]);

        if (numberX >= x){
            buffArray.push(numberX);
            x = numberX;
        }   
    }
    //console.log(buffArray);
    return buffArray;


            // alternative to the top whit REDUCE
            let biggest = Number.MIN_SAFE_INTEGER;

            const output = arr.reduce((acc, curr) => {
                if (curr >= biggest) {
                biggest = curr;

                const tempArr = acc;
                tempArr.push(curr);
                return tempArr;
                }

                return acc;
            }, []);

            return output;
}

// filterOnlyBiggest([1,3,8,4,10,12,3,2,24]); // [1, 3, 8, 10, 12, 24]
// console.log(`-----------------------`);
// filterOnlyBiggest([1,2,3,4]); // [1, 2, 3, 4]
// console.log(`-----------------------`);
// filterOnlyBiggest([20,3,2,15,6,1]); // [20]


//******************************************************************************************************** */



// 06. List Of Names


// You will receive an array of names. Sort them alphabetically in ascending order and print a 
// numbered list of all the names, each on a new line.

function sortListNames(arr){

    let array = [...arr];

    array.sort( (a,b) => a.localeCompare(b)); //['Bob', 'Christina', 'Ema', 'John']

    let count = 1;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        console.log(`${count}.${element}`);
        count++;
    }
}


sortListNames(["John","Bob","Christina","Ema"]);
// 1.Bob
// 2.Christina
// 3.Ema
// 4.John


//******************************************************************************************************* */



// 07. Sorting Numbers

// function that sorts an array of numbers so that the first element is the smallest one, the second is the
// biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.
// Return the resulting array.

function sortNumbers(arr){

    let array = [...arr];
    let buffArr =[];
    array.sort( (a,b) => a-b); //(10) [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]

    while (array.length !== 0) {
        let x  = array.shift()
        let y = array.pop()
        buffArr.push(x,y); //-3, 65
    }

    //console.log(buffArr); //(10) [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
    return buffArr;
}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]); // [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]


//************************************************************************************************************ */

 
// 8. Sort an Array by 2 Criteria   !!!!!!!!!!!!!!!!!!!!


// Write a function that orders a given array of strings, by a length in ascending order as primary criteria, 
// and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.

function sortArrBy2Criteria(arr){

    let array = [...arr];

    let result = array.sort( (a,b) => {
        let criteria1 = a.length - b.length ;// word length
        let criteria2 = a.localeCompare(b); // by alphabetical
        return criteria1 || criteria2
    });

    //console.log(result); //['beta', 'alpha', 'gamma']

    //print logic
    for (let i = 0; i < result.length; i++) {
        let element = result[i];
        console.log(element);
    }
}


sortArrBy2Criteria(['alpha','beta', 'gamma']);
// beta
// alpha
// gamma
console.log(`----------------------------`);
sortArrBy2Criteria(['Isacc','Theodor', 'Jack','Harrison','George']);
// Jack
// Isacc
// George
// Theodor
// Harrison
console.log(`----------------------------`);
sortArrBy2Criteria(['test','Deny', 'omen','Default']);
// Deny
// omen
// test
// Default


//************************************************************************************************************ */



// Multidimensional Arrays (Matrices)


// 9. Magic Matrices

// function that checks if a given matrix of numbers is magical. A matrix is magical if the sums 
// of the cells of every row and every column are equal.
// The input comes as an array of arrays, containing numbers (number 2D matrix). 
// The input numbers will always be positive.


function mMatrix(arr){
    let matrix = [...arr];
    let arr1 = matrix[0];
    let refSumRow = 0;

    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        refSumRow += element;
    }

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;
    
        for (let col = 0; col < matrix.length; col++) {
          sumRow += matrix[col][row];
          sumCol += matrix[row][col];
        }
    
        if (refSumRow !== sumRow || refSumRow !== sumCol) {
          //console.log(false);
          return false;
        }
      }
      //console.log(true);
      return true;
}

mMatrix([[4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]);  //true
console.log(`------------------------------------`);
mMatrix([[11, 32, 45],
        [21, 0, 1],
        [21, 1, 1]]); // false 
console.log(`------------------------------------`);
mMatrix([[1, 0, 0],
        [0, 0, 1],
        [0, 1, 0]]); // true



//******************************************************************************************************* */





// https://softuni.bg/downloads/svn/js-advanced/May-2023/JS-Advanced/02.%20JS-Advanced-Arrays-and-Nested-Arrays/02.%20JS-Advanced-Arrays-and-Nested-Arrays-Exercise.pdf
// https://judge.softuni.org/Contests/Compete/Index/2753#12



// 10. Tic-Tac-Toe



//********************************************************************************* */

//11. Diagonal Attack
// https://pastebin.com/vS917DEC

//******************************************************************************** */

// 12. *Orbit
//https://pastebin.com/jLYDF9gj

//*************************************************************************************** */

//13. Spiral Matrix
// https://pastebin.com/GDywE8zj


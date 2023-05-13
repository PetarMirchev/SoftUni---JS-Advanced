

                                                // Lecture 1


// 1. Echo Function


function EchoFunction(data) {
    console.log(`${data.length}`);
    console.log(`${data}`);

}

EchoFunction('Hello, JavaScript!');
// 18
// Hello, JavaScript!
EchoFunction('strings are easy');
// 16
// strings are easy




//**************************************************************************************************** */



//2. String Lengths


function stringsLength(word1, word2, word3) {
    let count1 = word1.length;
    let count2 = word2.length;
    let count3 = word3.length;

    let sumLength = count1 + count2 + count3;
    let avrLength = sumLength / 3;

    console.log(sumLength);
    console.log(avrLength.toFixed());
}

stringsLength('chocolate', 'ice cream', 'cake');
// 22
// 7
stringsLength('pasta', '5', '22.3');
// 10
// 3



//****************************************************************************************************** */



                                //3. Largest Number

function largeNumber(num1, num2, num3) {
    let arr = [num1, num2, num3]; //5, -3, 16
    let buff = arr.sort( (a,b) => a - b); //[-3, 5, 16]

    console.log(`The largest number is ${buff[2]}.`); //16
}

largeNumber(5, -3, 16);
//The largest number is 16.
largeNumber(-3, -5, -22.5 );
//The largest number is -3.



//***************************************************************************************************** */



// 4. Circle Area


function circleArea(input){
   let inputType =  typeof(input); //number, string, ....

   if(inputType !== 'number') {  // inputType = string
    return console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
   }

   //else
   // is a number, assume it is the radius of a circle and calculate the circle area. 
   //Print the area rounded to two decimal places.
   let result = Math.pow(input,2) * Math.PI;
   console.log(result.toFixed(2));

}

circleArea(5);
// 78.54
circleArea('name');
// We can not calculate the circle area, because
// we receive a string.




//**************************************************************************************************** */



//05. Math Operations


function Operations(number1, number2, operant){
    let x = Number(number1);
    let y = Number(number2);
    //The string may be one of the following: '+', '-', '*', '/', '%', '**'
    let charX = String(operant);
    let result = 0;

    switch (operant) {
        case '+': { result = x + y; } break;
        case '-': { result = x - y; } break;
        case '*': { result = x * y; } break;
        case '/': { result = x / y; } break;
        case '%': { result = x % y; } break;
        case '**': { result = x ** y; } break;
    }

    console.log(result);
}

Operations(5, 6, '+' ); // 11
Operations(3, 5.5, '*'); //16.5


//*************************************************************************************************** */



//6. Sum of Numbers N…M


function sumNumbers(n, m){
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;


    for (let i = num1; i <= num2; i++) {
        let currentNumber = i;
        result += currentNumber;
    }

    console.log(result);
}

sumNumbers('1', '5' ); // 15
sumNumbers('-8', '20');  // 174




//**************************************************************************************************** */



//7. Day of Week


function dayOfWeek(input){
    let day = String(input);

    switch(day){
        case 'Monday': { console.log(1); } break;
        case 'Tuesday': { console.log(2); } break;
        case 'Wednesday': { console.log(3); } break;
        case 'Thursday': { console.log(4); } break;
        case 'Friday': { console.log(5); } break;
        case 'Saturday': { console.log(6); } break;
        case 'Sunday': { console.log(7); } break;
        default : { console.log(`error`); } break;
    }
}


dayOfWeek('Monday'); // 1
dayOfWeek('Friday'); // 5
dayOfWeek('Invalid'); // error


//****************************************************************************************************** */



//  8. Days in a month


function dayOfMonth(month, year) {
    
    // 31
    const daysInMonth = getDaysInMonth(year, month); //(2012, 1); 
    console.log(daysInMonth); // 👉️ 31
         

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      }
    
      
    /*  

       function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
        }

    //   const date = new Date();
    //   const currentYear = date.getFullYear();
    //   const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based
      
    //   // 👇️ Current Month
    //   const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
    //   console.log(daysInCurrentMonth); // 👉️ 31
      
    //   // 👇️ Other Months
    //   const daysInJanuary = getDaysInMonth(2025, 1);
    //   console.log(daysInJanuary); // 👉️ 31
      
    //   const daysInSeptember = getDaysInMonth(2025, 9);
    //   console.log(daysInSeptember); // 👉️ 30

    */  
}

//The output must return the number of days in a month for a given year.
dayOfMonth(1, 2012 ); // 31
dayOfMonth(2, 2021); // 28



//****************************************************************************************************** */





// 9. Square of Stars


function printRectangle(number){
    //If there is no parameter specified, the rectangle should always be of size 5.
    let x = typeof(number); //number, string, NaN....
    
    if(x === 'number'){ // 1,4,6,9,111 ...
        for (let i = 0; i < number; i++) {
            let arr =[];

            for (let j = 0; j < number; j++) {
                arr.push('*');
            }

            console.log(arr.join(' '));
        }

    } else {
        for (let i = 0; i < 5; i++) {
            let arr =[];

            for (let j = 0; j < 5; j++) {
                arr.push('*');
            }
            
            console.log(arr.join(' '));
        }
    }
}

printRectangle(2);
printRectangle(5);
printRectangle(7);
printRectangle('adsasd');



//****************************************************************************************************** */




//10. Aggregate Elements


function AggregateElements(inputArr){

    let sumArr = 0;

    //Sum(ai) - calculates the sum of all elements from the input array
    for (let i = 0; i < inputArr.length; i++) {
        let el = Number(inputArr[i]);
        sumArr += el;
    }

    //Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    let convertArr = inputArr.map(Number);
    let inverseValuesSum = convertArr.reduce((a, b) => a + 1 / b, 0); 
    
    //Concat(ai) - concatenates the string representations of all elements from the array
    let joinArr = inputArr.join("");

    console.log(sumArr);
    console.log(inverseValuesSum);
    console.log(joinArr);
}

AggregateElements([1, 2, 3]);
// 6
// 1.8333333333333333
// 123

AggregateElements([2, 4, 8, 16] );
// 30
// 0.9375
// 24816
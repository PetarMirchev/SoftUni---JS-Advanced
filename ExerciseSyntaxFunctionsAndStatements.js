
// UPR 1

// 01. Fruit

// function buyFruits(fruit, amount, price) {

//     let vegetables = fruit;
//     let amountInKG = amount /1000;
//     let priceFor1KG = price;
//     let moneyNeeded = 0;

//     moneyNeeded = amountInKG * priceFor1KG;

//     console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${amountInKG.toFixed(2)} kilograms ${vegetables}.`);
// }

// buyFruits('orange', 2500, 1.80);
// // I need $4.50 to buy 2.50 kilograms orange.

// buyFruits('apple', 1563, 2.35);
// // I need $3.67 to buy 1.56 kilograms apple.


//******************************************************************************************************* */



//02. Greatest Common Divisor – GCD


// function GCD(num1, num2) {

//     while(num2) {
//         let temp = num2;
//         num2 = num1 % num2;
//         num1 = temp;
//     }

//     console.log(num1);
// }

// GCD(15, 5);// 5
// GCD(2154, 458); // 2



//****************************************************************************************************** */


//3. Same Numbers 


// function sameNumbers(numberInput) {
//     let arr = numberInput.toString().split(''); //['1', '2', '3', '4']
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let el = Number(arr[i]);
//         sum += el; //10
//     }

//     //Print on the console true if all numbers are the same and false if not.
//     function AllValuesSAme(array){
//         let arr1 = array;
//         for (let j = 0; j < arr1.length; j++) {
//             if(arr1[0] !== arr1[j]){ // 1 !== 4 --> false
//                 return false;
//             }
//         }
//         return true;
//     }
//     //console.log(arr);
//     console.log(AllValuesSAme(arr));
//     console.log(sum);
// }


// sameNumbers(2222222);
// //true 
// //14
// sameNumbers(1234);
// //false
// //10



//****************************************************************************************************** */



//4. Previous Day


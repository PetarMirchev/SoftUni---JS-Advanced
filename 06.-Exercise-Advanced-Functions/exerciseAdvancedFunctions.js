
// Exercise: Advanced Functions


//1. Sort Array

//function that sorts an array with numeric values in ascending or descending order, depending on an
// argument that is passed to it. 


// function sortArray(arr , str){

//     let arr1 =[...arr];
//     let command = str;

//     switch(command){
//        case 'asc': {return arr1.sort((a,b) => a - b)} break;
//        case 'desc': {return arr1.sort((a,b) => b - a)} break;
//        default: {return}; 
//     }
// //     console.log(arr1);
// }

// sortArray([14, 7, 17, 6, 8], 'asc'); // [6, 7, 8, 14, 17]
// console.log(`-----------------------------`);
// sortArray([14, 7, 17, 6, 8], 'desc' ); // [17, 14, 8, 7, 6]



// // alternative solve
// function solve(arrayOfNumbers, type) {
//     // dictionary
//     const dict = {
//       asc: (a, b) => a - b,
//       desc: (a, b) => b - a,
//     };
  
//     const result = arrayOfNumbers.sort(dict[type]);
//     return result;
// }



//***************************************************************************************************** */



// 2. Argument Info




// function argumentInfo() {

//   obj = {}; //buffer

//   for (let arg of arguments) { 
//     console.log(`${typeof(arg)}: ${arg}`); //string: cat, number: 42, function: function () { console.log('Hello world!'); }


//     if (! obj[typeof(arg)]) { // check type is in obj --> no add type(number) = pcs (1)
//       obj[typeof(arg)] = 1;
//     } else { // is already in count just add +1
//       obj[typeof(arg)] += 1;
//     }

//   }
//   //return console.table(obj);

// //At the end print a tally with counts for each type in descending order, each on a new line
// let sortKeys =  Object.entries(obj).sort((a,b) => b[1] - a[1]);
// sortKeys.forEach(([k, value]) => console.log(`${k} = ${value}`));
// // console.table(sortKeys);

// // ┌─────────┬────────────┬───┐
// // │ (index) │     0      │ 1 │
// // ├─────────┼────────────┼───┤
// // │    0    │  'string'  │ 1 │
// // │    1    │  'number'  │ 1 │
// // │    2    │ 'function' │ 1 │
// // └─────────┴────────────┴───┘

// // string = 1
// // number = 1
// // function = 1
// // {string: 1, number: 1, function: 1}
// }

// argumentInfo('cat', 42, function () { console.log('Hello world!'); });

// string: cat
// number: 42
// function: function () { console.log('Hello world!'); }
// string = 1
// number = 1
// function = 1





//*************************************************************************************************** ****/



//03. Fibonacci


// function getFibonator(){
  
//   let a = 0;
//   let b = 1;

//   return function fib() {
//     let result = a + b;
//     a = b;
//     b = result;
//    return a; 
//   }
// }


// let fib = getFibonator();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13


//******************************************************************************************************** */






// 04. Breakfast Robot



function breakfastRobot(){
  // protein={qty} carbohydrate={qty} fat={qty} flavour={qty}
  let supplies = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }; // buffer house!


    let foodRecipes = {
      apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
      lemonade: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
      burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
      eggs: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
      turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
      //        key    value
      // ['carbohydrate', 5] ['fat': 1] [flavour: 1]

      
      cookRecipe(recipe, quantity) { // cook staff!!!!!

        let reducedQuantity = {}; //buffer

        //loop on all materials 
        for (let value in this[recipe]) {
          
          if (this[recipe][value] * quantity > supplies[value] ){ 
            // this: {
            //     apple: {
            //         protein: number;...
            return `Error: not enough ${value} in stock`;
          }

          //stack ingredients if is available to be remove after finishing cooking
          reducedQuantity[value] = supplies[value] - this[recipe][value] * quantity;
          // reducedQuantity[quantity] --> error
        }

//static method copies all enumerable own properties from one or more source objects to a target object. 
//It returns the modified target object (Object.assign()).
        Object.assign(supplies, reducedQuantity);
        return 'Success';
      }
    }


  return controller = (str) => {
    // 'restock'  --> restock <microelement> <quantity>
    if(str.includes('restock')){    //"restock flavour 50"
      let [du, microelement, quantity] = str.split(' ');
      // pass in to the OBJ->supplies
      supplies[microelement] += Number(quantity); 
      return 'Success';// Success - when restocking or completing cooking without errors
    }


    //'prepare' --> prepare <recipe> <quantity>
    if (str.includes('prepare')){   //"prepare lemonade 4"
      let [du, recipe, quantity] = str.split(' ');
      return foodRecipes.cookRecipe(recipe, Number(quantity)); // call recipes list & cook! <-----
    }


    //"report" --> protein={qty} carbohydrate={qty} fat={qty} flavour={qty} - when a report is requested,
    if (str.includes("report")){ //
    return `protein=${supplies.protein} carbohydrate=${supplies.carbohydrate} fat=${supplies.fat} flavour=${supplies.flavour}`;
    }
 }

}


const manager = breakfastRobot();
//*****------------------------------------------- */
// console.log (manager ("restock flavour 50")); // Success
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
//*----------------------------------------------- */
console.log(manager("restock carbohydrate 10")); // Success
console.log(manager("restock flavour 10")); // Success
console.log(manager("prepare apple 1")); // Success
console.log(manager("restock fat 10")); // Success
console.log(manager("prepare burger 1")); // Success
console.log(manager("report")); //'protein=0 carbohydrate=4 fat=3 flavour=5'
//*-----------------------------------------------------------*/
// console.log(manager('prepare turkey 1')); //'Error: not enough protein in stock'
// console.log(manager('restock protein 10'));//'Success'
// console.log(manager('prepare turkey 1')); //'Error: not enough carbohydrate in stock'
// console.log(manager('restock carbohydrate 10')); //'Success'
// console.log(manager('prepare turkey 1')); //'Error: not enough fat in stock'
// console.log(manager('restock fat 10')); //'Success'
// console.log(manager('prepare turkey 1')); //'Error: not enough flavour in stock'
// console.log(manager('restock flavour 10')); //'Success'
// console.log(manager('prepare turkey 1')); //'Success'
// console.log(manager('report')); //'protein=0 carbohydrate=0 fat=0 flavour=0'





//***************************************************************************************************** */




// 05. Functional Sum


function add(num) {
  let sum = 0;
  sum += num;

  function calc(anotherNum) {
    sum += anotherNum;
    return calc;
  }

  calc.toString = () => sum;
  return calc;
}

console.log(add(1)(2)(3)(4)(5).toString());



//********************************************************************************************* */





// 06. Monkey Patcher *


function monkeyPatcher(action) {
  let that = this;
  let obj = (() => {
      function upvote() { that.upvotes++}
      function  downvote() {that.downvotes++}
      function score() {
          let obfuscated = that.upvotes + that.downvotes > 50;
          let votesToAdd = Math.ceil(0.25 * Math.max(that.upvotes, that.downvotes));
          let rating;
          if(that.upvotes/(that.upvotes+that.downvotes) > 0.66){
              rating = "hot";
          } else if((that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes){
              rating = "controversial";
          } else if(that.downvotes > that.upvotes){
              rating = "unpopular";
          } else {
              rating = "new";
          }

          if(that.upvotes + that.downvotes < 10){
              rating = "new";
          }

          if(obfuscated){
              return [that.upvotes + votesToAdd, that.downvotes + votesToAdd, that.upvotes - that.downvotes, rating];
          } else {
              return [that.upvotes, that.downvotes, that.upvotes - that.downvotes, rating];
          }
      }
      return {upvote, downvote, score};
  })();

  return obj[action]();
}
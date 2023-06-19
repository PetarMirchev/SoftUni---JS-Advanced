

//02. String Extension



// Extend the built-in String object with additional functionality. Implement the following functions:
// * ensureStart(str) – if the current string doesn't start with the str parameter, return a new string in
// which str parameter appended to the beginning of the current string, otherwise returns the original string

// * ensureEnd(str) – if the current string doesn't end with str parameter, return a new string in which str
// parameter appended to the end of the current string, otherwise returns the original string

// * isEmpty() - return true if the string is empty and false otherwise

// * truncate(n) – returns the string truncated to n characters by removing words and appends an ellipsis
// (three periods) to the end. If a string is less than n characters long, return the same string. If it is longer, split
// the string where a space occurs and append an ellipsis to it so that the total length is less than or equal to n.
// If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, return n
// amount of periods.

// * format(string, …params) - static method to replace placeholders with parameters. A placeholder is a
// number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not
// modify it. Note static methods are attached to the String object instead of its prototype. See the examples
// for more info.



(function solveProblemString() {

// ! ensureStart(str) – if the current string doesn't start with the str parameter, return a new string in
// which str parameter appended to the beginning of the current string, otherwise returns the original string
    String.prototype.ensureStart = function (str) {
        let currString = this.toString();
        if(!currString.startsWith(str)){ //mdn --> String.prototype.startsWith();
            return `${str}${currString}`;
        }

        return currString;
    };


// ! ensureEnd(str) – if the current string doesn't end with str parameter, return a new string in which str
// parameter appended to the end of the current string, otherwise returns the original string
    String.prototype.ensureEnd = function (str) {
        let currString = this.toString();
        if(!currString.endsWith(str)){
            return `${currString}${str}`;
        }

        return currString;
    }


// ! isEmpty() - return true if the string is empty and false otherwise
    String.prototype.isEmpty = function () {
        let currString = this.toString();

        if (currString.length === 0){
            return true;
        } else {
            return false;
        }
    };
    
// ! truncate(n) – returns the string truncated to n characters by removing words
    String.prototype.truncate = function (n) {
        let currString = this.toString();
// If no space occurs anywhere in the string, return n - 3 characters and an ellipsis. If n is less than 4, 
//return n amount of periods.
        if(n <= 3){
            return ".".repeat(n);
        }
        if (n >= currString.length){
            return  currString; 
        }
  
        let cutValue = currString.substr(0, n - 2);
        let lastIndex = cutValue.lastIndexOf(" ");

        if (lastIndex !== -1){
            return `${currString.substr(0, lastIndex)}`+ "...";
        }

        return `${currString.substr(0, n - 3)}`+ "...";
     };



// * format(string, …params) - static method to replace placeholders with parameters. A placeholder is a
// number surrounded by curly braces. If parameter index cannot be found for a certain placeholder, do not
// modify it.

    String.format = function (string, ...params) { //('The {0} {1} fox', 'quick', 'brown')
        let str = string; //'The {0} {1} fox'

        for (let i = 0; i < params.length; i++) {
            // let element = params[i]; //'quick', 'brown' ...
            // console.log(element); 

            let index = str.indexOf(`{${i}}`); // 4, 8

            // until we have correct index to change
            while(index !== -1) {
                str = str.replace(`{${i}}`, params[i]); // {0} -->  0: 'quick'
                index = str.indexOf(`{${i}}`);
            }
        }

        return str; //The quick brown foxs
    }
})()


// tests:
let str = 'my string';
str = str.ensureStart('my');
console.log(str);

str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

str = String.format('The {0} {1} fox', 'quick', 'brown');
 console.log(str);

str = String.format('jumps {0} {1}', 'dog');
console.log(str);


// 'my string' // 'my' already present
// 'hello my string'
// 'hello my string' // length is 15
// 'hello my...' // length is 11
// 'hello...'
// 'h...'
// '..'
// 'The quick brown fox'
// 'jumps dog {1}' // no parameter at 1




//***************************************************************************************************** */
//! bonus call functions
console.log("-------------------------------------------");


function solve1() {
  console.log("invoked manually1");
}
solve1();

const solve2 = function () {
  console.log("invoked manually2");
};
solve2();


const solve3 = () => {
    console.log("invoked manually3");
  };
solve3();

// IIFE -> immediately invoked function expression
(function () {
  console.log("invoked automatically");
})();
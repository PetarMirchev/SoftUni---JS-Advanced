// Exercises: Prototypes and Inheritance


//  1. Array Extension



// Extend the built-in Array object with additional functionality. Implement the following functionality:
// * last() - returns the last element of the array
// * skip(n) - returns a new array which includes all original elements, except the first n elements; n is a
// Number parameter
// * take(n) - returns a new array containing the first n elements from the original array; n is a Number
// parameter
// * sum() - returns a sum of all array elements
// * average() - returns the average of all array elements



(function solveProblem() {

    //! last() - returns the last element of the array
    Array.prototype.last = function() { // [1, 2, 3, 4, 5];
        return this[this.length - 1];  //5
    }


    //! skip(n) - returns a new array which includes all original elements, except the first n elements;
    Array.prototype.skip = function(n){ //[1, 2, 3, 4, 5];
        let newArray = [];
        for (let i = n; i < this.length; i++) { 
            newArray.push(this[i]);
        }
        return newArray;  //[3, 4, 5]
    }


    //! take(n) - returns a new array containing the first n elements from the original array;
     Array.prototype.take = function (n) {  //[1, 2, 3, 4, 5];
        let newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(this[i]);   
        }

        return newArray; //[1, 2]
     }  


     //! sum() - returns a sum of all array elements
     Array.prototype.sum = function () {  //[1, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
                sum += this[i];
        }
        return sum; // 15
     } 

     //! average() - returns the average of all array elements
     Array.prototype.average = function () {  //[1, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
                sum += this[i];
        }
        return sum / this.length; // 15 /5 --> 3
     } 

})()




//tests:
const arr = [1, 2, 3, 4, 5];
const lastEl = arr.last();
console.log(lastEl);

const skippedColection = arr.skip(2);
console.log(skippedColection);

const takeCollection = arr.take(2);
console.log(takeCollection);

const summed = arr.sum();
console.log(summed);

const avg = arr.average();
console.log(avg);
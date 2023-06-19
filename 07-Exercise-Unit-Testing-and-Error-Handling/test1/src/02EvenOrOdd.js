const chai = require("chai");
//const { describe } = require("mocha");
const expect = chai.expect;

//02. Even Or Odd


// You need to write unit tests for a function isOddOrEven() that checks whether the length of a 
// passed string is even or odd.
// If the passed parameter is NOT a string return undefined. If the parameter is a string return 
// either "even" or "odd" based on the length of the string.

// function to test:
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
   }
  
   

   // logical code for testing the function isOddOrEven() !
   
//    We can see there are three outcomes for the function:
//     Returning undefined
//     Returning "even"
//     Returning "odd"

describe("Test Even or Odd functionality", function () {
    it("Test for undefined", function () {
      expect(isOddOrEven(1)).to.equal(undefined);
    });
  
    it("Test for even", function () {
      expect(isOddOrEven("abcd")).to.equal("even");
    });
  
    it("Test for odd", function () {
      expect(isOddOrEven("abc")).to.equal("odd");
    });
  });
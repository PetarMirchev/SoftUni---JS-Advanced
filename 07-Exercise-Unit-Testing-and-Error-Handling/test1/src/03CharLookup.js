
//3. Char Lookup

// You are given a function named lookupChar(), which has the following functionality:
//  lookupChar(string, index) - accepts a string and an integer (the index of the char we want to
// lookup) :

// o If the first parameter is NOT a string or the second parameter is NOT a number - return
// undefined.
// o If both parameters are of the correct type but the value of the index is incorrect (bigger than or
// equal to the string length or a negative number) - return "Incorrect index".
// o If both parameters have correct types and values - return the character at the specified
// index in the string.


function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
        
    return string.charAt(index);
}


//  Returning undefined
//  Returning an "Incorrect index"
//  Returning the char at the specified index
// Now that we have our exit conditions we should start checking in what situations we can reach them. If any of the
// parameters are of incorrect type, undefined should be returned. 


//100 /100 

describe("retrieve character at index from string parameter", () => {
    it("valid input -> (a, 0) => a", () => {
      expect(lookupChar("a", 0)).to.eq("a");
    });
  
    it("valid input -> (ab, 1) => b", () => {
      expect(lookupChar("ab", 1)).to.eq("b");
    });
  
    it("invalid input - second parameter is floating point number", () => {
      expect(lookupChar("a", 1.1)).to.be.undefined;
    });
  
    it("invalid input - first parameter not a string", () => {
      expect(lookupChar(0, 0)).to.be.undefined;
    });
  
    it("invalid input - second parameter is string", () => {
      expect(lookupChar("a", "a")).to.be.undefined;
    });
  
    it("invalid input - second parameter is negative number", () => {
      expect(lookupChar("a", -1)).to.eq("Incorrect index");
    });
  
    it("invalid input - second parameter is out of bounderies", () => {
      expect(lookupChar("a", 1)).to.eq("Incorrect index");
    });
  });




  //****************************************** */



  //83/100

  describe('test for Char Lookup', function () {
    //test for undefined
    it("test 1.1 for Returning undefined", function () {
      expect(lookupChar([], 'sd')).to.equal(undefined);
    });
    it("test 1.2 for Returning undefined", function () {
      expect(lookupChar(123, 1.23)).to.equal(undefined);
    });
    it("test 1.3 for Returning undefined", function () {
      expect(lookupChar('shddjashd', {})).to.equal(undefined);
    });
    it("test 1.4 for Returning undefined", function () {
      expect(lookupChar(0, 0)).to.equal(undefined);
    });
  
    //"Incorrect index"  --> (string.length <= index || index < 0) 
    it("test 2.1 for Returning Incorrect index", function () {
      expect(lookupChar('sh', 9)).to.equal("Incorrect index");
    });
    it("test 2.2 for Returning Incorrect index", function () {
      expect(lookupChar("s", -1)).to.equal("Incorrect index");
    });
  
  
    //valid data input 
  
    it("valid input -> (a, 0) => a", () => {
      expect(lookupChar("a", 0)).to.eq("a");
    });
  
    it("valid input -> (ab, 1) => b", () => {
      expect(lookupChar("ab", 1)).to.eq("b");
    });
  
  });
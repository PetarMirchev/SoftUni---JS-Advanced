const { mathEnforcer } = require('../src/app');
const expect = require('chai').expect;
const { assert } = require('chai');
























//**************************************************************************************************** */


// // 100/100
// describe('mathEnforcer', () => {
//     describe('addFive()', () => {
//         it('should return undefined if passed element is non a number parameter', () => {
//             expect(mathEnforcer.addFive("s1")).to.equal(undefined);          
//             expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
//             expect(mathEnforcer.addFive(null)).to.equal(undefined);
//         });
//         it('should return correct result (+5) if a parameter is number ', () => {
//             expect(mathEnforcer.addFive(1)).to.equal(6);          
//             expect(mathEnforcer.addFive(-4)).to.equal(1);
//             expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01); // <----!!!!
//         });
//     });

//     describe('subtractTen()', () => {
//         it('should return undefined result if a passed parameter is not number!', () => {
//             expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
//             expect(mathEnforcer.subtractTen('s1')).to.equal(undefined);          
//             expect(mathEnforcer.subtractTen(null)).to.equal(undefined); 
//         });

//         it('should return correct result (-10) if a parameter is number ', () => {
//             expect(mathEnforcer.subtractTen(1)).to.equal(-9);          
//             expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
//             expect(mathEnforcer.subtractTen(11.5)).to.be.closeTo(1.5, 0.01); // <----!!!!
//         });
//     });



//     describe('sum()', () => {
//         it('should return undefined result if a passed parameter is not number!', () => {
//             expect(mathEnforcer.sum("0","2")).to.equal(undefined); 
//             expect(mathEnforcer.sum('s1', 2)).to.equal(undefined);          
//             expect(mathEnforcer.sum(3, "k")).to.equal(undefined); 
//         });

//         it('should return correct result (-10) if a parameter is number ', () => {
//             expect(mathEnforcer.sum(1, 2)).to.equal(3);          
//             expect(mathEnforcer.sum(5.5, 6)).to.be.closeTo(11.5, 0.01);
//             expect(mathEnforcer.sum(5, 11.5)).to.be.closeTo(16.5, 0.01); // <----!!!!
//         });
//     });
// });








//************************************************************************************************ */


// describe('test for Char Lookup', function () {
//   //test for undefined
//   it("test 1.1 for Returning undefined", function () {
//     expect(lookupChar([], 'sd')).to.equal(undefined);
//   });
//   it("test 1.2 for Returning undefined", function () {
//     expect(lookupChar(123, 1.23)).to.equal(undefined);
//   });
//   it("test 1.3 for Returning undefined", function () {
//     expect(lookupChar('shddjashd', {})).to.equal(undefined);
//   });
//   it("test 1.4 for Returning undefined", function () {
//     expect(lookupChar(0, 0)).to.equal(undefined);
//   });

//   //"Incorrect index"  --> (string.length <= index || index < 0) 
//   it("test 2.1 for Returning Incorrect index", function () {
//     expect(lookupChar('sh', 9)).to.equal("Incorrect index");
//   });
//   it("test 2.2 for Returning Incorrect index", function () {
//     expect(lookupChar("s", -1)).to.equal("Incorrect index");
//   });


//   //valid data input 

//   it("valid input -> (a, 0) => a", () => {
//     expect(lookupChar("a", 0)).to.eq("a");
//   });

//   it("valid input -> (ab, 1) => b", () => {
//     expect(lookupChar("ab", 1)).to.eq("b");
//   });

// });









//********************************************************* */

// describe("Test Even or Odd functionality", function () {
//   it("Test for undefined", function () {
//     expect(isOddOrEven(1)).to.equal(undefined);
//   });

//   it("Test for even", function () {
//     expect(isOddOrEven("abcd")).to.equal("even");
//   });

//   it("Test for odd", function () {
//     expect(isOddOrEven("abc")).to.equal("odd");
//   });
// });









//************************************************************************************************** */

////! ok tests:
// const Cube = require('../src/app').Cube;
// const expect = require('chai').expect;

// describe('Testing the Cube Functions', function() {
// it('1. The side length of the Cube', function(done) {
// let c1 = new Cube(2);
// expect(c1.getSideLength()).to.equal(2);
// done();
// });

// it('2. The surface area of the Cube', function(done) {
// let c2 = new Cube(5);
// expect(c2.getSurfaceArea()).to.equal(150);
// done();
// });

// it('3. The volume of the Cube', function(done) {
// let c3 = new Cube(7);
// expect(c3.getVolume()).to.equal(343);
// done();
// });

// });



////! NOT OK test/break test on purpos


// const Cube = require('../src/app').Cube;
// const expect = require('chai').expect;

// describe('Testing the Cube Functions', function() {
// it('1. The side length of the Cube', function(done) {
// let c1 = new Cube(2);
// expect(c1.getSideLength()).to.equal(2);
// done();
// });

// it('2. The surface area of the Cube', function(done) {
// let c2 = new Cube(5);
// expect(c2.getSurfaceArea()).to.equal(50); //Updated to fail
// done();
// });

// it('3. The volume of the Cube', function(done) {
// let c3 = new Cube(7);
// expect(c3.getVolume()).to.equal(100); //Updated to fail
// done();
// });

// });
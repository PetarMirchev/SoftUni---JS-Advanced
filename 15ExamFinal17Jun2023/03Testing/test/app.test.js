const { assert } = require('chai');
const { lottery } = require('../src/app');
const expect = require('chai').expect;


//100/100


describe('lottery', () => {
    describe('buyLotteryTicket(ticketPrice, ticketCount, buy) //number, number, and boolean ', () => {
        it('submitted invalid parameters, throw an error', () => {
          expect(() => { lottery.buyLotteryTicket('x', 21, true) }).to.throw("Invalid input!");
          expect(() => { lottery.buyLotteryTicket( 10, '22', true) }).to.throw("Invalid input!");
          expect(() => { lottery.buyLotteryTicket( 1, 0, true) }).to.throw("Invalid input!");
                 
        });

        it('*If the value of the boolean buy is false, throw an error: ', () => {
          expect(() => { lottery.buyLotteryTicket( 10, 11, false) }).to.throw("Unable to buy lottery ticket!"); 
        });


        it('*	If the ticketPrice is greater than 0, and ticketCount is greater or equal to 1, and the type of ticketPrice  and ticketCount  is number, return the string: ', () => {
          expect(lottery.buyLotteryTicket( 10, 2, true) ).to.equal("You bought 2 tickets for 20$.");
          // expect(() => { 
          //   let ticketPrice = 1;
          //   let ticketCount = 10;
          //   lottery.buyLotteryTicket( ticketPrice, ticketCount, true) }).to.equal(`You bought ${ticketCount} tickets for ${(ticketCount * ticketPrice)}$.`);   
        });

        // it(' ', () => {
        //     expect(lottery.buyLotteryTicket(1)).to.equal(6);          
        //     expect(lottery.buyLotteryTicket(-4)).to.equal(1);
        //     expect(lottery.buyLotteryTicket(1.1)).to.be.closeTo(00, 0.00);
        // });
    });

    describe('checkTicket(ticketNumbers,luckyNumbers) // array and array.', () => {
        it('case of submitted invalid parameters, throw', () => {
          expect(() => { lottery.checkTicket('x', 21) }).to.throw("Invalid input!");
          expect(() => { lottery.checkTicket('x', []) }).to.throw("Invalid input!");
          expect(() => { lottery.checkTicket([], 'z') }).to.throw("Invalid input!");
        });


        it('Both ticketNumbers and luckyNumbers must be arrays with exact length of 6 numbers inside.', () => {
            expect(lottery.checkTicket([1,2,3,4,5,6],[1,2,3,4,5,6])).to.equal("You win the JACKPOT!!!");          
            expect(lottery.checkTicket([99,77,88,4,5,6],[11,22,33,4,5,6])).to.equal("Congratulations you win, check your reward!");
        });
    });



    describe('secondChance(ticketID, secondChanceWinningIDs) // number and array.', () => {
        it('submitted invalid parameters, throw an error', () => {
          expect(() => { lottery.secondChance('x', 21) }).to.throw("Invalid input!");
          expect(() => { lottery.secondChance('x', [1]) }).to.throw("Invalid input!");
          expect(() => { lottery.secondChance([2], 'z') }).to.throw("Invalid input!");
        });


        it('checks whether the ticketID is included in the secondChanceWinningIDs array. --> "You win our second chance prize!"', () => {
          expect(lottery.secondChance(1,[1,2,3,4,5,6,7,8])).to.equal("You win our second chance prize!");          
        });

        it('checks whether the ticketID is included in the secondChanceWinningIDs array. -->  Sorry, your ticket didnt win!', () => {        
          expect(lottery.secondChance(9,[2,1,3,4,5,5,7,8])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});




















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
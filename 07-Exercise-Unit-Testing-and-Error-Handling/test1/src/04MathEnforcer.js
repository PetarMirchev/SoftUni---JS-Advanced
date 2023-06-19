//4. Math Enforcer

// Your task is to test an object named mathEnforcer, which should have the following functionality:
//  addFive(num) - A function that accepts a single parameter:
// o If the parameter is NOT a number, the function should return undefined.
// o If the parameter is a number, add 5 to it, and return the result.

//  subtractTen(num) - A function that accepts a single parameter:
// o If the parameter is NOT a number, the function should return undefined.
// o If the parameter is a number, subtract 10 from it, and return the result.

//  sum(num1, num2) - A function that accepts two parameters:
// o If any of the 2 parameters is NOT a number, the function should return undefined.
// o If both parameters are numbers, the function should return their sum. 


let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
    return num + 5;
    },

    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
    return num - 10;
    },

    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
    return num1 + num2;
    }
};

//   module.exports = { mathEnforcer };




//test functionality:

const chai = require("chai");
const { expect } = chai;

// 100/100
describe('mathEnforcer', () => {
    describe('addFive()', () => {
        it('should return undefined if passed element is non a number parameter', () => {
            expect(mathEnforcer.addFive("s1")).to.equal(undefined);          
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });
        it('should return correct result (+5) if a parameter is number ', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);          
            expect(mathEnforcer.addFive(-4)).to.equal(1);
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.01); // <----!!!!
        });
    });

    describe('subtractTen()', () => {
        it('should return undefined result if a passed parameter is not number!', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('s1')).to.equal(undefined);          
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined); 
        });

        it('should return correct result (-10) if a parameter is number ', () => {
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);          
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(11.5)).to.be.closeTo(1.5, 0.01); // <----!!!!
        });
    });



    describe('sum()', () => {
        it('should return undefined result if a passed parameter is not number!', () => {
            expect(mathEnforcer.sum("0","2")).to.equal(undefined); 
            expect(mathEnforcer.sum('s1', 2)).to.equal(undefined);          
            expect(mathEnforcer.sum(3, "k")).to.equal(undefined); 
        });

        it('should return correct result (-10) if a parameter is number ', () => {
            expect(mathEnforcer.sum(1, 2)).to.equal(3);          
            expect(mathEnforcer.sum(5.5, 6)).to.be.closeTo(11.5, 0.01);
            expect(mathEnforcer.sum(5, 11.5)).to.be.closeTo(16.5, 0.01); // <----!!!!
        });
    });
});


//4. Balloons

//Implement a class Balloon, which is initialized with a color (String) and gasWeight (Number). 
//These two arguments should be public members.

//!Submit a function (NOT IIFE), which holds all classes, and returns them as an object.
function solve(){
    class Balloon {
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }

    class PartyBalloon extends Balloon {
    // PartyBalloon {color: 'yellow', gasWeight: 20.5, _ribbon: {color: 'red', length: 10.25}}
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color,gasWeight); 
            this.ribbonColor = ribbonColor;
//The PartyBalloon class should have a property ribbon, which is an object with color and length - the ones given upon initialization.
            this._ribbon = { color: ribbonColor, length: Number(ribbonLength) };
        }

    // The ribbon property should have a getter
        get ribbon() {
            return this._ribbon;
        }
    }


//Implement another class BirthdayBalloon, which inherits the PartyBalloon class and is initialized 
//with 1 extra parameter - text (String). The text should be a property and should have a getter
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength); 
            this._text = text;
        }

        // The text should be a property and should have a getter.
        get text() {
           return this._text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon,
    }
}





// tests:

let classes = solve();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let BirthdayBalloon = new classes.BirthdayBalloon("yellow", 20.5, "red", 10.25, "hi man!");
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
console.log(BirthdayBalloon);

// Balloon {color: 'yellow', gasWeight: 20.5}
// PartyBalloon {color: 'yellow', gasWeight: 20.5, _ribbon: {color: 'red', length: 10.25}}
// {color: 'red', length: 10.25}
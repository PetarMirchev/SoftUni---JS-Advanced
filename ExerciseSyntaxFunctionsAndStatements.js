
// UPR 1

// 01. Fruit

function buyFruits(fruit, amount, price) {

    let vegetables = fruit;
    let amountInKG = amount /1000;
    let priceFor1KG = price;
    let moneyNeeded = 0;

    moneyNeeded = amountInKG * priceFor1KG;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${amountInKG.toFixed(2)} kilograms ${vegetables}.`);
}

buyFruits('orange', 2500, 1.80);
// I need $4.50 to buy 2.50 kilograms orange.

buyFruits('apple', 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.


//******************************************************************************************************* */



//02. Greatest Common Divisor – GCD


function GCD(num1, num2) {

    while(num2) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }

    console.log(num1);
}

GCD(15, 5);// 5
GCD(2154, 458); // 2



//****************************************************************************************************** */


//3. Same Numbers 


function sameNumbers(numberInput) {
    let arr = numberInput.toString().split(''); //['1', '2', '3', '4']
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let el = Number(arr[i]);
        sum += el; //10
    }

    //Print on the console true if all numbers are the same and false if not.
    function AllValuesSAme(array){
        let arr1 = array;
        for (let j = 0; j < arr1.length; j++) {
            if(arr1[0] !== arr1[j]){ // 1 !== 4 --> false
                return false;
            }
        }
        return true;
    }
    //console.log(arr);
    console.log(AllValuesSAme(arr));
    console.log(sum);
}


sameNumbers(2222222);
//true 
//14
sameNumbers(1234);
//false
//10



//****************************************************************************************************** */



//4. Previous Day

// Write a JS function that calculates the date of the previous day by given year, month, and day.
// https://bobbyhadz.com/blog/javascript-get-number-of-days-in-month

function PreviousDay(year, month, day){
    let date = new Date(year, month - 1, day);  //Fri Sep 30 2016 00:00:00 GMT+0300 (Eastern European Summer Time)
    date.setDate(date.getDate() - 1) // Thu Sep 29 2016 00:00:00 GMT+0300 (Eastern European Summer Time)
    //console.log(date);

    let yy = date.getFullYear();
    let mm = date.getMonth() + 1; // 2016-8-29 --> 2016-9-29
    let dd = date.getDate();

    let result = `${yy}-${mm}-${dd}`;

    console.log(result);
}

PreviousDay(2016, 9, 30); // 2016-9-29
PreviousDay(2015, 5, 10); // 2015-5-9


//******************************************************************************************************* */



// 5. Time to Walk


// Write a function that calculates how long it takes a student to get to university. 
// Every 500 meters the student rests and takes a 1-minute break.


// 60/100

function studentWalk(steps, stepsInMeters, studentSpeedMeter){
    let distanceMeters = steps * stepsInMeters;  //distanceMeters: 2400
    //console.log({distanceMeters});
    let speedMeterSeconds = studentSpeedMeter / 3.6;
    let time = distanceMeters / speedMeterSeconds;

    // Every 500 meters the student rests
    let restTime = Math.floor(distanceMeters / 500); // 1200 /500 => 2.33525

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMin * 60);
    let timeHour = Math.floor(time / 3600);  // 60 * 60 = 3600

    let hh = timeHour < 10 ? "0" : "" ; // if (hour < 10) add '0' - else '' noting  
    let mm = timeMin < 10 ? "0" : "" ; //  ad '0' in front if is needed //00:28:48
    let ss = timeSec < 10 ? "0" : "" ;

    let result  = `${hh + timeHour}:${Number(mm) + timeMin + restTime}:${ss + timeSec}`;
    console.log(result);
} 

studentWalk(4000, 0.60, 5); // 00:32:48 
studentWalk(2564, 0.70, 5.5); // 00:22:35



// 100/100
function studentWalk2(steps, footprintLength, speedKmH) {
    
    let distance = steps * footprintLength;
    let speed = speedKmH * 1000 / 3600;
    let restTime = Math.floor(distance / 500) * 60;
    let totalTime = (distance /speed) + restTime;

    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

studentWalk2(4000, 0.60, 5); // 00:32:48 
studentWalk2(2564, 0.70, 5.5); // 00:22:35


//******************************************************************************************************** */



            // 06. Road Radar   *****  OBJ vs SWITCH *****
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function RadarInfo(speed, typeRoad){

    //  On the motorway, the limit is 130 km/h
    //  On the interstate, the limit is 90 km/h
    //  In the city, the limit is 50 km/h
    //  Within a residential area, the limit is 20 km/h

    const limitLibrary = { // obj analogic to --> switch (typeRoad) { case 'xxxx': {speed} break; .... }
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20, // in dis case is no DEFAULT like in SWITCH
    };
    let limits = limitLibrary[typeRoad];

    // no speeding !
    if (speed <= limits){
        console.log(`Driving ${speed} km/h in a ${limits} zone`);
        return;
    }


    let KmSpeedUp = speed - limits; // 100 - 90 --> +10km Up!

    // For speeding up to 20 km/h over the limit, the status should be speeding.
    if (KmSpeedUp <= 20){
        console.log(`The speed is ${KmSpeedUp} km/h faster than the allowed speed of ${limits} - speeding`);
        return;
    }

    // For speeding up to 40 km/h over the limit, the status should be excessive speeding.
    if ((21 <= KmSpeedUp) && (KmSpeedUp <= 40)){
        console.log(`The speed is ${KmSpeedUp} km/h faster than the allowed speed of ${limits} - excessive speeding`);
        return;
    } else {
        // For anything else, status should be reckless driving.
        console.log(`The speed is ${KmSpeedUp} km/h faster than the allowed speed of ${limits} - reckless driving`);
    }  
}

RadarInfo(40, 'city'); //Driving 40 km/h in a 50 zone
RadarInfo(21, 'residential'); //The speed is 1 km/h faster than the allowed speed of 20 - speeding
RadarInfo(120, 'interstate'); //The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
RadarInfo(200, 'motorway'); // The speed is 70 km/h faster than the allowed speed of 130 - reckless driving



//****************************************************************************************************** */



// 7. Cooking by Numbers


function cookingNumbers(...input){ // (...) spreed operator to take all

    let numberX = Number(input[0]); //32

    // * chop - divide the number by two
    // * dice - square root of a number
    // * spice - add 1 to the number
    // * bake - multiply number by 3
    // * fillet - subtract 20% from the number
    const commandLibrary = { // du staff by arrow functions
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x - (x * 0.2),
    };


    for (let i = 1; i < input.length; i++) {
        let command = input[i]; //'chop'.....

        //pass command & number to library, du staff end return new NumberX for next command
        numberX = commandLibrary[command](numberX); // 'chop' , 32 --> 16 
        console.log(numberX);
    }
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// 16
// 8
// 4
// 2
// 1

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');
// 3
// 4
// 2
// 6
// 4.8


/******************************************************************************************************* */



//08. Validity Checker


function validCoordinatesPoints(x1, y1, x2, y2) {

    const results = (x1, y1, x2, y2) => {

    // formula to help you calculate the distance between the points
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    //console.log(distance);

    if (Number.isInteger(distance)){
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    }

    return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }

    console.log(results(x1, y1, 0, 0));
    console.log(results(x2, y2, 0, 0));
    console.log(results(x1, y1, x2, y2));
}

validCoordinatesPoints(3, 0, 0, 4);
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid

validCoordinatesPoints(2, 1, 1, 1 );
// {2, 1} to {0, 0} is invalid
// {1, 1} to {0, 0} is invalid
// {2, 1} to {1, 1} is valid




//**************************************************************************************************** */



//09. Words Uppercase  ---  REGEX !!!!


// Write a program that extracts all words from a passed-in string and converts them to upper case. 
// The extracted words in the upper case must be printed on a single line separated by ", ".

function WordsToUppercase(inputText){

    let regex = /\w+/g;

    let results = inputText.match(regex).join(", ").toUpperCase();

    console.log(results);
}

WordsToUppercase('Hi, how are you?'); //  HI, HOW, ARE, YOU
WordsToUppercase('hello'); // HELLO


// Exercises: Objects & Composition




// 1. Calorie Object


// function calorieObj(arr){

//     let obj = {};
//     let array = [...arr];

//     for (let i = 0; i < array.length; i+=2) {
//         const name = array[i];
//         const price = Number(array[i+1]);
        
//         obj[name] = price;
//     }

//     console.log(obj); //{Yoghurt: '48', Rise: '138', Apple: '52'}
// }

// calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// // { Yoghurt: 48, Rise: 138, Apple: 52 }
// calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// // { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }


//********************************************************************************************* */



//02. Construction Crew


// function constructionCrew(input){

//     let obj = {...input};

//     // return console.log(obj); --> {weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true}
//     // obj.weight --> 80
//     // obj.dizziness --> true


//     //dizziness property is set to true it means he needs to intake some water
//     if (obj.dizziness){ // object is dizzi!
//         //The required amount is 0.1ml per kilogram per year of experience. 
//         //The required amount must be added to the existing amount (to the levelOfHydrated). 
//         // Once the water is administered, change the dizziness property to false.

//         obj.levelOfHydrated += 0.1 * obj.experience * obj.weight;
//         obj.dizziness = false;
//         return obj;  //console.log(obj);
//     }
//     return obj; //console.log(obj);
// }


// constructionCrew({  weight: 80,
//                     experience: 1,
//                     levelOfHydrated: 0,
//                     dizziness: true });
// // { weight: 80,experience: 1,levelOfHydrated: 8, dizziness: false }      
// console.log(`-----------------------------------------------------`);
// constructionCrew({  weight: 120,
//                     experience: 20,
//                     levelOfHydrated: 200,
//                     dizziness: true });
// // { weight: 120,experience: 20,levelOfHydrated: 440,dizziness: false }
// console.log(`---------------------------------------------------`);
// constructionCrew({  weight: 95,
//                     experience: 3,
//                     levelOfHydrated: 0,
//                     dizziness: false });
// // { weight: 95,experience: 3,levelOfHydrated: 0,dizziness: false }



//****************************************************************************************** */




//03. Car Factory 


// function carFactory(input){

//     let car = {...input};

//     // put engine type
//     if (car.power <= 90 ){ //Small engine
//         delete car.power; // remove --> power: 90
//         car.engine = { power: 90,volume: 1800 };
//     } else if (car.power <= 120){ // Normal engine
//         delete car.power; // remove --> power: 120
//         car.engine = { power: 120, volume: 2400 };
//     } else if (car.power <= 200) { //Monster engine:
//         delete car.power; // remove --> power: 120
//         car.engine = { power: 200, volume: 3500 };
//     }


//     // carriage has a type and color. 
//     if (car.carriage === 'hatchback'){
//         car.carriage = { type: 'hatchback', color: car.color };
//         delete car.color;
//     }
//     if (car.carriage === 'coupe'){
//         car.carriage = { type: 'coupe', color: car.color };
//         delete car.color;
//     }


//     // The wheels will be represented by an array of 4 numbers, each number represents the diameter 
//     // of the wheel in inches. The size can only be an odd number. 
//     // Round down any requirements you receive to the nearest odd number. 

//     if(car.wheelsize % 2  === 0){  // 14,16,18,20
//         let  size = car.wheelsize - 1;
//         car.wheels = [size, size, size, size]; //wheels: [13, 13, 13, 13]
//         delete car.wheelsize;
//     } else { // 13,15,17,19
//         let size = car.wheelsize;
//         car.wheels = [size, size, size, size];
//         delete car.wheelsize;
//     }

//     return car;
// // ┌──────────┬────┬────┬────┬────┬─────────────┬────────┬───────┬────────┬──────────────┐
// // │ (index)  │ 0  │ 1  │ 2  │ 3  │    type     │ color  │ power │ volume │    Values    │
// // ├──────────┼────┼────┼────┼────┼─────────────┼────────┼───────┼────────┼──────────────┤
// // │  model   │    │    │    │    │             │        │       │        │ 'VW Golf II' │
// // │ carriage │    │    │    │    │ 'hatchback' │ 'blue' │       │        │              │
// // │  engine  │    │    │    │    │             │        │  90   │  1800  │              │
// // │  wheels  │ 13 │ 13 │ 13 │ 13 │             │        │       │        │              │
// // └──────────┴────┴────┴────┴────┴─────────────┴────────┴───────┴────────┴──────────────┘
// }



// carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 });
// // { model: 'VW Golf II',engine: { power: 90,volume: 1800 },carriage: { type: 'hatchback',color: 'blue' },wheels: [13, 13, 13, 13] }
// console.log(`-------------------------------------------`);
// carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 });
// // { model: 'Opel Vectra',engine: { power: 120,volume: 2400 },carriage: { type: 'coupe',color: 'grey' },wheels: [17, 17, 17, 17] }
   


//*********************************************************************************************************** */



// 04. Heroic Inventory


// function that creates a register for the heroes, with their names, level, and items, 
// if they have such. The register should accept data in a specified format, and return it presented 
// in a specified format. 

// function heroicInventory(input) {

//     let result = [];

//     for (const iterator of input) { 
//         let tokens = iterator.split(' / '); //['Isacc', '25', 'Apple, GravityGun']
//         let name = tokens[0]; // 'Isacc'
//         let level = Number(tokens[1]); // 25
//         let items = tokens[2]; // 'Apple, GravityGun'

//         //split 'items' & check is no items
//         items = items ? items.split(", ") : [];

//         //Now what is left is to add that data into an object and add that object to the array.
//         result.push({name, level, items})
//     }
//     // Lastly, we need to turn the array of objects we have made, into a JSON string, which is done by the
//     // JSON.stringify() function
//     console.log(JSON.stringify(result));
// }



// //alternative method
// function heroicInventory2(data){
//     let result = data.reduce((acc,el) => {
//             let [name, level, items] = el.split(" / ");
//             let obj = {name, level:Number(level), items: items? items.split(", ") : []}
//         acc.push(obj);
//     }, [])
//     return (JSON.stringify(result));
// }



// heroicInventory(['Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara']);
// // [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},
// // {"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},
// // {"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
// console.log(`--------------------------------------`);
// heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
// // [{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]


//********************************************************************************************************* */



// 05. Lowest Prices in Cities


// function findLowestPrices(input){

//     let objResult = {};

//     for (let i = 0; i < input.length; i++) {
//         let tokens = input[i].split(" | "); //Sample Town | Sample Product | 1000'
//         let townName = tokens[0]; //Sample Town
//         let productName = tokens[1]; //Sample Product
//         let price = Number(tokens[2]); //1000

//         // check if productName is created
//         if (!objResult.hasOwnProperty(productName)){ //not included! --> objResult[productName] == undefined
//             objResult[productName] = {}; // set to empty 
//         }

//         objResult[productName][townName] = price;
//     }

//     // (Object.entries(obj)); // { foo: "33", baz: 42 }; --> [ ['foo', '33'], ['baz', 42] ]
//     for (let [product, towns] of Object.entries(objResult)) {
        
//         let sorted = Object.entries(towns).sort( (a, b) => a[1] - b[1]); //sort for best price
//         //console.table(sorted);

//         let [town, price] = sorted[0];
//         console.log(`${product} -> ${price} (${town})`);
//     }
//     // console.log(objResult); //{Sample Product: {…}, Orange: {…}, Peach: {…}, Burger: {…}}
//     // console.log(objResult["Sample Product"]); //{Sample Town: 1000, New York: 1000.1}
// }


// findLowestPrices(['Sample Town | Sample Product | 1000',
//                 'Sample Town | Orange | 2',
//                 'Sample Town | Peach | 1',
//                 'Sofia | Orange | 3',
//                 'Sofia | Peach | 2',
//                 'New York | Sample Product | 1000.1',
//                 'New York | Burger | 10']);
// // Sample Product -> 1000 (Sample Town)
// // Orange -> 2 (Sample Town)
// // Peach -> 1 (Sample Town)
// // Burger -> 10 (New York)



//********************************************************************************************************** */




// 06. Store Catalogue


// function storeCatalogue(data) {

//     let objResult = {};

//     for (let i = 0; i < data.length; i++) {
//         let el = data[i].split(" : "); //Appricot : 20.4
//         let article = el[0];
//         let price = Number(el[1]);

//         objResult[article] = price;
//     }


//     let products = Object.keys(objResult).sort( (a,b) => a.localeCompare(b));
    
//     let buffFirstChar = "";
//     for (let index = 0; index < products.length; index++) {
//         let element = products[index];
//         let splitChars = element.split("");
//         let firstChar = splitChars[0];

//         if (buffFirstChar !== firstChar){ // check if is chenge on 1 char "A"?
//             buffFirstChar = firstChar
//             console.log(buffFirstChar);
//         }
        
//         console.log("  " + element + ": " + objResult[element]); // objResult[element] --> Anti-Bug Spray --> 15       
//     }
// }

// storeCatalogue(['Appricot : 20.4', 
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10']);
// // A
// //     Anti-Bug Spray: 15
// //     Apple: 1.25
// //     Appricot: 20.4
// // B
// //     Boiler: 300
// // D
// //     Deodorant: 10
// // F
// //     Fridge: 1500
// // T
// //     T-Shirt: 10
// //     TV: 1499
// console.log(`----------------------------------------------------------`);
// storeCatalogue(['Banana : 2', 'Rubic`s Cube : 5',
// 'Raspberry P : 4999',
// 'Rolex : 100000',
// 'Rollon : 10',
// 'Rali Car : 2000000',
// 'Pesho : 0.000001',
// 'Barrel : 10']);
// // B
// //  Banana: 2
// //  Barrel: 10
// // P
// //  Pesho: 0.000001
// // R
// //  Rali Car: 2000000
// //  Raspberry P: 4999
// //  Rolex: 100000
// //  Rollon: 10
// //  Rubic's Cube: 5

//******************************************************************************************************************************** */





// 07. Towns to JSON


// function townsToJSON(data) {
//     let obj = {};
//     let arr = [];

//     let infoData = data[0].split("|"); //['', ' Town ', ' Latitude ', ' Longitude ', '']
//     infoData = infoData.filter(Boolean); //el => el.trim() !='' // if is '' --> fouls => cut/no return
//     //console.log(infoData); //[' Town ', ' Latitude ', ' Longitude ']
//     let town = infoData[0].trim(); //'Town'
//     let latitude = infoData[1].trim(); //'Latitude'
//     let longitude = infoData[2].trim(); // 'Longitude'


//     for (let i = 1; i < data.length; i++) {
//         let elements = data[i].split("|");
//         elements = elements.filter(Boolean); //['Sofia', '42.696552', '23.32601']

//         let city = elements[0].trim(); //' Veliko Turnovo '
//         let firstCoordinates = Number(elements[1]).toFixed(2);
//         let secondCoordinates = Number(elements[2]).toFixed(2);
        
//         arr.push({Town: city, Latitude: Number(firstCoordinates), Longitude: Number(secondCoordinates) });

//     }
//     let result = JSON.stringify(arr);
//     console.table(result);
// //[{"town":"Sofia","latitude":42.7,"longitude":23.33},{"town":"Beijing","latitude":39.91,"longitude":116.36}]
// }


// townsToJSON(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']);
// // [{"Town":"Sofia",
// //  "Latitude":42.7,
// //  "Longitude":23.32
// // },
// // {"Town":"Beijing",
// // "Latitude":39.91,
// // "Longitude":116.36
// // }]
// console.log(`------------------------------------------------------------`);
// townsToJSON(['| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |']);

    
//******************************************************************************************************** */



//08. Rectangle 

// function that creates and returns a rectangle object. The rectangle needs to have a width (Number),
// height (Number), and color (String) properties, which are set via arguments during creation, and a calcArea()
// method, that calculates and returns the rectangle’s area.


// function rectangle(width, height, color) {
//     const rect = { 
//         width: Number(width),
//         height: Number(height),
//         color: `${color.charAt(0).toUpperCase()}${color.slice(1)}`,  // 'red'--> 'Red'
//      };

//     rect.calcArea = () => {
//         return rect.width * rect.height;
//     };

//     return rect;
// }

// let rect = rectangle(4, 5, 'red');
// console.log(rect); // {width: 4, height: 5, color: 'Red', calcArea: ƒ}
// console.log(rect.width);  // 4
// console.log(rect.height); // 5
// console.log(rect.color); // Red
// console.log(rect.calcArea()); // 20



//****************************************************************************************************************************** */



//9. Sorted List*



//TO DO






//********************************************************************************************************************************* */



//10. Heroes

// function solve(){

//     const mage = (name) => {
//         let state = {
//             name,
//             health: 100,
//             mana: 100,
//         }
//         return Object.assign(state, canCast(state));
//     }

//     const fighter = (name) => {
//         let state = {
//             name,
//             health: 100,
//             stamina: 100,
//         }
//         return Object.assign(state, canFight(state));
//     }



//     const canCast = (state) => ({
//         cast: (spell) =>{
//             console.log(`${state.name} cast ${spell}`);
//             state.mana--;
//         }
//     });



//     const canFight = (state) => ({
//         fight: () => {
//             console.log(`${state.name} slashes at the foe!`);
//             state.stamina--;
//         }
//     });


//     return {mage: mage, fighter: fighter};

// }




// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")
// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()
// console.log(scorcher2.stamina);
// console.log(scorcher.mana);

// // Scorcher cast fireball
// // Scorcher cast thunder
// // Scorcher cast light
// // Scorcher 2 slashes at the foe!
// // 99
// // 97



//************************************************************************************************************************************* */





//11. Jan's Notation *



// TO DO

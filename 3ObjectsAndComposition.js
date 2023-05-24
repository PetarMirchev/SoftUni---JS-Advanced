 

                                    // lecture 3 -- Objects and Composition



// 1. City Record


//You will receive a city’s name (string), population (number), and treasury (number) as arguments, 
//which you will need to set as properties of an object and return it.


function cityData(name, population, treasury) {

    const city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;
}

console.log(cityData('Tortuga', 7000,15000));
// {name: 'Tortuga', population: 7000, treasury: 15000}
console.log(cityData('Santo Domingo',12000,23500));
// {name: 'Santo Domingo', population: 12000, treasury: 23500}
//----------------------------------------------------------------

// alternative solution ! (returns directly object)
function createRecord(name, population, treasury) {
    return {
    name,
    population,
    treasury 
    };
}

//************************************************************************************************* */







// dynamics change of access to object data
let {name: personName, age: personAge} = {name: 'Pesho', age: 25};

console.log(personAge); // 25
console.log(personName); // Pesho


//************************************************** */

let objX = {
    name: 'Pesho',
    age: 20,
}

console.log(objX);  // --> {name: 'Pesho', age: 20}
objX.title = "Super Men";
console.log(objX); // --> {name: 'Pesho', age: 20, title: 'Super Men'}




//*************************************************************************************************** */



    // //Object Keys and Values

    const phonebook = { 'Tim': '555-111',
                        'Bill': '555-333',
                        'Peter': '555-777' };
    const keys = Object.keys(phonebook);
    console.log(keys); // ['Tim', 'Bill', 'Peter']



    //Object Entries 
    const phonebook1 = { 'Tim': '555-111',
                        'Bill': '555-333',
                        'Peter': '555-777' };
    const entries = Object.entries(phonebook1);
    console.log(entries);// [ ['Tim', '555-111'],
                         // ['Bill', '555-333'],
                         // ['Peter', '555-777'] ]



    //print obj

    const objPr = {a: 1, b: 2, c: 3};
    for (const key in objPr) {
        console.log(`obj.${key} = ${objPr[key]}`);
    }
    // Output:
    // "objPr.a = 1"
    // "objPr.b = 2"
    // "objPr.c = 3"



//**************************************************************************************************** */




// 2. Town Population

function townPopulation(arr){

    let basket = {};

    for (let i = 0; i < arr.length; i++) {
        let [cityName, peopleNumber] = arr[i].split(' <-> ');

        // if city is new set people to 0
        if (basket[cityName] === undefined) { 
            basket[cityName] = 0
        }

        // put data in obj
        basket[cityName] += Number(peopleNumber); // Washington = 2345000
    }

    //print logic  // forIn
    for (const townName in basket) {       
        console.log(`${townName} : ${basket[townName]}`);    // Sofia : 1200000
    }
}



townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000
console.log(`----------------------------------------------------`);
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925




//************************************************************************************************** */



                                    // 03. City Taxes   

// You will receive a city’s name (string), population (number), and treasury (number) 
// as arguments, which you will need to set as properties of an object and return it. 
// In addition to the input parameters, the object must have a
// property taxRate with an initial value of 10, and three methods for managing the city:
//  collectTaxes() - Increase treasury by population * taxRate
//  applyGrowth(percentage) - Increase population by given percentage
//  applyRecession(percentage) - Decrease treasury by given percentage



function cityTaxes(city, numberOfPeople, money){

    let objCity = {
        name: city,
        population: numberOfPeople,
        treasury: money,
        taxRate: 10,
        collectTaxes(){  //?????
           // Increase treasury by population * taxRate
           this.treasury += this.population * this.taxRate; 
        },
        applyGrowth(percentX){
            // Increase population by given percentage
            let percent = percentX / 100  // 5 / 100 --> 0.05%
            let increaseAmount = this.population * percent; //350
            this.population = Math.floor(this.population + increaseAmount); // 7000 + 350
        },
        applyRecession(percentD){
           // Decrease treasury by given percentage
           this.treasury -= Math.floor(this.treasury * (percentD / 100));
        },
    };

    return objCity;
}


let city = cityTaxes('Tortuga', 7000, 15000); //{name: 'Tortuga', population: 7000, treasury: 15000, taxRate: 10, collectTaxes: ƒ, …}
console.log(city);
city.collectTaxes(); // name: 'Tortuga', population: 7000, treasury: 165000, taxRate: 10, collectTaxes: ƒ, …}
console.log(city);
city.applyGrowth(5); //{name: 'Tortuga', population: 7350, treasury: 165000, taxRate: 10, collectTaxes: ƒ, …}
console.log(city); 
city.applyRecession(5); //{name: 'Tortuga', population: 7350, treasury: 156750, taxRate: 10, collectTaxes: ƒ, …}
console.log(city);




//********************************************************************************************************* */



                                //4. Object Factory  !!!!!!!!!!!!!


function ObjectFactory(library, orders){

    let results = [];

    for (const order of orders) {
       let template = order.template;

       // create new Obj by .assign and take order.template from different obj
        //    let obj2 = {'test': 12};
        //    let objMix = Object.assign(obj2, order.template);

       let obj = Object.assign({}, template); //create new Obj by .assign and take order.template from different obj
       let parts = order.parts;

       for (const methodName of parts) {
//orders --> parts: ['print']  = library --> print: function (){}
               obj[methodName] = library[methodName]; // take obj and get from 'library' function & attach to new object
       }

       results.push(obj);
    }
    return results;
    // console.log(results);
    // console.table(results);
// ┌─────────┬───────────────────┬───────────────────┬──────────────────┬──────────────────┐
// │ (index) │       name        │       print       │       scan       │       play       │
// ├─────────┼───────────────────┼───────────────────┼──────────────────┼──────────────────┤
// │    0    │  'ACME Printer'   │ [Function: print] │                  │                  │
// │    1    │ 'Initech Scanner' │                   │ [Function: scan] │                  │
// │    2    │ 'ComTron Copier'  │ [Function: print] │ [Function: scan] │                  │
// │    3    │ 'BoomBox Stereo'  │                   │                  │ [Function: play] │
// └─────────┴───────────────────┴───────────────────┴──────────────────┴──────────────────┘
}


const library = {
    print: function () {
    console.log(`${this.name} is printing a page`);
    },
    scan: function () {
    console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
   };

const orders = [
    {
    template: { name: 'ACME Printer'},
    parts: ['print']
    },
    {
    template: { name: 'Initech Scanner'},
    parts: ['scan']
    },
    {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']
    },
    {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']
    }
];

ObjectFactory(library, orders);
// [
//     {
//     name: 'ACME Printer',
//     print: [Function: print]
//     },
//     {
//     name: 'Initech Scanner',
//     scan: [Function: scan]
//     },
//     {
//     name: 'ComTron Copier',
//     scan: [Function: scan],
//     print: [Function: print]
//     },
//     {
//     name: 'BoomBox Stereo',
//     play: [Function: play]
//     }
// ]



//*************************************************************************************************** */



// Factory Functions With Reference


function createRect(width, height) {
    const rect = { width, height };

    rect.getArea = () => {
        return rect.width * rect.height;
    };

    return rect;
}

console.table(createRect(10,10));



//*************************************************************************************************************** */



//5. Assembly Line





//************************************************************************************************************** */



// 6. From JSON to HTML Table





//*********************************************************************************************************** */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// !!!!!!!!!!!!!!!!!!!!             bonus : !!!!!!!


// sorting helper
const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a,
};


//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Named methods are used instead SWITCH

let count = 5;                  //  let count = 5;
    switch (command) {          //    const parser = {
        case 'increment':       //      increment() { count++; },
            count++;            //      decrement() { count--; },
        break;                  //      reset() { count = 0; }
        case 'decrement':       //  }
            count--;            //   parser[command]();
        break;
        case 'reset':
            count = 0;
        break;
}




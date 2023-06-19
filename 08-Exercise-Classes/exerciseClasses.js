

//Exercise: Classes & Unit Testing on Classes




// 1. Rectangle

// class Rectangle {
//     constructor(w, h, c){
//         this._width = w;
//         this._height = h;
//         this._color = c;
//     }

//     get width() { 
//         return this._width;
//     }

//     get height() {
//         return this._height;
//     }

//     get color() {
//         return this._color;
//     }

//     //methods -> du staff
//     calcArea() {  // console.log(rect.calcArea());
//         return this.width * this.height;
//     }

// }


// let rect = new Rectangle(4, 5, 'Red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());
// // 4
// // 5
// // Red
// // 20

//******************************************************************************************************** */




// 02. Data Class


// class Request {
//     constructor(m, url, v, mess){
//        this.method = m;                     //  method (String)
//        this.uri = url;                     //  uri (String)
//        this.version = v;                     //  version (String)
//        this.message = mess;                    //  message (String)
//        this.response = undefined;                   //  response (String)
//        this.fulfilled = false;                   //  fulfilled (Boolean)
//     }


// }


// let myData = new Request('GET',
// 'http://google.com', 'HTTP/1.1', '')
// console.log(myData);
// // Request {
// //     method: 'GET',
// //     uri: 'http://google.com',
// //     version: 'HTTP/1.1',
// //     message: '',
// //     response: undefined,
// //     fulfilled: false
// //    }




//******************************************************************************************************** */




// 03. Tickets


// Your program will receive two arguments - the first is an array of strings for ticket 
// descriptions and the second is a string, representing a sorting criterion. 
// The ticket descriptions have the following format:
// <destinationName>|<price>|<status></status>
   

// function randomSolve(data, criteria){
//    class Ticket {
//     constructor (de, pr, stat){
//         this.destination = de;
//         this.price = pr;
//         this.status = stat;
//     }
//    }


//    let inputData = [...data]; //['Philadelphia|94.20|available', .....
//    let splitArrayData = inputData.map((x) => x.split("|")); 
// //    ┌─────────┬─────────────────┬───────┬─────────────┐
// //    │ (index) │   destination   │ price │   status    │
// //    ├─────────┼─────────────────┼───────┼─────────────┤
// //    │    0    │ 'Philadelphia'  │ 94.2  │ 'available' │
// //    │    1    │ 'New York City' │ 95.99 │ 'available' │
// //    │    2    │ 'New York City' │ 95.99 │   'sold'    │
// //    │    3    │    'Boston'     │ 126.2 │ 'departed'  │
// //    └─────────┴─────────────────┴───────┴─────────────┘

//    let ticketsLists = splitArrayData.map( ([de, pr, stat]) => new Ticket(de, Number(pr), stat) );

//     let sortedTickets = ticketsLists.sort((a, b) => {
//         // return typeof a[criteria] === "number"
//         // ? a[criteria] - b[criteria]
//         // : a[criteria].localeCompare(b[criteria]);

//         if(typeof a[criteria] === "number"){
//            return a[criteria] - b[criteria];
//         } else {
//           return a[criteria].localeCompare(b[criteria]);  
//         }
//     });

//   return sortedTickets;
// }





// console.log( randomSolve(
// [ 'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'  ));

// // [ Ticket { destination: 'Boston',
// //  price: 126.20,
// //  status: 'departed' },
// //  Ticket { destination: 'New York City',
// //  price: 95.99,
// //  status: 'available' },
// //  Ticket { destination: 'New York City',
// //  price: 95.99,
// //  status: 'sold' },
// //  Ticket { destination: 'Philadelphia',
// //  price: 94.20,
// //  status: 'available' } ]

// //---------------------------------------------------------------//

// console.log( randomSolve(
// [
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ],
//     'status' ));

// // [ Ticket { destination: 'Philadelphia',
// //  price: 94.20,
// //  status: 'available' },
// //  Ticket { destination: 'New York City',
// //  price: 95.99,
// //  status: 'available' },
// //  Ticket { destination: 'Boston',
// //  price: 126.20,
// //  status: 'departed' },
// //  Ticket { destination: 'New York City',
// //  price: 95.99,
// //  status: 'sold' } ]



//********************************************************************************************************* */



// 04. Sorted List

// Implement a class List, which keeps a list of numbers, sorted in ascending order.
// * add(element) - adds a new element to the collection
// * remove(index) - removes the element at position index
// * get(index) - returns the value of the element at position index
// * size - number of elements stored in the collection


// class List {
//     constructor(){
//         this.list = []; 
//         this.size = 0;
//     }

//         // helper methods
//         updateSize() { //size
//             this.size = this.list.length;
//         }

//         orderList() {
//             this.list.sort((a, b) => a - b);
//         }


//     // main functions:
//     add(element){
//         this.list.push(element);
//         this.updateSize();
//         this.orderList();
//     }


//     remove(index){
//         if (this.list[index] === undefined){ // check for correct index
//             return;
//         }
       
//        this.list.splice(index, 1);
//        this.updateSize();
//        this.orderList();
//     }


//     get(index){
//         if (this.list[index] === undefined){
//             return;
//         }

//         return this.list[index];
//     }

// }



// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// // 6
// // 7



//******************************************************************************************************* */




// 5. Length Limit

// Create a class Stringer, which holds the single string and a length property. The class should be 
// initialized with a string and an initial length. The class should always keep the initial state 
// of its given string. Name the two properties innerString and innerLength.
// There should also be functional for increasing and decreasing the initial length property.
// Implement function increase(length) and decrease(length)
// You should also implement functionality for toString() function


// class Stringer {
//     constructor(string, lengthProp) {
//         this.innerString = string;
//         this.innerLength = lengthProp;  
//     }

//     //Implement function increase(length)
//     increase(x){
//         this.innerLength += x;
//     }


//     //Implement function  decrease(length)
//     decrease(x){
//         let buff = this.innerLength - x;

//         if (buff < 0){ // buff = -2
//             this.innerLength = 0;
//         } else{ //buff > 0
//            this.innerLength = buff;
//         }     
//     }
    
//     //implement functionality for toString()
//     // If the length of the string is greater than the length property, the string should 
//     // be cut from right to left, so that it has the same length as the length property, 
//     // and you should add 3 dots after it if such truncation was done.

//     toString(){
//         if(this.innerLength == 0){ // 5 --> .decrease(5);
//             return '...';
//         }

//         //case cut 3 from 5  -->.decrease(3); --> // Te...
//         if(this.innerString.length > this.innerLength){
//             this.innerString = this.innerString.substr(0, this.innerLength) + "...";
//         }

//         return this.innerString;
//     }
// }



// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test
// test.decrease(3);
// console.log(test.toString()); // Te...
// test.decrease(5);
// console.log(test.toString()); // ...
// test.increase(4);
// console.log(test.toString()); // Test



//****************************************************************************************************** */






// 06. Company



//75/100

// class Company{
//     //The constructor takes no parameters:
//     constructor() {
//         //departments - empty object
//         this.departments = {};  

//         this.aveSalaries = {}; 
//     }

//     //addEmployee({name}, {salary}, {position}, {department})

//     addEmployee(name, salary, position, department){
//     // If one of the passed parameters is an empty string (""), undefined or null, 
//     // this function should throw an error with the following message: "Invalid input!"
//     // If salary is less than 0, this function should throw an error with the following message: "Invalid input!"
//         if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0){
//                 throw new Error("Invalid input!")
//         }

//         // If the new employee is hired successfully, you should add him into the departments 
//         // object with the current name of the department and return the 
//         // following message: `New employee is hired. Name:{name}. Position: {position}`
        

//         let user = {
//             name: name,
//             salary: salary,
//             position: position,
//         }
        
//         // not initialized in departmentS! --> create a new department
//         if (!this.departments.hasOwnProperty(department)){
//             this.departments[department] = [];

//             this.aveSalaries[department]= {
//                 totalEmployees: 0,
//                 totalSalaries: 0,
//                 averageSalary: 0
//             };
//         }


//         this.departments[department].push(user);
//         this.aveSalaries[department].totalEmployees += 1;
//         this.aveSalaries[department].totalSalaries += salary;


//         this.aveSalaries[department].averageSalary =  this.aveSalaries[department].totalSalaries / this.aveSalaries[department].totalEmployees;

//         return `New employee is hired. Name: ${name}. Position: ${position}`;
//     }


//     bestDepartment(){
//         let result = '';
//         let dataEntries = Object.entries(this.aveSalaries);
//         let sortData = dataEntries.sort( (a,b) => b[1].averageSalary - a[1].averageSalary); 
//                 // 0:'Construction'
//                 // 1:{totalEmployees: 4, totalSalaries: 6000, averageSalary: 1500}
//         let bestDepartment = sortData.shift();
//         //console.log(bestDepartment);

//         result += `Best Department is: ${bestDepartment[0]}`;
//         result +=  "\n" + `Average salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;

//         this.departments[bestDepartment[0]].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));

//         this.departments[bestDepartment[0]].forEach(user  => {
//             result += "\n" + `${user.name} ${user.salary} ${user.position}`; 
//         });

//         return result;
//     }
    
// }



// let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.bestDepartment());


// // Best Department is: Construction
// // Average salary: 1500.00
// // Stan 2000 architect
// // Stanimir 2000 engineer
// // Pesho 1500 electrical engineer
// // Slavi 500 dyer



// // 100/100

// class Company {
//     constructor() {
//       this.departments = [];
//     }
  
//     getDepart(name) {
//       const depart = this.departments.find((x) => x.name === name);
  
//       if (!depart) {
//         const temp = { name, employees: [], salaries: [], positions: [] };
//         this.departments.push(temp);
//         return temp;
//       }
  
//       return depart;
//     }
  
//     getSalariesSum(depart) {
//       return depart.salaries.reduce((a, v) => a + v, 0);
//     }
  
//     bestSalaryDepart() {
//       return this.departments.sort(
//         (a, b) =>
//           this.getSalariesSum(b) / b.salaries.length -
//           this.getSalariesSum(a) / a.salaries.length
//       )[0];
//     }
  
//     addEmployee(...args) {
//       const [name, salary, position, departmentName] = args;
//       const isInvalidInput =
//         args.some((x) => x === undefined || x === null || x === "") || salary < 0;
  
//       if (isInvalidInput) {
//         throw new Error("Invalid input!");
//       }
  
//       const department = this.getDepart(departmentName);
//       department.employees.push(name);
//       department.salaries.push(salary);
//       department.positions.push(position);
//       return `New employee is hired. Name: ${name}. Position: ${position}`;
//     }
  
//     bestDepartment() {
//       const best = this.bestSalaryDepart();
  
//       const combinedEmployees = best.employees.reduce((a, v, i) => {
//         a[i] = [];
//         a[i].push(v, best.salaries[i], best.positions[i]);
//         return a;
//       }, []);
  
//       const sorted = combinedEmployees.sort((a, b) => {
//         return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
//       });
  
//       const printData = sorted.map((x) => x.join(" ")).join("\n");
  
//       const avgSalary = (
//         this.getSalariesSum(best) / best.salaries.length
//       ).toFixed(2);
//       return `Best Department is: ${best.name}
//   Average salary: ${avgSalary}
//   ${printData}`;
//     }
//   }




//********************************************************************************************************** */



// 07. HEX

// Write a class Hex, having the following functionality:
// * The constructor takes one parameter value, which is a number
// * valueOf() This function should return the value property of the hex class.
// * toString() This function will show its hexadecimal value starting with "0x"
// * plus({number}) This function should add a number or Hex object and return a new Hex object.
// * minus({number}) This function should subtract a number or Hex object and return a new Hex object.
// * parse({string}) Create a parse class method that can parse Hexadecimal numbers and convert them to
// standard decimal numbers.


// class Hex {
//     constructor(value) {
//         this.value = Number(value);   
//     }
    
//     valueOf(){
//         return this.value;
//     }

//     toString(){
//         return `0x${(this.value.toString(16)).toUpperCase()}`;
//     }

//     plus(number){
//         let result = (this.value + Number(number.valueOf()));
//         return new Hex(result);
//     }

//     minus(number){
//         let result = (this.value - Number(number.valueOf()));
//         return new Hex(result);
//     }

//     parse(text){
//         return parseInt(text, 16);
//     }
// }


// let FF = new Hex(255);
// console.log(FF.toString());
// FF.valueOf() + 1 == 256;
// let a = new Hex(10);
// let b = new Hex(5);
// console.log(a.plus(b).toString());
// console.log(a.plus(b).toString()==='0xF');
// console.log(FF.parse('AAA'));

// // 0XFF
// // 0XF
// // true
// // 2730



//**************************************************************************************************** */




// 08. Juice Flavors


// 20/100

// function bbbJuice(input) {

//     let objStore = {};
//     let array = [...input];

//     for (let i = 0; i < array.length; i++) {
//         let token = array[i].split(' => ');
        
//         //objStore[token[0]] = token[1];

//         if(!objStore.hasOwnProperty(token[0])){  // new product
//             objStore[token[0]] = 0;
//         } 
        
//         //already in 
//             objStore[token[0]] += Number(token[1]);
//         //{Orange: 2000, Peach: 2032, Banana: 450, Strawberry: 549}
//         // console.log(objStore);


//     }


    
//     for (let ingredients in objStore) {
        
//             const pcs = objStore[ingredients];

//             if (pcs > 1000){
//             // 1000 quantity of juice is one bottle. If you happen to have more than 1000, 
//             // you must make as many bottles as you can, and store what is left from the juice.
//                 bottles = (pcs / 1000);
//                 console.log(`${ingredients} => ${Math.floor(bottles)}`); //"{juiceName} => {juiceQuantity}"
//             }
//     }    
// }





// cappy(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']);

// // Orange => 2
// // Peach => 2

// console.log(`--------------------------------------------------`);

// cappy(['Kiwi => 234',
// 'Pear => 2345',
// 'Watermelon => 3456',
// 'Kiwi => 4567',
// 'Pear => 5678',
// 'Watermelon => 6789']);

// // Pear => 8
// // Watermelon => 10
// // Kiwi => 4


// //100/100

// function cappy(input = []) {
//     const bottles = new Map();
   
//     input.reduce((acc, curr) => {
//       let [juice, quantity] = curr.split(" => ");
//       quantity = Number(quantity);
   
//       if(!acc.hasOwnProperty(juice)) {
//           acc[juice] = 0;
//       }  
//       acc[juice] += quantity;
   
//       if (acc[juice] >= 1000) {
//         if (!bottles.has(juice)) {
//           bottles.set(juice, 0);
//         }
   
//       bottles.set(juice, bottles.get(juice) + parseInt(acc[juice] / 1000));
//         acc[juice] %= 1000;
//       }
   
//       return acc;
//     }, {});
   
   
//     for(let[juice, quantity] of bottles) {
//         console.log(`${juice} => ${quantity}`);
//     }
//   }
  






//******************************************************************************************************* */


// 9. Auto-Engineering Company

// The order of printing is the order in which the brands and models first appear in the input.
// use Map() or array for solve

function carAutoEngineeringCompany(data){

    let mapCars = new Map();
    for (let line of data) {
        let [brand, model, produced] = line.split(' | ');
        if (!mapCars.has(brand)) {
            mapCars.set(brand, new Map());
        }
        let mapModels = mapCars.get(brand);
        if (!mapModels.has(model)) {
            mapModels.set(model, 0);
        }
        mapModels.set(model, mapModels.get(model) + Number(produced));
        // console.log(mapCars);
        // console.log(mapModels);
    }

    for (let brand of mapCars.keys()) {
        console.log(brand);  //Audi
        let mapModels = mapCars.get(brand);
        for (let model of mapModels.keys()) {
            console.log(`###${model} -> ${mapModels.get(model)}`);
        }
    }
}




carAutoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);

// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000




//************************************************************************************************* */
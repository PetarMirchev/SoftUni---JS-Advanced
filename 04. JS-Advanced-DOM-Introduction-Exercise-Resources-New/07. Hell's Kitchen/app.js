function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);


      // get elements to manege
      let inputArea = document.querySelector('#inputs>textarea');
      let bestRestaurantResult = document.querySelector('#bestRestaurantResult>p');
      let workersResult = document.querySelector('#workers>p'); 

 
   function onClick () {
      let buffArr = [];
      buffArr = JSON.parse(inputArea.value); // get data from input area 


      let objRestaurants = {};

      for (let i = 0; i < buffArr.length; i++) {
         let element = buffArr[i]; //PizzaHut - Peter 500, George 300, Mark 800
         let tokens = element.split(' - ');
         let restaurantName = tokens[0]; //'PizzaHut'
         let workersArr = tokens[1].split(', '); // 'Peter 500, George 300, Mark 800'

         //prepare workers collection
         let workersData = []; // store workers data

         for (let j = 0; j < workersArr.length; j++) {
            let oneWorker = workersArr[j];
            let token = oneWorker.split(' ');//'Peter 500'
            let nameMen  = token[0]; //Peter
            let salary = Number(token[1]); // 500
            workersData.push({name: nameMen, salary: salary}); //[0]{name: 'Peter', salary: '500'}
         }


         if (objRestaurants[restaurantName]){
            workersData = workersData.concat(objRestaurants[restaurantName].workersData);
         }

         //The best restaurant's workers should be sorted by their salaries in descending order.
         // sort workers by salary
         workersData.sort((worker1, worker2) => worker2.salary - worker1.salary);

         //Display the best restaurant of all the added restaurants with its  
         let bestManSalary = workersData[0].salary;  //best salary. 
 

         let buffSum = 0;
         for (let l = 0; l < workersData.length; l++) {
            let crrMoneyPerson = workersData[l].salary;
            buffSum += crrMoneyPerson;
         }
         let averageSalary = buffSum / workersData.length;



         objRestaurants[restaurantName] = {
            workersData,
            averageSalary,
            bestSalary: bestManSalary,
         };   
      };


      let bestRestaurantSealery = 0;
      let bestRestaurant = undefined;


      for (let name in objRestaurants) {
         if(objRestaurants[name].averageSalary > bestRestaurantSealery){
            bestRestaurant = {
               name,
               workers: objRestaurants[name].workers,
               bestSalary: objRestaurants[name].bestSalary,
               averageSalary: objRestaurants[name].averageSalary,
            };
            bestRestaurantSealery = objRestaurants[name].averageSalary;
         }
      }

      debugger
      console.log({bestRestaurant});
      //print logic
      bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary:
      ${bestRestaurant.bestSalary.toFixed(2)}`;

      let result = [];

      // bestRestaurant.workers.forEach((worker) => {
      //    result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      // });
      // workersResult.textContent = result.join(" ");  
   }
   
     // ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
}





///******************************************************************************************************** */


//100/100

function solve() {
   document.querySelector("#btnSend").addEventListener("click", onClick);
   
   //get DOM elements
   let input = document.querySelector("#inputs>textarea");
   let bestRestaurantResult = document.querySelector("#bestRestaurant>p");
   let workersResult = document.querySelector("#workers>p");
  
  
   function onClick() {
      //take input text
     let arr = JSON.parse(input.value);
 
     let restaurants = {};
 
     //loop tru text end split
     arr.forEach((element) => {
       let tokens = element.split(" - ");
       let name = tokens[0];
       let workersArr = tokens[1].split(", ");
       let workers = [];
 

       // populate workers info in ARR
       for (let worker of workersArr) {
         let workerToken = worker.split(" ");
         let salary = Number(workerToken[1]);
         workers.push({ name: workerToken[0], salary });
       }

       if (restaurants[name]) {
         workers = workers.concat(restaurants[name].workers);
       }

       //sort Workers by Salary income
       workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

       //get best Salary
       let bestSalary = workers[0].salary;

       //get average Salary in restaurant group 
       let averageSalary =
         workers.reduce((sum, worker) => sum + worker.salary, 0) /
         workers.length;
 
       //create object data for current restaurant
       restaurants[name] = {
         workers,
         averageSalary,
         bestSalary,
       };
     });

     // create buff for result data
     let bestRestaurantSalary = 0;
     let bestRestaurant = undefined;
 
     //loop tru data
     for (let name in restaurants) {
       if (restaurants[name].averageSalary > bestRestaurantSalary) {
         bestRestaurant = {
           name,
           workers: restaurants[name].workers,
           bestSalary: restaurants[name].bestSalary,
           averageSalary: restaurants[name].averageSalary,
         };

         bestRestaurantSalary = restaurants[name].averageSalary;
       }
     }

     //<div id="bestRestaurant"> --> Name: TheLake Average Salary: 913.33 Best Salary: 1300.00
     bestRestaurantResult.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
     
     
     //find best/mostPayed worker --> "TheLake - Bob 1300, Joe 780, Jane 660"
     let result = [];
     bestRestaurant.workers.forEach((worker) => {
       result.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
     });

     //<div id="workers">
     workersResult.textContent = result.join(" ");
   }
 }
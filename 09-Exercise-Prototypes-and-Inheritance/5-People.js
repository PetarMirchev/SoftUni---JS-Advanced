

// 05. People



function solution () {
    class Employee {
        constructor(name, age){
            // if(new.target === Employee){
            //     throw new Error("error instances");
            // }

            this.name = name;
            this.age = Number(age);
            this.salary = 0;
            this.tasks = [];
            this.dividend = 0;
        }

        work(){
            let currentTask  = this.tasks.shift(); // take task & start work
            console.log(`${this.name}${currentTask}`);
            this.tasks.push(currentTask);
        };

        getSalary(){
           return this.salary + this.dividend;
        }  

        collectSalary(){
            return console.log(`${this.name} received ${this.getSalary()} this month.`);;
        };
    };


    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push(` is working on a simple task.`);
        }
    };

    class Senior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push(` is working on a complicated task.`);
            this.tasks.push(` is taking time off work.`);
            this.tasks.push(` is supervising junior workers.`);    
        }
    };

    class Manager extends Employee {
        constructor(name, age, dividend){
            super(name, age, dividend);
            this.tasks.push(` scheduled a meeting.`);
            this.tasks.push(` is preparing a quarterly report.`);
        }
    };

    return {Employee, Junior, Senior, Manager };
}



// tests:
const classes = solution ();
const junior = new classes.Junior('Ivan',25);
junior.work();
junior.work();
junior.salary = 5811;
junior.collectSalary();
const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();
sinior.salary = 12050;
sinior.collectSalary();
const manager = new classes.Manager('Tom', 55);
manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();


// Ivan is working on a simple task.
// Ivan is working on a simple task.
// Ivan received 5811 this month.
// Alex is working on a complicated task.
// Alex is taking time off work.
// Alex is supervising junior workers.
// Alex is working on a complicated task.
// Alex received 12050 this month.
// Tom received 15000 this month.
// Tom received 17500 this month.


//******************************************************************************************************* */


//! alternative solve whit function to Class !

/*
function solution() {
    // abstract class
    function Employee(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.dividend = 0;
      this.tasks = [];
  
      this.work = function () {
        const currentTask = this.tasks.shift();
        this.tasks.push(currentTask);
        console.log(`${this.name}${currentTask}`);
      };
  
      this.collectSalary = function () {
        console.log(
          `${this.name} received ${this.salary + this.dividend} this month.`
        );
      };
    }
  
    // Junior
    function Junior(name, age) {
      Employee.call(this, name, age);
      this.tasks = [" is working on a simple task."];
    }
    Junior.prototype = Object.create(Employee.prototype);
  
    // Senior
    function Senior(name, age) {
      Employee.call(this, name, age);
      this.tasks = [
        " is working on a complicated task.",
        " is taking time off work.",
        " is supervising junior workers.",
      ];
    }
    Senior.prototype = Object.create(Employee.prototype);
  
    // Manager
    function Manager(name, age) {
      Employee.call(this, name, age);
      this.tasks = [" scheduled a meeting.", " is preparing a quarterly report."];
    }
    Manager.prototype = Object.create(Employee.prototype);
  
    return { Employee, Junior, Senior, Manager };
  }

  */
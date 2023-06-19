class SmartHike {

// At the initialization of the SmartHike class, the constructor accepts only the username!
// The goals property is an object, representing a key-value pair of a peak’s name and its altitude.
    constructor(username){
        this.username = username;
        this.goals ={};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude){
        //  peak – a string
        //  altitude – a number

        //If the goal exists in the goals object, return the following message:
        if(this.goals.hasOwnProperty(peak)){ //! ????
            return `${peak} has already been added to your goals`;
        } 
    
        // Otherwise, add the new goal to the goals object and return the following message:
        this.goals[peak] = Number(altitude);
        return `You have successfully added a new goal - ${peak}`;
    }



    hike(peak, time, difficultyLevel){
        // Accept 3 arguments:
            // * peak – a string
            // * time – a number
            // * difficultyLevel – "hard" or "easy"

        // If the peak doesn’t exist in the goals object, throw new Error:
        if (!this.goals.hasOwnProperty(peak)){ //! or (this.goals[peak] === undefined) 
            throw new Error(`${peak} is not in your current goals`);
        }

        //If the peak exists in the goals object but the resources are already 0, throw new Error: 
        if(this.goals.hasOwnProperty(peak) && this.resources <= 0){ //! ???
            throw new Error("You don't have enough resources to start the hike");
        }


        // Afterwards, find the difference between the current resources and the time, multiplied by 10.
        let usedResources = time * 10;
        let difference = this.resources - usedResources
        // If the difference is a negative number, return the following message:
        if(difference < 0){
            return "You don't have enough resources to complete the hike";
        }

        // Otherwise extract the used resources from all resources and add the hike to the 
        // list of hikes in the following format: { peak, time, difficultyLevel } & Return the following message:
        this.resources = this.resources - usedResources;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }


    rest (time){// Accept 1 argument:  // * time – a number
        //Add the time for rest multiplied by 10 to the resources
        let gained = time * 10;
        this.resources += gained;

        //If the resources are more than or equal to 100, set them to 100 and return the following message:
        if(this.resources >= 100){
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        //Otherwise, return 
        return `You have rested for ${time} hours and gained ${gained}% resources`; //${gained = time*10}
    }


    showRecord(criteria){ // * criteria – a string
        // This method returns information based on the criteria. The three possible types of 
        // criteria are: "hard", "easy", "all".

        //If the list of hikes is empty, return the following message:
        if(this.listOfHikes.length === 0){
            return `${this.username} has not done any hiking yet`;
        }


        // Find all hikes from the list of hikes depending on the given criterion "hard" or "easy"
        if (criteria === "hard" || criteria === "easy"){
            let allHikes = this.listOfHikes.filter((hike) => hike.difficultyLevel === criteria);
            // and find the best hike - the hike with the shortest time.
            let sortedHikes = allHikes.sort((a,b) => a.time - b.time);
            let bestHike = sortedHikes[0];


            //If there is no hike with the given difficulty level, return:
            if (bestHike === undefined){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            // If there are more than one hike 
            // with the same amount of time, list the first one added in the list of hikes.
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
        }


        //If the criterion is "all", return all hikes from the list of hikes array in following format:
        if(criteria === "all"){
            //On first line show the following message:
            let printResult = ["All hiking records:"];

            //On the following lines, display information about each hike:
            this.listOfHikes.forEach((hike) => {
                printResult.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            });

            return printResult.join("\n");
        }
    }
}





// ------->>>>>>tests:


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// // You have successfully added a new goal - Musala
// // You have successfully added a new goal - Rui
// // Musala has already been added to your goals

console.log(`-----------------------------------------------------------------------`);

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// // You have successfully added a new goal - Musala
// // You have successfully added a new goal - Rui
// // You hiked Musala peak for 8 hours and you have 20% resources left
// // You don't have enough resources to complete the hike
// // Uncaught Error: Everest is not in your current goals

console.log(`-----------------------------------------------------------------------`);


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// // You have successfully added a new goal - Musala
// // You hiked Musala peak for 8 hours and you have 20% resources left
// // You have rested for 4 hours and gained 40% resources
// // Your resources are fully recharged. Time for hiking!

console.log(`-----------------------------------------------------------------------`);

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

// // Vili has not done any hiking yet


console.log(`-----------------------------------------------------------------------`);

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));

// // Vili has not done any easy hiking yet
// // Vili's best hard hike is Musala peak, for 8 hours
// // All hiking records:
// // Vili hiked Musala for 8 hours
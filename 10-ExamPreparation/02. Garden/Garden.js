class Garden {
    constructor(spaceAvailable){
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }


    //The plantName is of type string, while the spaceRequired is of type number.
    addPlant (plantName, spaceRequired){
        //• If there is not enough space in the garden for the new plant, throw an Error.
        if (this.spaceAvailable < spaceRequired){
            throw new Error("Not enough space in the garden.");
        }

        //• Otherwise, this function should add the plant with the properties: plantName, 
        // spaceRequired, ripe: default false, quantity: default 0 to the plants array, 
        // reduce the space available with the space required by the plant
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0});
        this.spaceAvailable -= spaceRequired;
        return  `The ${plantName} has been successfully planted in the garden.`;     
    }



    ripenPlant(plantName, quantity){
        // 1-st find the correct plant
        let searchedPlant = this.plants.find(plant => plant.plantName === plantName);

        //• If the plant is not found, throw an Error:
        if(searchedPlant === undefined){ // .find() return undefined
         throw new Error(`There is no ${plantName} in the garden.`); 
        }

        //• If the plant is already ripe, throw an Error:
        if (searchedPlant.ripe === true){ // by default is --> ripe: false
          throw new Error(`The ${plantName} is already ripe.`);
        }

        //• If the received quantity is less than or equal to 0, throw an Error:
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }


        //• Otherwise, this function should set the ripe property of the particular plant to true 
        searchedPlant.ripe = true;
        // and add the quantity to the quantity property of the plant. If the quantity passed 
        searchedPlant.quantity += quantity;
        // as a parameter is 1, return: 
        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }

        //If the quantity parameter is greater than 1, return:
        if(quantity > 1){
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }



    harvestPlant(plantName) {
        //• If the plant is not found, throw an Error:
        let searchedPlant = this.plants.find(plant => plant.plantName === plantName);
        if (searchedPlant === undefined){
            throw new Error(`There is no ${plantName} in the garden.`)
        }

        //• If the plant is not ripe, throw an Error:
        if(searchedPlant.ripe === false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }


        //• Otherwise, this function should remove the plant from the plants array, 
        // add it to storage with properties plantName and quantity, free up the total space 
        // that the plant required, and return:

        this.plants = this.plants.filter(p => p.plantName !== plantName); //! get all plants & return filtered plants and remove passed search plant form [];
        this.storage.push({plantName, quantity: searchedPlant.quantity}); //add it to storage
        this.spaceAvailable += searchedPlant.spaceRequired;  //free up the space 
        return `The ${plantName} has been successfully harvested.`;
    }




    //This method should return the complete information about the garden:
    generateReport(){
        let resultReport = "";
        //• On the first line:
        resultReport += `The garden has ${ this.spaceAvailable } free space left.` + "\n";

//• On the second line list all plants that are in the garden ordered alphabetically by plant name ascending in the format:
        this.plants.sort((a,b) => a.plantName.localeCompare(b.plantName));
        let plantsArraySorted = this.plants.map(name => name.plantName).join(", ");
        //"Plants in the garden: {plant1Name}, {plant2Name}, {…}"
        let plantsStringPrint = `Plants in the garden: ${plantsArraySorted}`;
        resultReport += plantsStringPrint + "\n"; 

        //• On the third line add:
            //If there are no plants in the storage, print:
            if (this.storage.length === 0){
                resultReport += `Plants in storage: The storage is empty.` + "\n";

            } else { //If there are plants in the storage list them in the format:
                let storageArr = this.storage.map(plantX => `${plantX.plantName} (${plantX.quantity})`).join(", ");
                //"Plants in storage: {plant1Name} ({plant1Quantity}), {plant2Name}, ({plant2Quantity}), {…}"
                resultReport += `Plants in storage: ${storageArr}`;
            }   
            
            return resultReport;
    }
    
}



//test :

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // Uncaught Error Error: Not enough space in the garden.

console.log(`-------------------------------------------------------`);

// const myGarden2 = new Garden(250)
// console.log(myGarden2.addPlant('apple', 20));
// console.log(myGarden2.addPlant('orange', 100));
// console.log(myGarden2.addPlant('cucumber', 30));
// console.log(myGarden2.ripenPlant('apple', 10));
// console.log(myGarden2.ripenPlant('orange', 1));
// console.log(myGarden2.ripenPlant('orange', 4));

// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The cucumber has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // Uncaught Error Error: The orange is already ripe.

console.log(`----------------------------------------------------`);

// const myGarden3 = new Garden(250)
// console.log(myGarden3.addPlant('apple', 20));
// console.log(myGarden3.addPlant('orange', 100));
// console.log(myGarden3.addPlant('cucumber', 30));
// console.log(myGarden3.ripenPlant('apple', 10));
// console.log(myGarden3.ripenPlant('orange', 1));
// console.log(myGarden3.ripenPlant('olive', 30));

// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The cucumber has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // Uncaught Error Error: There is no olive in the garden.

console.log(`----------------------------------------------------------------------`);

// const myGarden4 = new Garden(250)
// console.log(myGarden4.addPlant('apple', 20));
// console.log(myGarden4.addPlant('orange', 100));
// console.log(myGarden4.addPlant('cucumber', 30));
// console.log(myGarden4.ripenPlant('apple', 10));
// console.log(myGarden4.ripenPlant('orange', 1));
// console.log(myGarden4.ripenPlant('cucumber', -5));

// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The cucumber has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // Uncaught Error Error: The quantity cannot be zero or negative.


console.log(`-----------------------------------------------------------------`);

// const myGarden5 = new Garden(250)
// console.log(myGarden5.addPlant('apple', 20));
// console.log(myGarden5.addPlant('orange', 200));
// console.log(myGarden5.addPlant('raspberry', 10));
// console.log(myGarden5.ripenPlant('apple', 10));
// console.log(myGarden5.ripenPlant('orange', 1));
// console.log(myGarden5.harvestPlant('apple'));
// console.log(myGarden5.harvestPlant('olive'));

// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The raspberry has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // The apple has been successfully harvested.
// // Uncaught Error Error: There is no olive in the garden.



console.log(`-----------------------------------------------------------`);


// const myGarden6 = new Garden(250)
// console.log(myGarden6.addPlant('apple', 20));
// console.log(myGarden6.addPlant('orange', 200));
// console.log(myGarden6.addPlant('raspberry', 10));
// console.log(myGarden6.ripenPlant('apple', 10));
// console.log(myGarden6.ripenPlant('orange', 1));
// console.log(myGarden6.harvestPlant('orange'));
// console.log(myGarden6.generateReport());

// // The apple has been successfully planted in the garden.
// // The orange has been successfully planted in the garden.
// // The raspberry has been successfully planted in the garden.
// // 10 apples have successfully ripened.
// // 1 orange has successfully ripened.
// // The orange has been successfully harvested.
// // The garden has 220 free space left.
// // Plants in the garden: apple, raspberry
// // Plants in storage: orange (1)


//****************************************************************************************** */



let myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());

// "The apple has been successfully planted in the garden."
// "The orange has been successfully planted in the garden."
// "The raspberry has been successfully planted in the garden."
// "10 apples have successfully ripened."
// "1 orange has successfully ripened."
// "The orange has been successfully harvested.", 
// "The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)"
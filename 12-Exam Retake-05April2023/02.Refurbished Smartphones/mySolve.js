
// 83/100

class RefurbishedSmartphones {
    constructor(retailer){
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones =[];
        this.revenue = 0;
        //Hint: You can add more properties to help you finish the task.  
    }


    
    addSmartphone(model, storage, price, condition){ //his method should add a new smartphone to the retailer. The method accepts 4 arguments:
    //•	If any of the following requirements is NOT fulfilled, an error with the following message should be thrown: 
        if(model === ""  || Number(storage) < 0 || Number(price) < 0 || condition === ""){ //Hint: Zero is also a positive number.
            throw new Error("Invalid smartphone!");
        }

        //•	Otherwise, you should add the smartphone, with properties: {model, storage, price, condition} 
        this.availableSmartphones.push({ model, storage, price, condition}); // !{model, storage: storage, price, condition: condition}
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed}$`;
        //•	When returning the result, the Price must be rounded to the second decimal point!
    }



    sellSmartphone(model, desiredStorage){

        let soldPrice = 0;

        //This method should search for a smartphone with the given model in the availableSmartphones array,
        let findPhone = this.availableSmartphones.find(phon => phon.model == model);

        //•	If a smartphone with the given model cannot be found, an error with the following message should be thrown:
        if (!findPhone){
            throw new Error(`${model} was not found!`);

        } else {//• If you find the smartphone with the given model, you should look up its storage. 

            let difference = desiredStorage - findPhone.storage;

            //o	If the found smartphone’s storage is more than or equal to the desiredStorage – the price stays the same!
            if(Number(desiredStorage) <= findPhone.storage){
                soldPrice = findPhone.price;
            } else if(difference <= 128){
                //o	If the difference between the smartphone’s storage and the desiredStorage is less or equal to 128 GB – the price gets deducted by 10%!
                    let discount = findPhone.price * 0.10; //deducted by 10%!
                    soldPrice = findPhone.price - discount;
            } else if(128 < difference){
                //o	If the difference between the smartphone’s storage and the desiredStorage is more than 128 GB  – the price gets deducted by 20%!
                    let discount = findPhone.price * 0.10; //deducted by 20%!
                    soldPrice = findPhone.price - discount;
            }

                
                // and add it to the soldSmartphones array in the following format: {model, storage, soldPrice}
                this.soldSmartphones.push({model: findPhone.model, storage: findPhone.storage, soldPrice});
                
                //•	You should remove the smartphone from the availableSmartphones array 
                this.availableSmartphones.filter(x => x.model != model);
                this.revenue += soldPrice; // $ put money in account

                //•	Finally, you must add the soldPrice to the revenue and return:
                return `${model} was sold for ${soldPrice.toFixed(2)}$`; //Note: soldPrice must be rounded to the second decimal point!
            
        }
    }


    upgradePhones(){ // This method should find the storage for every available smartphone and double it, then return them separated by a new line in format:
       
        //•	If there are no available smartphones, throw:
        if(this.availableSmartphones.length === 0){
            throw new Error(`There are no available smartphones!`);
        }

        //This method should find the storage for every available smartphone and double it, 
        this.availableSmartphones = this.availableSmartphones.map((phone) =>{
            let doubleStorage = phone.storage * 2;
            //Note: price must be rounded to the second decimal point!
            let roundedPrice = phone.price.toFixed(2);
            return { 
                ...phone,
                storage: doubleStorage,
                price: roundedPrice,
            };
        });

        //then return them separated by a new line in format:
        const availablePhones = this.availableSmartphones.map((phone) => 
            `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`
        ).join("\n");

        return `Upgraded Smartphones:`+ `\n` + `${availablePhones}`;
    }


    salesJournal(criteria) { 
    //This method accepts 1 argument. It should sort the sold smartphones, based on a given criteria. The two possible criteria are – "storage" or "model"

    //•	If the given criteria do not match either of the possible criteria, an error with the following message should be thrown:
        if((criteria !== "storage") && (criteria !== "model")){
            throw new Error("Invalid criteria!");
        }

        //•	If the given criteria is "storage" – the sold smartphones must be sorted by their storage in descending order;
        if(criteria === "storage"){
           this.soldSmartphones.sort((a,b) => b.storage - a.storage);
        }


        //•	If the given criteria is "model" – the sold smartphones must be sorted alphabetically by their model;
        if(criteria === "model"){
            this.soldSmartphones.sort((a,b) => a.model.localeCompare(b.model));
        }

        let soldSmartphonesCount = this.soldSmartphones.length; 
        let phoneInfoPrintArr = [];
        this.soldSmartphones.forEach(phon => phoneInfoPrintArr.push(`${phon.model} / ${phon.storage} GB / ${phon.soldPrice.toFixed(2)}$`))
        //•	Finally, return all sorted sold smartphones separated by a new line in format:
        return `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$` + `\n` 
        + `${soldSmartphonesCount} smartphones sold:`+ `\n`
        + phoneInfoPrintArr.join("\n"); //`{model} / {storage} GB / {price}$`;
    }
}



// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));


// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));
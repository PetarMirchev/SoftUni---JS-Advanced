class WineSelection {

    constructor(space){
        this.space = Number(space);
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price){//The wineName and wineType are of type string and price is type number. 
        //•	If there's not enough space in the cellar for the bottle, throw an Error:
        if(this.space <= this.wines.length) {//!
            throw new Error("Not enough space in the cellar.");
        }

        //•	Otherwise, this function should add the wine, with the properties: wineName, wineType, price, paid: default false
        this.wines.push({wineName, wineType, price, paid: false});

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }


    payWineBottle(wineName, price){
        // search for the passed wineName in collection  
        const searchedWine = this.wines.find((w) => w.wineName === wineName); //{wineName, wineType, price, paid: false}

        //•	If the wine is not found, throw an Error:
        if(searchedWine === undefined){
            throw new Error(`${wineName} is not in the cellar.`);
        }

        //•	If the wine has already paid, throw an Error:
        if(searchedWine.paid){
            throw new Error(`${wineName} has already been paid.`);
        }

        //•	Otherwise, this function set paid to true on the found wine, add price of the bottle to bill and return
        searchedWine.paid = true; //!   < ---------------------------------
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }


    openBottle(wineName){
        
        const searchedWineToOpen = this.wines.find((w) => w.wineName === wineName); //{wineName, wineType, price, paid: false}
        
        //•	If the wine is not found, throw an Error:
        if(!searchedWineToOpen){
            throw new Error("The wine, you're looking for, is not found.");
        }

        //•	If the wine hasn't paid, throw an Error:
        if(searchedWineToOpen.paid === false){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }


        //!•	Otherwise, this function should remove the wine from the array and return:
        let index  = this.wines.indexOf(searchedWineToOpen); // find position/index number from collection
        this.wines.splice(index, 1); // cut from collection 
        return `You drank a bottle of ${wineName}.`;
    }


    cellarRevision(wineType){ //This method can be called with one parameter or without any.

        if(wineType){//If the method is called with a parameter for wineType:
            
            const searchedWineTypeToReport = this.wines.find((w) => w.wineType === wineType); //{wineName, wineType, price, paid: false}

            //If no parameter is provided, the method should return the full information of the cellar 
            if(!searchedWineTypeToReport){
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            //check is wine 'Has Paid or Not Paid'?
            let statusPaidProduct = "";
            if(searchedWineTypeToReport.paid){
                statusPaidProduct = "Has Paid";

            } else { statusPaidProduct = "Not Paid"; };

            //•	Return only the information about the wine from the given wineType:
            return `${searchedWineTypeToReport.wineName} > ${searchedWineTypeToReport.wineType} - ${statusPaidProduct}.`


        } else {//If no parameter is provided, the method should return the full information of the cellar 

            let printResult = [];
            //•	At the first line:
            printResult.push(`You have space for ${ this.space - this.wines.length } bottles more.`);

            //•	At the second line:
            printResult.push(`You paid ${this.bill}$ for the wine.`);

            //•	On the next lines, display information about each wine, 
            // sorted alphabetically ascending, by their wineName:
            let sortedWines = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));

            sortedWines.map((x) =>{ // construct result
                
                //check is wine 'Has Paid or Not Paid'?
                let statusPaidProduct = "";
                if(x.paid){
                    statusPaidProduct = "Has Paid";
    
                } else { statusPaidProduct = "Not Paid"; };

                printResult.push(`${x.wineName} > ${x.wineType} - ${statusPaidProduct}.`);
            });

            return printResult.join("\n").trim(); 
        }
    }
}


// //* OK
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));


// //* OK
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

//* OK
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// * OK
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));


//* OK
// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());



//Testing cellarRevision()
// const WineSelection = result;
// let selection = new WineSelection(5);

// const selection = new WineSelection(5)

// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);

// console.log(selection.cellarRevision());

// assert.equal(selection.cellarRevision(), 
// `You have space for 2 bottles more.
// Bodegas Godelia Mencía > Rose - Not Paid.
// Cabernet Sauvignon Napa Valley > Red - Not Paid.
// Sauvignon Blanc Marlborough > White - Not Paid.`);

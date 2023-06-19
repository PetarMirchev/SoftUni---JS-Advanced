
const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number"||
        typeof buy !== "boolean"
        ) {
          throw new Error("Invalid input!");
        } else {
          let totalPrice = ticketPrice * ticketCount;
          return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
        }
      }
    },
   checkTicket(ticketNumbers, luckyNumbers) {
      if (
        !Array.isArray(ticketNumbers) ||
        !Array.isArray(luckyNumbers) ||
        ticketNumbers.length !== 6 ||
        luckyNumbers.length !== 6
      ) {
        throw new Error("Invalid input!");
      }
    
      const uniqueTicketNumbers = ticketNumbers.filter(
        (number, index, array) => array.indexOf(number) === index
      );
      let winningNumbers = 0;
    
      for (const number of uniqueTicketNumbers) {
        if (luckyNumbers.includes(number)) {
          winningNumbers++;
        }
      }
    
      if (winningNumbers >= 3 && winningNumbers < 6) {
        return "Congratulations you win, check your reward!";
      } else if (winningNumbers === 6) {
        return "You win the JACKPOT!!!";
      }
    }
    ,
    secondChance(ticketID, secondChanceWinningIDs) {
      if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
        throw new Error("Invalid input!");
      }
      if (secondChanceWinningIDs.includes(ticketID)) {
        return "You win our second chance prize!";
      } else {
        return "Sorry, your ticket didn't win!";
      }
    },
  };
  
  //module.exports = lottery;
  
 module.exports = { lottery };

























//************************************************************* */



// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }
        
//     return string.charAt(index);
// } //03

//    module.exports = { lookupChar };









//***************************************************************************************************** */

// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
    
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
//    }
  


//    //exports.isOddOrEven = isOddOrEven
//    module.exports = { isOddOrEven };




//************************************************************************************************** */

// class Cube {
//     constructor(length) {
//     this.length = length;
//     }
    
//     getSideLength () {
//     return this.length;
//     }
    
//     getSurfaceArea () {
//     return (this.length * this.length) * 6;
//     }
    
//     getVolume () {
//     return Math.pow(this.length,3);
//     }
//     }
    
//    module.exports = { Cube:Cube}
const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};


//********************************************************************************************* */


//testing:

describe("bookSelection tests", () => {

  //1.0
  describe("function -->isGenreSuitable<-- test", () => {
    it("test  Thriller & Horror & age = 12, age < 13 ----> NOK", function (){
      //Arrange/Preparation
      let genre1 = "Thriller";
      let genre2 = "Horror";
      let age1 = 12;
      let age2 = 13;
      //Act/Call
      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age1);
      let result3 = bookSelection.isGenreSuitable(genre1, age2);
      let result4 = bookSelection.isGenreSuitable(genre1, age2);

      //Assert/Check
      expect(result1).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`);
      expect(result2).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`);
      expect(result3).to.equal(`Those books are suitable`);
      expect(result4).to.equal(`Those books are suitable`);
    })
  })
  //1.1
  describe("function -->isGenreSuitable<-- test pass OK data", () => {
    it("test  Thriller & Horror & age = 12, age < 13", function (){
      //Arrange/Preparation
      let genre1 = "Random";
      let genre2 = "Killers";
      let age1 = 12;
      let age2 = 13;
      //Act/Call
      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age2);

      //Assert/Check
      expect(result1).to.equal(`Those books are suitable`);
      expect(result2).to.equal(`Those books are suitable`);
    })
  })
})


//2.0
describe("function -->isItAffordable<-- tests", () => {
  it("whit non-number price and budget, should throw Error for correct!", function (){
     //Arrange/Preparation
     let price1 = "20";
     let budget1= "80";

     //Act/Call
     let result1Func = () => bookSelection.isItAffordable(price1, 30);
     let result2Func = () => bookSelection.isItAffordable(10, budget1);

     //Assert/Check
     expect(result1Func).to.throw(Error, "Invalid input");
     expect(result2Func).to.throw(Error, "Invalid input");
  })

  it("with more budget then price, should return correct result", function (){
    //Arrange/Preparation
    let price1 = 30;
    let budget1 = 30;
    let price2 = 22.5
    let budget2 = 33.3;

    //Act/Call
    let result1 = bookSelection.isItAffordable(price1, budget1);
    let result2 = bookSelection.isItAffordable(price2, budget2);

    //Assert/Check
    expect(result1).to.equal(`Book bought. You have ${budget1 - price1}$ left`);
    expect(result2).to.equal(`Book bought. You have ${budget2 - price2}$ left`);
 })

 it("with more budget then price, should return correct result", function (){
  //Arrange/Preparation
  let price1 = 80;
  let budget1 = 30;
  let price2 = 32.5
  let budget2 = 23.5;

  //Act/Call
  let result1 = bookSelection.isItAffordable(price1, budget1);
  let result2 = bookSelection.isItAffordable(price2, budget2);

  //Assert/Check
  expect(result1).to.equal(`You don't have enough money`);
  expect(result2).to.equal("You don't have enough money");
})

describe("suitableTitles test", function (){

  it("test whit non-arrays & non-string data, should throw Error for OK (for validation)", function (){
       //Arrange/Preparation
       let arr1 = "20";
       let arrCorrect = [{title:'random', genre:'Kill Horror'}, {title:'x-men', genre:'fantasy'}];
       let genre = 80;
  
       //Act/Call
       let result1Func = () => bookSelection.suitableTitles(arr1, "test");
       let result2Func = () => bookSelection.suitableTitles(arrCorrect, genre);
  
       //Assert/Check
       expect(result1Func).to.throw(Error, "Invalid input");
       expect(result2Func).to.throw(Error, "Invalid input");
  })



  it("test whit correct arrays & string data, should return correct data", function (){
    //Arrange/Preparation
    let arrCorrect = [{title:'random', genre:'Kill Horror'}, {title:'x-men', genre:'fantasy'}];
    let genre = 'fantasy';
    let resultExpect = arrCorrect.filter(x => x.genre === genre).map(x => x.title);

    //Act/Call
    let result1 = bookSelection.suitableTitles(arrCorrect, genre);
    let result2 = bookSelection.suitableTitles([], genre);

    //Assert/Check
    expect(result1).to.deep.equal(resultExpect);
    expect(result2).to.deep.equal([]);
})

})


});
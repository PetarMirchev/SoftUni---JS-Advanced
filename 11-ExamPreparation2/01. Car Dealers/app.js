window.addEventListener("load", solve);

function solve() {
  // 1.0 take input
  let inputFieldMake = document.getElementById("make");
  let inputFieldModel = document.getElementById("model");
  let inputFieldProductionYear = document.getElementById("year");
  let inputFieldFuel = document.getElementById("fuel");
  let inputFieldOriginalCost = document.getElementById("original-cost");
  let inputFieldSellingPrice = document.getElementById("selling-price");
  
  //!other elements from DOM
  let btnPublish = document.getElementById("publish"); //BTN
  let tbodyStoreOffers = document.getElementById("table-body");
  //4.1 target area for post info --> <ul id="cars-list">
  let sellBox = document.getElementById("cars-list");
  let profitMadeEl = document.getElementById("profit"); // 4.3 ...


  // 2.0  information from the input fields must be added to the tbody with the id “table-body”. 
  btnPublish.addEventListener("click", onClickCreateOffer);

  function onClickCreateOffer(e){
    e.preventDefault();
    // collect data & store it to variables
    const make = inputFieldMake.value;
    const model =  inputFieldModel.value;
    const year =  inputFieldProductionYear.value;
    const fuel = inputFieldFuel.value;
    const originalCost = Number(inputFieldOriginalCost.value);
    const sellingPrice = Number(inputFieldSellingPrice.value);



    // 2.1 validate input to be correctly
    if (make === "" || model === "" || year === "" || fuel  === "" || 
    originalCost >= sellingPrice){
      return;
    }
    // if ( !make || !model || !year || !fuel ||
    //   originalCost <= sellingPrice ) {
    //   return;
    // }

  
    // 2.2 create html table for import data from form
    //create <tr>
    let trFrame = document.createElement('tr');
    trFrame.classList.add("row");

    //create <td>
    let td1 = document.createElement("td");
    td1.textContent = make; // <td>Audi</td>

    let td2 = document.createElement("td");
    td2.textContent = model; // <td>A4</td>

    let td3 = document.createElement("td");
    td3.textContent = year; // <td>2020</td>

    let td4 = document.createElement("td");
    td4.textContent = fuel; // <td>diesel</td>

    let td5 = document.createElement("td");
    td5.textContent = originalCost; // <td>10000</td>

    let td6 = document.createElement("td");
    td6.textContent = sellingPrice; // <td>11000</td>


     let tdButtonsArea = document.createElement("td");

     // define buttons
     let btnEdit = document.createElement("button");
     btnEdit.classList.add("action-btn", "edit");
     btnEdit.textContent = "Edit";

     let btnSell = document.createElement("button");
     btnSell.classList.add("action-btn", "sell");
     btnSell.textContent = "Sell";

     // attach buttons to the <td>
     tdButtonsArea.appendChild(btnEdit);
     tdButtonsArea.appendChild(btnSell);

     //2.3 attach created all data <td> elements to <tr class="row"> --> start form top do bottom!
     trFrame.appendChild(td1);
     trFrame.appendChild(td2);
     trFrame.appendChild(td2);
     trFrame.appendChild(td3);
     trFrame.appendChild(td4);
     trFrame.appendChild(td5);
     trFrame.appendChild(td6);
     trFrame.appendChild(tdButtonsArea);


     //2.4 attach row(box on created data) to tbody
     tbodyStoreOffers.appendChild(trFrame);


     //2.5 clear the input fields!
     clearAll();



     // 3.0 Edit logic on post
     btnEdit.addEventListener("click", function editPost(e){ // < ------
      e.preventDefault();
      //debugger

      //3.1 return data into fields to be changed!
      inputFieldMake.value = make;
      inputFieldModel.value = model
      inputFieldProductionYear.value = year;
      inputFieldFuel.value = fuel;
      inputFieldOriginalCost.value = originalCost;
      inputFieldSellingPrice.value = sellingPrice;


      //3.2 delete post after moving to input fields
      trFrame.remove();
     });




     // 4.0 Sell Car --> close offer & count the money
     btnSell.addEventListener("click", function sellCar(e){
      e.preventDefault();

      // 4.2 crate elements & put data into dem
      let liWrapper = document.createElement("li");
      liWrapper.classList.add("each-list"); // <li class="each-list">

      let spanCarName = document.createElement("span");
      spanCarName.textContent = `${make} ${model}`; // BMV X1

      let yearCar = document.createElement("span");
      yearCar.textContent = year;  // 2020

      let spanEarnedMoney = document.createElement("span");
      //Third span should include the difference between the Selling price and Original price
      let defProfit = sellingPrice - originalCost;  // 1000 = 2000-1000
      spanEarnedMoney.textContent = defProfit;

      //attach everting 
      liWrapper.appendChild(spanCarName);
      liWrapper.appendChild(yearCar);
      liWrapper.appendChild(spanEarnedMoney);

      sellBox.appendChild(liWrapper);

      //debugger

      // 4.4 display total amount of profit made by selling all cars!
      profitMadeEl.textContent = (Number(profitMadeEl.textContent) + defProfit).toFixed(2);

      //4.3 delete post after sell car & put data for car and profit to next area
      trFrame.remove();   
     })
    }

  // 2.5 Then, clear all input fields
    function clearAll(){
      inputFieldMake.value = "";
      inputFieldModel.value = "";
      inputFieldProductionYear.value = "";
      inputFieldFuel.value = "";
      inputFieldOriginalCost.value = "";
      inputFieldSellingPrice.value = "";
    }
}




/*
element.style.display = 'none'
element.style.display = ''
*/
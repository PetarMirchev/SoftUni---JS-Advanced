window.addEventListener('load', solve);

//95/100

function solve() {

        // 1.0 take input
        let inputFieldCarModel = document.getElementById("car-model");
        let inputFieldCarYear = document.getElementById("car-year");
        let inputFieldPartName = document.getElementById("part-name");
        let inputFieldPartNumber = document.getElementById("part-number");
        let inputFieldCondition = document.getElementById("condition");
      
        let btnNext = document.getElementById("next-btn");
      
        let infoListClass = document.querySelector(".info-list"); // middle box
        let confirmListClass = document.querySelector(".confirm-list"); // right box
        let completeImgShow = document.getElementById("complete-img");
      
      
      
        btnNext.addEventListener("click", onNext);
      
        function onNext(e){
              e.preventDefault();
              // check --> ar Year must be between 1980 and 2023
              if(inputFieldCarModel.value == ''
              || inputFieldCarYear.value == ''
              || inputFieldPartName.value == ''
              || inputFieldPartNumber.value == ''
              || inputFieldCondition.value == '' ) {
                  return;
              }

              let x1 = Number(inputFieldCarYear.value);
              let x2 = Number(inputFieldCarYear.value);
              if(x1 < 1980){
                return;
              }
              if(2023 < x2){
                return;
              }


              //values from input attached
              let CarModel = inputFieldCarModel.value;
              let CarYear = inputFieldCarYear.value;
              let PartName = inputFieldPartName.value;
              let PartNumber = inputFieldPartNumber.value;
              let Condition = inputFieldCondition.value;
      
              //**************************************************** */
              //create table
      
              // let infoListClass = document.querySelector(".info-list");
              let liEl = document.createElement('li');
              liEl.classList.add("part-content");
      
              let articleEl = document.createElement("article");
      
              let p1CarModel = document.createElement("p");
              p1CarModel.textContent = `Car Model: ${CarModel}`;
      
              let p2CarYear = document.createElement("p");
              p2CarYear.textContent = `Car Year: ${Number(CarYear)}`;
      
              let p3PartName = document.createElement("p");
              p3PartName.textContent = `Part Name: ${PartName}`;
      
              let p4PartNumber= document.createElement("p");
              p4PartNumber.textContent = `Part Number: ${PartNumber}`;
      
              let p5Condition = document.createElement("p");
              p5Condition.textContent = `Condition: ${Condition}`;
      
              let btnEdit = document.createElement("button");
              btnEdit.classList.add("edit-btn");
              btnEdit.textContent = "Edit";
         
              let btnContinue = document.createElement("button");
              btnContinue.classList.add("continue-btn");
              btnContinue.textContent = "Continue";
      
              //debugger
              //* attack elements in new form <-------
              articleEl.appendChild(p1CarModel);
              articleEl.appendChild(p2CarYear);
              articleEl.appendChild(p3PartName);
              articleEl.appendChild(p4PartNumber);
              articleEl.appendChild(p5Condition);
      
              liEl.appendChild(articleEl);
              liEl.appendChild(btnEdit);
              liEl.appendChild(btnContinue);
              infoListClass.appendChild(liEl);
      
      
      
      
              // reset input data on 1 table
              inputFieldCarModel.value = "";
              inputFieldCarYear.value = "";
              inputFieldPartName.value = "";
              inputFieldPartNumber.value = "";
              inputFieldCondition.value = "";
              //block button
              btnNext.disabled = true;
      
      
              //! 3.0 Edit logic on post
              btnEdit.addEventListener("click", function editPost(e){ // < ------
              e.preventDefault();
              //debugger
      
              //3.1 return data into fields to be changed!
              inputFieldCarModel.value = CarModel;
              inputFieldCarYear.value = CarYear;
              inputFieldPartName.value = PartName;
              inputFieldPartNumber.value = PartNumber;
              inputFieldCondition.value = Condition;
      
              //3.2 delete post after moving to input fields
              liEl.remove();
              btnNext.disabled = false;
             });
      
      
             btnContinue.addEventListener("click", function sellCar(e){
              e.preventDefault();
              //let confirmListClass = document.querySelector(".confirm-list");
              // !
              let liEl1 = document.createElement('li');
              liEl1.classList.add("part-content");
      
              let articleEl1 = document.createElement("article");
      
              let p1CarModel1 = document.createElement("p");
              p1CarModel1.textContent = `Car Model: ${CarModel}`;
      
              let p2CarYear1 = document.createElement("p");
              p2CarYear1.textContent = `Car Year: ${Number(CarYear)}`;
      
              let p3PartName1 = document.createElement("p");
              p3PartName1.textContent = `Part Name: ${PartName}`;
      
              let p4PartNumber1 = document.createElement("p");
              p4PartNumber1.textContent = `Part Number: ${PartNumber}`;
      
              let p5Condition1 = document.createElement("p");
              p5Condition1.textContent = `Condition: ${Condition}`;
      
              let btnConfirm = document.createElement("button");
              btnConfirm.classList.add("confirm-btn");
              btnConfirm.textContent = "Confirm";
         
              let btnCancel = document.createElement("button");
              btnCancel.classList.add("cancel-btn");
              btnCancel.textContent = "Cancel";
      
      
                 //debugger
              //* attack elements in last form <-------
              articleEl1.appendChild(p1CarModel1);
              articleEl1.appendChild(p2CarYear1);
              articleEl1.appendChild(p3PartName1);
              articleEl1.appendChild(p4PartNumber1);
              articleEl1.appendChild(p5Condition1);
      
              liEl1.appendChild(articleEl1);
              liEl1.appendChild(btnConfirm);
              liEl1.appendChild(btnCancel);
              confirmListClass.appendChild(liEl1)
      
              liEl.remove();
      
      
      
              btnConfirm.addEventListener("click", function onConfirm(e){
                      e.preventDefault();
      
                      completeImgShow.style.visibility = "visible"; //hidden
                      liEl1.remove();
                      btnNext.disabled = false;
              });
      
      
              btnCancel.addEventListener("click", function onConfirm(e){
                      e.preventDefault();
      
                      btnNext.disabled = false;
                      liEl1.remove();
              });
      
             });     
        }
      };
    
    

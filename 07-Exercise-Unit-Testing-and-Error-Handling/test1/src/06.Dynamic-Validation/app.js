function validate() {
   // capture events
    let inputEmailText = document.getElementById("email");

    // attach events
    inputEmailText.addEventListener("change", onChange);


   // callbacks
    function onChange(e){

        let { target } = e;
        let targetStringValue = target.value;

        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        let isRemoveOperation = pattern.test(targetStringValue);

        let operation = undefined;
        if (isRemoveOperation === true){
           operation = "remove";
        } else  if(isRemoveOperation === false){
            operation = "add";
        }
        //const operation = isRemoveOperation ? "remove" : "add";


        target.classList[operation]("error");
        //pepi@gmail.com
    }  
}




// function validate() {
//     // capture events
//     const emailInput = document.getElementById("email");
  
//     // attach events
//     emailInput.addEventListener("change", onChange);
  
//     // callbacks
//     function onChange(e) {
//       const { target } = e;
//       const targetStringValue = target.value;
  
//       const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
//       const isRemoveOperation = pattern.test(targetStringValue);
  
//       const operation = isRemoveOperation ? "remove" : "add";
//       target.classList[operation]("error");
//     }
//   }
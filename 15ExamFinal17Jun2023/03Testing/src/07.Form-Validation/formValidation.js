// function validate() {
   
 /*
    The validations should be as follows:
     The username needs to be between 3 and 20 symbols inclusively and only letters and numbers are
    allowed.
     The password and confirm-password must be between 5 and 15 inclusively symbols and only word
    characters are allowed (letters, numbers, and _).
     The inputs of the password and confirm-password field must match.
     The email field must contain the “@” symbol and at least one "."(dot) after it.
    If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible and the
    Company Number field must also be validated, if it isn’t checked the Company fieldset should have the style
    "display: none;" and the value of the Company Number field shouldn’t matter.
     The Company Number field must be a number between 1000 and 9999.
     Use addEventListener() function to attach an event listener for the "change" event to the checkbox.

    Every field with an incorrect value when the [Submit] button is pressed should have the following style applied
    border-color: red;, alternatively, if it’s correct it should have style border: none;. If there are required
    fields with an incorrect value when the [Submit] button is pressed, the div with id="valid" should become
    hidden ("display: none;"), alternatively if all fields are correct the div should become visible.
*/



// }




function validate() {
    // dictionaries
    const html = {
      companyCheck: document.getElementById("company"),
      submit: document.getElementById("submit"),
      validDiv: document.getElementById("valid"),
      companyInfo: document.getElementById("companyInfo"),
    };
  
    const inputFields = {
      usersname: document.getElementById("username"),
      email: document.getElementById("email"),
      password: document.getElementById("password"),
      "confirm-password": document.getElementById("confirm-password"),
      companyNumber: document.getElementById("companyNumber"),
    };
  
    // helper funcs
    const checkLength = (inputValue, lowerLen, greaterLen) =>
      inputValue.length >= lowerLen && inputValue.length <= greaterLen;
  
    const checkPassword = (inputValue, lowerLen, greaterLen, field) => {
      return (
        checkLength(inputValue, lowerLen, greaterLen) &&
        /^\w+$/g.test(inputValue) &&
        inputValue === inputFields[field].value
      );
    };
  
    const validate = {
      usersname: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
      password: (v) => checkPassword(v, 5, 15, "confirm-password"),
      "confirm-password": (v) => checkPassword(v, 5, 15, "password"),
      email: (v) => /^.*@.*\..*$/g.test(v),
      companyNumber: (v, isChecked) => {
        if (isChecked) {
          return v >= 1000 && v <= 9999;
        }
  
        return true;
      },
    };
  
    const changeBorder = (isChecked, element) => {
      const style = isChecked ? "border: none" : "border-color: red";
      element.style = style;
    };
  
    // attach event listeners
    html.companyCheck.addEventListener("change", onChange);
    html.submit.addEventListener("click", onClick);
  
    // callbacks
    function onChange(e) {
      const displayStyle = e.target.checked === true ? "block" : "none";
      html.companyInfo.style.display = displayStyle;
    }
  
    function onClick(e) {
      e.preventDefault();
  
      const isChecked = html.companyCheck.checked;
      let oneInvalid = false;
  
      Object.entries(inputFields).forEach(([name, valueField]) => {
        const valid = validate[name](valueField.value, isChecked);
        changeBorder(valid, inputFields[name]);
  
        if (!valid) {
          oneInvalid = true;
        }
      });
  
      const displayStyled = oneInvalid ? "none" : "block";
      html.validDiv.style.display = displayStyled;
    }
  }
  
//   const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     //   key: ?/??
//   };
  
//   obj.a; // 1
//   obj["a"]; // 1
  
//   const keys = ["a", "b", c];
//   keys.forEach((key) => {
//     obj[key] = 4;
//   });

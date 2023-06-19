function calculator() {
    // const
    const PLUS_SIGN = "+";
    const MINUS_SIGN = "-";
  
    // dictionary
    const html = {
      s1: "",
      s2: "",
      output: "",
    };
  
    const OPERANDS = {
      [PLUS_SIGN]: (a, b) => a + b,
      [MINUS_SIGN]: (a, b) => a - b,
    };
  
    // helper function -> x , y  +/-
    function calc(s1Value, s2Value, operand) {
      return OPERANDS[operand](Number(s1Value), Number(s2Value));
    }
  
    return {

  // *init (selector1, selector2, resultSelector) - initializes the object to work with the elements corresponding to the supplied selectors.
      init: (selector1, selector2, resultSelector) => { 
        html.s1 = document.querySelector(selector1);
        html.s2 = document.querySelector(selector2);
        html.output = document.querySelector(resultSelector);
        // debugger;
      },

      //There will be no input your function must only provide an object.
      add: () => { //add () - adds the numerical value of the element corresponding to selectors & print result
        //debugger;
        html.output.value = calc(html.s1.value, html.s2.value, PLUS_SIGN);
      },
      subtract: () => { //subtract () - subtracts the numerical value of the element corresponding to selector
        //debugger;
        html.output.value = calc(html.s1.value, html.s2.value, MINUS_SIGN);
      },
    };
  }

  
  
  const calculate = calculator();
  calculate.init("#num1", "#num2", "#result");


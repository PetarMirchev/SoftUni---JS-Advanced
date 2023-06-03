function calc() {

    // get in ID=num1 input value = '100' & convert to Number
    let num1 = Number(document.getElementById('num1').value);
    // get in ID=num2 input value = '101' & convert to Number
    let num2 = Number(document.getElementById('num2').value);
    let sum = document.getElementById('sum');

    let result =  num1 + num2; // 3 = 1 + 2;

    sum.value = result; //put the result in textarea

    // console.log(num1);
    // console.log(num2);
    // console.log(result);
}
 
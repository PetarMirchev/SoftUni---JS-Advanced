function subtract() {

    let firstNumber =  Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let sumValueResult = document.getElementById('result');

    let resultNumber = firstNumber - secondNumber; // 13.33 - 22.18 = -8.85

    sumValueResult.textContent = resultNumber; // push result/append into <div>

    //console.log('TODO:...');
}
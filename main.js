// global variables
const calculatorDisplay = document.querySelector("#numberInput");
const equalButton = document.querySelector("#equalButton");
const clearButton = document.querySelector("#clearButton");

// operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// number buttons
const numberButtons = document.querySelectorAll(".number");

// event listeners for buttons
numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick)
});

operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick)
});

equalButton.addEventListener("click", handleEqualClick);

clearButton.addEventListener("click", handleEqualClick);

// functions to handle button clicks
function handleNumberClick(event) {
    let digit = event.target.value
    calculatorDisplay.append(digit);
}

function handleOperatorClick(event) {
    let op = event.target.value
    calculatorDisplay.append(op);
}

function handleEqualClick(event) {

}

function handleClearClick() {

}

// calculator functions
function addNumbers(numOne, numTwo){
    return numOne + numTwo;
}

function subtractNumbers(numOne, numTwo) {
    return numOne - numTwo;
}

function multiplyNumbers(numOne, numTwo) {
    return numOne * numTwo;
}

function divideNumbers(numOne, numTwo) {
    return numOne / numTwo;
}

function clearDisplay() {
    calculatorDisplay.value = ""
}

function Operate(numOne, selectedOperator, numTwo) {
    const result = `${numOne} ${selectedOperator} ${numTwo}`
    return result;
}
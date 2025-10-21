// global variables
const calculatorDisplay = document.querySelector("#numberInput");

// operator buttons
const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");
const equalsButton = document.querySelector("#equalsButton");
const clearButton = document.querySelector("#clearButton");

// number buttons
const numberButtons = document.querySelectorAll(".number");

// event listener for number buttons



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

function Operate() {
    let numOne =
    let numTwo =
    let selectedOperator =
    const result = `${numOne} ${selectedOperator} ${numTwo}`
    return result;
}
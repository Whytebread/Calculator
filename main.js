// global variables
const calculatorDisplay = document.querySelector("#numberInput");
const equalButton = document.querySelector("#equalButton");
const clearButton = document.querySelector("#clearButton");

// inital variables to store numbers and operator
let numOne = "";
let numTwo = "";
let selectedOperator = "";
let isSecondNumber = false;
calculatorDisplay.value = "";
let justCalculated = false;

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

clearButton.addEventListener("click", handleClearClick);

// functions to handle button clicks
function handleNumberClick(event) {
    let digit = event.target.value
    if (justCalculated) {
        calculatorDisplay.value = "";
        numOne = "";
        numTwo = "";
        selectedOperator = "";
        justCalculated = false;
    }
    calculatorDisplay.value += digit;
}

function handleOperatorClick(event) {
    if (numOne === "") {
        numOne = calculatorDisplay.value;
    }

    let op = event.target.value
    isSecondNumber = true;
    calculatorDisplay.value = ""
    selectedOperator = op;
}

function handleEqualClick() {
    if (numOne !== "" && selectedOperator !== "" && calculatorDisplay.value !== "") {
        numTwo = calculatorDisplay.value;
    }

    const result = Operate(numOne, selectedOperator, numTwo);
    result = parseFloat(result.toFixed(4)); 
    calculatorDisplay.value = result;
    numOne = result;
    numTwo = "";
    selectedOperator = "";
    isSecondNumber = false;
    justCalculated = true;
}

function handleClearClick() {
    clearDisplay();
}

// calculator functions
function addNumbers(numOne, numTwo) {
    const a = parseFloat(numOne);
    const b = parseFloat(numTwo);

    if (isNaN(a) || isNaN(b)) return "Error";

    return a + b;
}

function subtractNumbers(numOne, numTwo) {
    const a = parseFloat(numOne);
    const b = parseFloat(numTwo);

    if (isNaN(a) || isNaN(b)) return "Error";

    return a - b;
}

function multiplyNumbers(numOne, numTwo) {
    const a = parseFloat(numOne);
    const b = parseFloat(numTwo);

    if (isNaN(a) || isNaN(b)) return "Error";

    return a * b;
}

function divideNumbers(numOne, numTwo) {
    const a = parseFloat(numOne);
    const b = parseFloat(numTwo);

    if (isNaN(a) || isNaN(b)) return "Error";
    if (b === 0) return "Nope!";

    return a / b;

}

function clearDisplay() {
    calculatorDisplay.value = ""
    numOne = "";
    numTwo = "";
    selectedOperator = "";
    isSecondNumber = false;
}

function Operate(numOne, selectedOperator, numTwo) {
    if (selectedOperator === "+") return addNumbers(numOne, numTwo);
    if (selectedOperator === "-") return subtractNumbers(numOne, numTwo);
    if (selectedOperator === "*") return multiplyNumbers(numOne, numTwo);
    if (selectedOperator === "/") return divideNumbers(numOne, numTwo);
}
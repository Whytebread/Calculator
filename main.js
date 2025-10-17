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
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");


// calculator functions
function addNumbers(){
    let numOne 
    let numTwo
    let selectedOperator = +
    const result = `${numOne} ${selectedOperator} ${numTwo}`;
    return result;
}

function subtractNumbers() {
    let numOne 
    let numTwo
    let selectedOperator = -
    const result = `${numOne} ${selectedOperator} ${numTwo}`;
    return result;
}

function multiplyNumbers() {
    let numOne 
    let numTwo
    let selectedOperator = *
    const result = `${numOne} ${selectedOperator} ${numTwo}`;
    return result;
}

function divideNumbers() {
    let numTwo
    let selectedOperator = /
    const result = `${numOne} ${selectedOperator} ${numTwo}`;
    return result;
}

function clearDisplay() {
    calculatorDisplay.innerHTML = ""
}

function Operate() {
    
}
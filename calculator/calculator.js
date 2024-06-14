//CALCULATOR PROGRAM
const display = document.getElementById('display')  // for accessing input 

const opButton = document.getElementsByClassName('addition') // for accessing operator class butttons


function appendToDisplay(input) {
    display.value += input                           //for inputing numbers
}


function operatorToDisplay(input) {

    let currentValue = display.value
    let lastChar = currentValue[currentValue.length - 1]
    if (!(['+', '*', '/', '.', '-']).includes(lastChar)) {
        display.value += input
    }

}


function clearDisplay() {                            // to clear input
    display.value = '';
}


function backSpace() {
    display.value = display.value.slice(0, -1)      // to remove last character
}

function calculate() {
    try {

        display.value = eval(display.value)

    } catch (error) {
        console.error(error);
        display.value = 'ERROR'
    }                           // to calculate
}


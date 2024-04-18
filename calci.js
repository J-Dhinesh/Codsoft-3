let display = '';

function addtoDisplay(value) {
    display += value;
    updateDisplay();
}

function removeLastCharacter() {
    display = display.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    display = '';
    updateDisplay();
}

function calculateResult() {
    try {
        display = eval(display);
    } catch (error) {
        display = 'Error';
    }
    updateDisplay();
}
function calculatePercent () {
    document.getElementById('calculator-display');
    display=display/100;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('calculator-display');
    displayElement.textContent = display;
}
const display = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
    display.value = currentInput || '0';
}

function handleButtonClick(value) {
    if (value === 'C') {
        currentInput = '';
        updateDisplay();
        return;
    }

    if (value === '=') {
        if (currentInput) {
            try {
                const result = eval(currentInput);
                currentInput = result.toString(); 
            } catch (error) {
                currentInput = 'Error'; 
            }
            updateDisplay();
        }
        return;
    }

    currentInput += value;
    updateDisplay();
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.dataset.value));
});

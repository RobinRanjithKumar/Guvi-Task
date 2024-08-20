let display = document.getElementById('display');

function insert(value) {
    if (!isNaN(value) || value === '+' || value === '-' || value === '*' || value === '/' || value === '.') {
        display.value += value;
    } else {
        alert('Only numbers are allowed');
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid Expression');
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Handling keyboard events
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
        insert(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else {
        alert('Only numbers are allowed');
    }
});

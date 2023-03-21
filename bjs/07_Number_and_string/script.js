let lastOperand = 0;
let operation = null;
let result = 0;

const inputWindow = document.querySelector('#inputWindow');
const historyWindow = document.querySelector(".history_window");

document.querySelector('#btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
    historyWindow.textContent += '1';
})

document.querySelector('#btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
    historyWindow.textContent += '2';
})

document.querySelector('#btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
    historyWindow.textContent += '3';
})

document.querySelector('#btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
    historyWindow.textContent += '4';
})

document.querySelector('#btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
    historyWindow.textContent += '5';
})

document.querySelector('#btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
    historyWindow.textContent += '6';
})

document.querySelector('#btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
    historyWindow.textContent += '7';
})

document.querySelector('#btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
    historyWindow.textContent += '8';
})

document.querySelector('#btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
    historyWindow.textContent += '9';
})

document.querySelector('#btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
    historyWindow.textContent += '0';
})

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    historyWindow.textContent = '';
    result = 0;
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    historyWindow.textContent += ' + ';
})

document.querySelector('#btn_sub').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sub';
    inputWindow.value = '';
    historyWindow.textContent += ' - ';
})

document.querySelector('#btn_mul').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'mul';
    inputWindow.value = '';
    historyWindow.textContent += ' * ';
})

document.querySelector('#btn_dev').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'dev';
    inputWindow.value = '';
    historyWindow.textContent += ' / ';
})

document.querySelector('#btn_sqrt').addEventListener('click', function () {
    if (inputWindow.value > 0) {
        lastOperand = parseInt(inputWindow.value);
        result = Math.sqrt(lastOperand);
        inputWindow.value = result;
        historyWindow.textContent = '√ ' + lastOperand + ' = ' + result;
    } else {
        historyWindow.textContent = 'error';
    }
})

document.querySelector('#btn_enter').addEventListener('click', function () {
    switch(operation) {
        case 'sum':
            result = lastOperand + parseInt(inputWindow.value);
            break;
        case 'sub':
            result = lastOperand - parseInt(inputWindow.value);
            break;
        case 'mul':
            result = lastOperand * parseInt(inputWindow.value);
            break;
        case 'dev':
            result = lastOperand / parseInt(inputWindow.value);
            break; 
        // case 'sqrt':
        //     result = lastOperand + parseInt(inputWindow.value);
        //     break;   
    }
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
    historyWindow.textContent += ' = ' + result;
    
})



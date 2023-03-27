let minValue;
let maxValue;
//Current number
let answerNumber;
//Number of cycle
let orderNumber = 1;
//Stop/run the game
let gameRun = true;
const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

newGame();

//Starts new game
function newGame () {
    let temp;
    temp = parseInt(prompt('Min значение числа для игры','-999'));  
    minValue = (temp < -999) || (temp > 999) || isNaN(temp) ? -999 : temp; 
    temp = parseInt(prompt('Max значение числа для игры, не равное и не меньше min','999'));
    maxValue = (temp > 999) || (temp < -999) || isNaN(temp) || (temp <= minValue) ? 999 : temp;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerShow();
    console.clear();
    console.log(minValue, maxValue);
}

//Shows alert if user number is wrong
function wrongRangeAlert() {
    const phraseRandom = Math.round(Math.random());
    const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
    answerField.innerText = answerPhrase;
}

//Shows random text
function answerShow() {
    switch(Math.round(Math.random() * 2)) {
        case 0:
            answerField.innerText = `Вы загадали число ${numberToString()}?`;
            break;
        case 1:
            answerField.innerText = `Так это же число ${numberToString()}! Верно?`;
            break;
        case 2:
            answerField.innerText = `Я думаю, что это число ${numberToString()}`;
            break;
    }
    numberToString();
}

// The function transforms number to string
function numberToString() {
    let stringAnswer;
    let answerNumberAbs = Math.abs(answerNumber);
    let underTwenty = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let tens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот' ,'девятьсот'];
    if ((answerNumberAbs >= 0) && (answerNumberAbs < 20)) {
       stringAnswer = underTwenty[answerNumberAbs];
    }  
    if (answerNumberAbs >= 20 && answerNumberAbs < 100) {
        stringAnswer = tens[Math.trunc(answerNumberAbs / 10 - 2)];
        if (answerNumberAbs % 10 !== 0 ) {
            stringAnswer =  stringAnswer + ' ' + underTwenty[answerNumberAbs % 10];
        }
    }
    if (answerNumberAbs > 99) {
        stringAnswer = hundreds[Math.trunc(answerNumberAbs / 100 - 1)];
        if (answerNumberAbs % 100 !== 0 ) {
           if (answerNumberAbs % 100 < 20) {
                stringAnswer = stringAnswer + ' ' + underTwenty[answerNumberAbs % 100];
            } else {
                stringAnswer = stringAnswer + ' ' + tens[Math.trunc((answerNumberAbs % 100) / 10 - 2)];
                if ((answerNumberAbs % 100) % 10 !== 0 ) {
                    stringAnswer =  stringAnswer + ' ' + underTwenty[(answerNumberAbs % 100) % 10];
                }
            }
        }
    }    
    if (answerNumber < 0) {
        stringAnswer = 'минус ' + stringAnswer;
    }
    if (stringAnswer.length > 20) {
        stringAnswer = answerNumber;
    }
    return stringAnswer;
}

//Run new game
document.querySelector('#btnRetry').addEventListener('click', function () {
    newGame();
})

//User number is greater than suggested
document.querySelector('#btnOver').addEventListener('click', function () {
    if ((minValue === maxValue || minValue === 998) && gameRun) {
        wrongRangeAlert();
        gameRun = false;
    }
    if (gameRun) {
        minValue = answerNumber + 1;
        answerNumber = Math.ceil((minValue + maxValue) / 2);
        if (maxValue < minValue) {
            wrongRangeAlert();
            gameRun = false;
        } else {
            console.log(minValue, maxValue);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerShow();
        }  
    }
})

//User number is less than suggested
document.querySelector('#btnLess').addEventListener('click', function () {
    if ((minValue === maxValue || maxValue === -998) && gameRun) {
        wrongRangeAlert();
        gameRun = false;
    }
    if (gameRun) {
        maxValue = answerNumber - 1;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        if (maxValue < minValue) {
            wrongRangeAlert();
            gameRun = false;
        } else {
            console.log(minValue, maxValue);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerShow();
        }
         
    }
})

//The program guessed the number
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        switch(Math.round(Math.random() * 2)) {
            case 0:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerField.innerText = `Я всегда прав\n\u{1F60E}`;
                break;
            case 2:
                answerField.innerText = `Я читаю твои мысли\n\u{1F60E}`;
                break;
        }
        gameRun = false;
    }
})


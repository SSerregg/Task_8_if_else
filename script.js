let minValue;
minValue = parseInt(prompt('Минимальное знание числа для игры','0'))||0;
minValue = (minValue<-999) ? -999 : minValue ;
let maxValue;
maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (maxValue === 0) {maxValue}
else {maxValue = maxValue||100};
maxValue = (maxValue>999) ? 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let answer;
let minus;
let tens;
let nambers;
let hundreds;
let safeAnswerNumber;

safeAnswerNumber = answerNumber;
tens = Math.abs(answerNumber%100);
nambers = Math.abs(answerNumber%10);

minus = (answerNumber<0) ? 'минус ' : '' ;

if (99<Math.abs(answerNumber) && Math.abs(answerNumber)<200) {
    hundreds = 'сто '
} else if (199<Math.abs(answerNumber) && Math.abs(answerNumber)<300) {
    hundreds = 'двести '
} else if (299<Math.abs(answerNumber) && Math.abs(answerNumber)<400) {
    hundreds = 'триста '
} else if (399<Math.abs(answerNumber) && Math.abs(answerNumber)<500) {
    hundreds = 'четыреста '
} else if (499<Math.abs(answerNumber) && Math.abs(answerNumber)<600) {
    hundreds = 'пятьсот '
} else if (599<Math.abs(answerNumber) && Math.abs(answerNumber)<700) {
    hundreds = 'шестьсот '
} else if (699<Math.abs(answerNumber) && Math.abs(answerNumber)<800) {
    hundreds = 'семьсот '
} else if (799<Math.abs(answerNumber) && Math.abs(answerNumber)<900) {
    hundreds = 'восемьсот '
} else if (899<Math.abs(answerNumber) && Math.abs(answerNumber)<1000) {
    hundreds = 'девятьсот '
} else if (answerNumber == 0) {
    hundreds = 'ноль'
} else hundreds = '';

switch (nambers) {
    case 1:
        nambers = ` один`;
    break;
    case 2:
        nambers = ` два`;
    break;
    case 3:
        nambers = ` три`;
    break;
    case 4:
        nambers = ` четыре`;
    break;
    case 5:
        nambers = ` пять`;
    break;
    case 6:
        nambers = ` шесть`;
    break;
    case 7:
        nambers = ` семь`;
    break;
    case 8:
        nambers = ` восемь`;
    break;
    case 9:
        nambers = ` девять`;
    break;
default: nambers = '' }

if (19<tens && tens<30) {tens = 'двадцать'} 
else if (29<tens && tens<40) {tens = 'тридцать'}
else if (39<tens && tens<50) {tens = 'сорок'}
else if (49<tens && tens<60) {tens = 'пятьдесят'}
else if (59<tens && tens<70) {tens = 'шестьдесят'} 
else if (69<tens && tens<80) {tens = 'семдесят'} 
else if (79<tens && tens<90) {tens = 'восемьдесят'} 
else if (89<tens && tens<100) {tens = 'девяносто'} 
else if (tens === 10) {tens = 'десять'; nambers = ''}
else if (tens === 11) {tens = 'одинадцать'; nambers = ''}
else if (tens === 12) {tens = 'двенадцать'; nambers = ''}
else if (tens === 13) {tens = 'тринадцать'; nambers = ''}
else if (tens === 14) {tens = 'четырнадцать'; nambers = ''}
else if (tens === 15) {tens = 'пятнадцать'; nambers = ''}
else if (tens === 16) {tens = 'шестнадцать'; nambers = ''}
else if (tens === 17) {tens = 'семнадцать'; nambers = ''}
else if (tens === 18) {tens = 'восемнадцать'; nambers = ''}
else if (tens === 19) {tens = 'девятнадцать'; nambers = ''}    
else {tens = ''};

    answerNumber = minus + hundreds + tens + nambers;
    let longPhrse = answerNumber.length;
    if (longPhrse<20) {answerNumber}
    else {answerNumber = safeAnswerNumber};

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answer = Math.round(Math.random() * 3);
switch (answer) {
    case 0:
        answerField.innerText = `Вы загадали число ${answerNumber}?`;
    break;
    case 1:
        answerField.innerText = `Наверное, это число ${answerNumber}?`;
        break;
    case 2:
        answerField.innerText = `Да это легко ${answerNumber}?`;
        break;
    case 3:
        answerField.innerText = `Это точно: ${answerNumber}?`;
        break; }

        
document.getElementById('btnRetry').addEventListener('click', function (e) {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'))||0;
    minValue = (minValue<-999) ? -999 : minValue ;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    if (maxValue === 0) {maxValue}
    else {maxValue = maxValue||100};
    maxValue = (maxValue>999) ? 999 : maxValue ;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerField.innerText = `Вы загадали число ${Math.floor((minValue + maxValue) / 2)}?`;
    safeAnswerNumber = Math.floor((minValue + maxValue) / 2);
    answerNumber = safeAnswerNumber;
    orderNumber = 1;
    orderNumberField.innerText = 1;
    e.preventDefault();
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = safeAnswerNumber  + 1;
            safeAnswerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answer = Math.round(Math.random() * 3);
            switch (answer) {
                case 0:
                    answerField.innerText = `Да это легко! ${safeAnswerNumber}?`;
                    break;
                case 1:
                    answerField.innerText = `Наверное, это число ${safeAnswerNumber}?`;
                    break;
                case 2:
                    answerField.innerText = `Вы загадали число ${safeAnswerNumber}?`;
                    break;
                case 3:
                    answerField.innerText = `Это точно: ${safeAnswerNumber}?`;
                    break; }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = safeAnswerNumber  - 1;
            safeAnswerNumber  = Math.ceil((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answer = Math.round(Math.random() * 3);
            switch (answer) {
                case 0:
                    answerField.innerText = `Да это легко! ${safeAnswerNumber}?`;
                    break;
                case 1:
                    answerField.innerText = `Наверное, это число ${safeAnswerNumber}?`;
                    break;
                case 2:
                    answerField.innerText = `Вы загадали число ${safeAnswerNumber}?`;
                    break;
                case 3:
                    answerField.innerText = `Это точно: ${safeAnswerNumber}?`;
                    break; }
            //answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answer = Math.round(Math.random() * 3);
            switch (answer) {
                case 0:
                    answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                    break;
                case 1:
                    answerField.innerText = `Да! Я крут\n\u{1F436}`;
                    break;
                case 2:
                    answerField.innerText = `Хотите сыграть еще?`;
                    break;
                case 3:
                    answerField.innerText = `Это было так просто\u{1F63A}`;
                    break; }
        //answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})


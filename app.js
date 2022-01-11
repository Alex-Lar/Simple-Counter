let digitCounter = document.querySelector('#counter'),  // Число счетчика на экране
    decreaseBtn = document.querySelector('#decrease'),  // Кнопка уменьшения числа
    resetBtn = document.querySelector('#reset'),        // Кнопка обнуления числа
    increaseBtn = document.querySelector('#increase'),  // Кнопка увеличения числа
    num = 0;                                           


//Увеличение числа
increaseBtn.addEventListener('click', function() {
    num++;

    if (num > 0) {
        digitCounter.style.color = 'green';
    } else if(num === 0) {
        digitCounter.style.color = "black";
    }

    digitCounter.textContent = num;
});

//Уменьшение числа
decreaseBtn.addEventListener('click', function() {
    num--;

    if (num < 0) {
        digitCounter.style.color = 'red';
    } else if(num === 0) {
        digitCounter.style.color = "black";
    }

    digitCounter.textContent = num;
});

//Обнуление числа
resetBtn.addEventListener('click', function() {
    num = 0;
    digitCounter.style.color = "black";
    digitCounter.textContent = num;
});
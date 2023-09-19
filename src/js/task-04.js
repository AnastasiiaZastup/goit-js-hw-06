const buttonAdd = document.querySelector('#count2');
const buttonDelete = document.querySelector('#count1');
const valueCount = document.querySelector('#value');

let counterValue = 0;

buttonAdd.addEventListener('click', function () {
    counterValue++;
    valueCount.textContent = counterValue;
});

buttonDelete.addEventListener('click', function () {
    if (counterValue > 0) {
        counterValue--;
        valueCount.textContent = counterValue;
    }
});


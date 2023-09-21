const numbersCategories = document.querySelectorAll(".item");           //ініціалізуємо зміну та за допомогою класу знаходемо кількість категорій
console.log(`Number of categories: ${numbersCategories.length}`);



numbersCategories.forEach(function (item) {
    const watf = item.querySelector('h2');        //повертає перший елемент
    const wtf2 = item.querySelectorAll('li');     //повертає всі елементи

    console.log(`Category: ${ watf.textContent }`);             //використовуємо textContent для виводу самої строки
    console.log(`Elements: ${wtf2.length}`);
});
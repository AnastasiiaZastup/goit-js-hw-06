const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstList = document.querySelector('#ingredients');

const secondList = ingredients.map((ingredient) => {

  const addLi = document.createElement('li');
  addLi.textContent = ingredient;
  addLi.classList.add('item');

  return addLi;

});

secondList.forEach((li) => {
  firstList.appendChild(li);
});

console.log(firstList);
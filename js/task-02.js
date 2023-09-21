const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstList = document.querySelector('#ingredients');
const listForLi = document.createElement('li');

const secondList = ingredients.map((ingredient) => {

  const addLi = document.createElement('li');
  addLi.classList.add('item');
  addLi.textContent = `${ingredient}`;

  return addLi;

});
  
firstList.append(...secondList);

console.log(firstList);

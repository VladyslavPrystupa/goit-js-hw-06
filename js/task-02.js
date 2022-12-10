const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => {
const li = document.createElement('li');
  li.classList.add("item");
  li.textContent = ingredient;
  return li
  
})

list.append(...markup)






// for (const ingr of ingredients) {
//   const li = document.createElement('li')
//   li.textContent = ingr
//   li.classList.add('item')
  
//   
// }

// let markup = ''

// for (const ingr of ingredients) {
//   markup += `<li class="item">${ingr}</li>`
// }

// list.insertAdjacentHTML("beforeend", markup);



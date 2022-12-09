const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

for (const ingr of ingredients) {
  const li = document.createElement('li')
  li.textContent = ingr
  li.classList.add('item')
  
  list.append(li)
}

// let markup = ''

// for (const ingr of ingredients) {
//   markup += `<li class="item">${ingr}</li>`
// }

// list.insertAdjacentHTML("beforeend", markup);



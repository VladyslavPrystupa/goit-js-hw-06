const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

// let markup = ''

// for (const ingr of ingredients) {
//   markup += `<li class="item">${ingr}</li>`
// }

// list.insertAdjacentHTML("beforeend", markup);


for (const ingr of ingredients) {
  const li = document.createElement('li')
  li.classList.add('item')
  li.textContent = ingr
  
  list.append(li)
}
const ctgr = document.querySelector('#categories');

console.log('Number of categories:', ctgr.children.length);

//

const firstChld = ctgr.firstElementChild

console.log('Category:', firstChld.querySelector('h2').textContent)
console.log('Elements:', firstChld.querySelectorAll('li').length)

// 

const secondChld = firstChld.nextElementSibling

console.log('Category:', secondChld.querySelector('h2').textContent)
console.log('Elements:', secondChld.querySelectorAll('li').length)

// 

const thirdChld = secondChld.nextElementSibling;

console.log('Category:', thirdChld.querySelector('h2').textContent)
console.log('Elements:', thirdChld.querySelectorAll('li').length)

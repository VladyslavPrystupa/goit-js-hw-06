const list = document.querySelector('#categories');

console.log('Number of categories:', list.children.length);

const child = document.querySelectorAll('.item')

child.forEach(element => {
    console.log('Category:', element.querySelector('h2').textContent)
    console.log('Elements:', element.querySelectorAll('li').length)
});



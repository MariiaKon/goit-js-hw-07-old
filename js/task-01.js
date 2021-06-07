const categoriesQuantity = document.querySelector('#categories')
console.log(`В списке ${categoriesQuantity.children.length} категории.`);




const categoryTitles = document.querySelectorAll('h2');
const categoriesList = document.querySelectorAll('.item ul');

for (let i = 0; i < categoryTitles.length; i++) {
    console.log(`Категория: ${categoryTitles[i].textContent}`);
    console.log(`Количество элементов: ${categoriesList[i].children.length}`);
}

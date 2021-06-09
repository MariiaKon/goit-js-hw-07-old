const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.getElementById('ingredients');
let ingredientsArr = [];

for (let i = 0; i < ingredients.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `${ingredients[i]}`;
 
  ingredientsArr.push(listItem)
}

ingredientsRef.append(...ingredientsArr);

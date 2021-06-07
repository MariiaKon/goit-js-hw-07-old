const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.getElementById('ingredients');

for (let i = 0; i < ingredients.length; i++) {

  const listItem = document.createElement('li');
  listItem.textContent = `${ingredients[i]}`;
 
  ingredientsRef.append(listItem);
}
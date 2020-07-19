const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIng = ingredients.map(ingredient => {
  let ing = document.createElement('li');
  ing.textContent = ingredient;
  return ing;
});
document.querySelector('#ingredients').prepend(...allIng);

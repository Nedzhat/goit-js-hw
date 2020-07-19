const categoriesRef = document.querySelectorAll('.item');
let total = categoriesRef.length;

console.log(`В списке ${total} категории.`);

categories.querySelectorAll('.item').forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${item.querySelector('ul').children.length}`,
  );
});

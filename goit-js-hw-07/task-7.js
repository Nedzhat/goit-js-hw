const inputRef = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRef.addEventListener('input', event => {
  let counterSize = event.target.value;
  spanText.style.fontSize = `${counterSize}px`;
});

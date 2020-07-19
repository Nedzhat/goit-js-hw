let counterValue = 0;
const spanCounterValue = document.querySelector('#value');

function increment() {
  counterValue += 1;
  spanCounterValue.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  spanCounterValue.textContent = counterValue;
}

const btnIncRef = document.querySelector('button[data-action="increment"]');
btnIncRef.addEventListener('click', increment);

const btnDecRef = document.querySelector('button[data-action="decrement"]');
btnDecRef.addEventListener('click', decrement);

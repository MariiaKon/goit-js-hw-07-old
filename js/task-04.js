const counterValue = document.getElementById('value');
const incrementBtn = document.querySelector('button[data-action="increment"]')
const decrementBtn = document.querySelector('button[data-action="decrement"]')


incrementBtn.addEventListener('click', () => { increment() });
decrementBtn.addEventListener('click', () => { decrement() });

let currentValue = Number(counterValue.textContent);

const increment = () => {
    currentValue += 1;
    counterValue.textContent = currentValue;
};

const decrement = () => {
    currentValue -= 1;
    counterValue.textContent = currentValue;
};
// Каждый созданный div:

// Размеры самого первого div - 30px на 30px. Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

createBtn.addEventListener('click', () => { createBoxes() });
destroyBtn.addEventListener('click', () => { destroyBoxes() });

function createBoxes(amount) {
    amount = input.value;

    for (let i = 0; i < amount; i++) {
        const divItem = document.createElement('div');
        divItem.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
        divItem.style.width = '30px';
        divItem.style.height = '30px';

        boxDiv.appendChild(divItem);
    }
}

function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}


function destroyBoxes() {
    boxDiv.innerHTML = '';
}



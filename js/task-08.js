const START_SIZE = 30;
const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
let sizeValue = START_SIZE;


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.value;
    
    for (let i = 0; i < amount; i++) {
        const divItem = document.createElement('div');

        divItem.style.backgroundColor = `rgb(${getRandom(1, 255)}, ${getRandom(1, 255)}, ${getRandom(1, 255)})`
        divItem.style.width = `${sizeValue}px`;
        divItem.style.height = `${sizeValue}px`;

        sizeValue += 10;

        boxDiv.appendChild(divItem);
    }
}

function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}


function destroyBoxes() {
    if (input.value = '') {
        input.value = 0;
        sizeValue = 0;
    }

    boxDiv.innerHTML = '';
    sizeValue = START_SIZE;
}



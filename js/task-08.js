const START_SIZE = 30;
const boxDiv = document.getElementById('boxes');
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    const amount = input.value;
    let sizeValue = START_SIZE;
    
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
    boxDiv.innerHTML = '';
    sizeValue = START_SIZE;
}



const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', onInputEvent)

function onInputEvent (event) {
    if (input.value.trim() == '') {
        output.textContent = 'незнакомец';
    } else {
        output.textContent = input.value;
    }
}
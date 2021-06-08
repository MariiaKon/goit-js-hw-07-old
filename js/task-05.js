const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', onInputEvent)

function onInputEvent (event) {
    output.textContent = input.value;
    if (input.value.trim() == '') {
        output.textContent = 'незнакомец';
    }
}
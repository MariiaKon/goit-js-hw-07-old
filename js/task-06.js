const inputEl = document.getElementById('validation-input');
const inputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) { 
    inputEl.classList.add(inputEl.value.length == inputLength ? 'valid' : 'invalid')
}
const inputEl = document.getElementById('validation-input');
const inputLength = inputEl.getAttribute('data-length');

inputEl.addEventListener('blur', onInputBlur)
    
function onInputBlur() {
    if (inputLength == inputEl.value.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }    
}
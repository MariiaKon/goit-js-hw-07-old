const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');


fontSizeControlEl.addEventListener('input', () => {
    textEl.style.fontSize = `${fontSizeControlEl.value}px`
 })
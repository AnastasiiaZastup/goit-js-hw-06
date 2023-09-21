
const fontSizeControl = document.querySelector('#font-size-control');
const textAbra = document.querySelector('#text');

fontSizeControl.addEventListener('input', function () {
    const fontSize = fontSizeControl.value + 'px';
    textAbra.style.fontSize = fontSize;
});

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', changeFunction);

function changeFunction(event) {
    const lengthSymb = textInput.dataset.length;
    
    const contLen = textInput.value.length
            
    if (contLen === Number(lengthSymb)) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
};

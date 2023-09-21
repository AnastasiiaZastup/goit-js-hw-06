
const elForm = document.querySelector('.login-form');

elForm.addEventListener('submit', onsubmit);


function onsubmit(evt) {
    evt.preventDefault();


    const { email, password } = evt.currentTarget.elements;
    
    const data = {
        email: email.value,
        password: password.value
    };

    console.log(data);

    if (!email.value || !password.value) {
    alert('Please fill in all fields.');
    }
    
    elForm.reset();
    
}



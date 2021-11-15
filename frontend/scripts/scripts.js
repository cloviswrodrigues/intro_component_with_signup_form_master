const form = document.getElementById('form');
const divFormGroup = document.getElementsByClassName('content__form-group');

form.addEventListener('submit', (e) => {             
    e.preventDefault();   
    let validate = validateInputs();
    if (!validate) {
        document.location.reload();
    }
})

form.addEventListener('focusin', (e) => {
    activeErrorInputEmail(false);
});

function validateInputs() {
    divFormGroup.forEach(element => {
        console.log('e: ' +element);
    });
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function activeErrorInputEmail(active, element) {
    if (active){
        // elementclassList.add('error-active');
        // spanEmail.classList.add('error');
    }else {
        // inputEmail.classList.remove('error-active');
        // spanEmail.classList.remove('error');
    }
}
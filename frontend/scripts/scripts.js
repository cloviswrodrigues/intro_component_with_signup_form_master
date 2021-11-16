const form = document.getElementById('form');
const divFormGroup = document.querySelectorAll('.content__form-group');

form.addEventListener('submit', (e) => {             
    e.preventDefault();   
    disableAllErrorInput()
    let validate = validateInputs();
    if (!validate) {
        document.location.reload();
    }
})

function validateInputs() {
    let error = false;
    divFormGroup.forEach(function(e){
        if (e.children[0].value == ''){
            console.log('esta vazio')
            activeErrorInput(true,e)
            error = true;
        }

        if (e.children[0].name == 'email'){
            if (!isValidEmail(e.children[0].value)) {
                activeErrorInput(true,e)
                error = true;
            }
        }
    });

    return error;
}

function isValidEmail(email){
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return regex.exec(email) == null ? false : true;
}

function disableAllErrorInput(){
    divFormGroup.forEach(function(e){        
        activeErrorInput(false,e)
    });
}

function activeErrorInput(active, element) {
    if (active){
        element.children[0].classList.add('input-error');
        element.children[1].classList.add('form__span-error');
    }else {
        element.children[0].classList.remove('input-error');
        element.children[1].classList.remove('form__span-error');
    }
}
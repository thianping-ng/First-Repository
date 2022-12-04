const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpass = document.getElementById('confirmpassword');

form.addEventListener('submit',e=>{
    e.preventDefault();

    validation();
});

const checkerror = (element, message) => {
    const input = element.parentElement;
    const displayerror = input.querySelector('.error');

    displayerror.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
};

const setsuccess = element => {
    const input = element.parentElement;
    const displayerror = input.querySelector('.error');

    displayerror.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

const validation_email = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validation = () => {
    const firstname_value = firstname.value.trim();
    const lastname_value = lastname.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();
    const confirmpass_value = confirmpass.value.trim();

    if (firstname_value === ''){
            checkerror(firstname, 'First Name cannot be blank');
    }
    else{
        setsuccess(firstname);
    }
    if (lastname_value === ''){
        checkerror(lastname, 'Last Name cannot be blank');
    }
    else{
        setsuccess(lastname);
    }

    if (email_value === ''){
        checkerror(email, 'Email cannot be blank');
    }
    else if (!validation_email(email_value)){
        checkerror(email, 'Provide a valid email address');
    }
    else{
        setsuccess(email);
    }

    if (password_value === ''){
        checkerror(password, 'Password cannot be blank');
    }
    else if(password_value.length < 8){
        checkerror(password, 'Password must be at least 8 characters long.');
    }
    else{
        setsuccess(password);
    }

    if (confirmpass_value === ''){
        checkerror(confirmpass, 'Password cannot be blank');
    }
    else if (confirmpass_value !== password_value){
        checkerror(confirmpass, 'Password does not match');
    }
    else{
        setsuccess(confirmpass);
    }

} 
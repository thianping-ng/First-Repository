const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit',e => {
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
    const username_value = username.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    if (username_value === ''){
        checkerror(username, 'User Name cannot be blank');
    }
    else{
    setsuccess(username);
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

};

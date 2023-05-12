const login = document.querySelector('.login_link');
const title = document.querySelector('.title');
const button = document.querySelector('.btn');
const inputName = document.querySelector('#name');

login.addEventListener('click', function () {
    login.innerHTML = "Sign up";
    title.innerText = "Log in";
    button.innerText = "Log in";
    inputName.remove();
});


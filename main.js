'use Strict';

import './style.css'
import './index.css'
import 'normalize.css'

// Declaring Variables
const name = document.getElementById('name');
const mail = document.getElementById('mail');
const username = document.getElementById('user');
const password = document.getElementById('pass');
const confirm = document.getElementById('conpass');

function throwErr(element, message) {
    element.nextElementSibling.textContent = message;
}

const form = document.getElementById('form');

form.addEventListener('submit', validate);
form.addEventListener('reset', resetFunc);

function validate(event) {
    event.preventDefault();
    resetFunc();
    console.log("Validating the form......Please wait!!!");

    let length = name.value.length;
    if (length <= 2) {
        throwErr(name, "Please enter a Valid Name");
        return;
    }

    let flag2;
    if (username.value.includes(" ")) {
        throwErr(username, "Username can't contain a Space");
        return;
    }
    let firstChar = username.value.charAt(0);
    if (firstChar === firstChar.toUpperCase()) {
        throwErr(username, "Username can't start with a Capital");
        return;
    }
    flag2 = /\d/.test(username.value);
    if (flag2) {
        throwErr(username, "Username can't contain a Number");
        return;
    }

    let flagPass = password.value ? true : false;

    if (!flagPass) {
        throwErr(password, "Please fill the passwords!!!");
        return;
    }
    else if (password.value !== confirm.value) {
        throwErr(password, "Both the passwords don't match");
        return;
    }


    alert(`Hurray!!!🎊🎉 Congrats ${name.value} \n\nThe form is being validated and there are no errors 🥳🎊🎉`)
}

function resetFunc(event) {
    let allErrs = document.querySelectorAll('.error');
    allErrs.forEach(element => {
        element.textContent = "";
    });
}

"use strict";

const PwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", copyPassword);
function generatePassword() {
    let password = "";
    const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCases = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*|/?><~`";
    let combined = "";
    if (!upperEl.checked && !lowerEl.checked && !numberEl.checked && !symbolEl.checked) {
        alert("Please mark at least one component");
    } else if (Number(lenEl.value) < 8 || Number(lenEl.value) > 20) {
        alert("The Password length must be between 8 and 20");
    } else {
        if (upperEl.checked) {
            combined += upperCases;
        }
        if (lowerEl.checked) {
            combined += lowerCases;
        }
        if (numberEl.checked) {
            combined += numbers;
        }
        if (symbolEl.checked) {
            combined += symbols;
        }
        for (let i = 0; i < Number(lenEl.value); i++) {
            password += getRandomCharacter(combined);
        }
        PwEl.textContent = password;
        copyEl.textContent = "Copy";
    }
}

function getRandomCharacter(combined) {
    return combined[Math.floor(Math.random() * combined.length)];
}

function copyPassword() {
    const textarea = document.createElement("textarea");
    const password = PwEl.innerText;
    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    copyEl.textContent = "Copied";
}
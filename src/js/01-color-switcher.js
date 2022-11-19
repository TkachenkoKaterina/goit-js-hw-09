"use strict";

let timerId = null;
const bodyRef = document.querySelector('body');

const startBtnRef = document.querySelector('[data-start]');

const stopBtnRef = document.querySelector('[data-stop]');
stopBtnRef.setAttribute("disabled", true);

const changeColor = startBtnRef.addEventListener('click', onStartBtn);

const onStopBtnClick = stopBtnRef.addEventListener('click', onStopBtn);


function onStartBtn() {
    timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    startBtnRef.setAttribute("disabled", true);
    stopBtnRef.removeAttribute("disabled", false);
    }, 1000);
}

function onStopBtn() {
    clearInterval(timerId);
    stopBtnRef.setAttribute("disabled", true);
    startBtnRef.removeAttribute("disabled", false);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


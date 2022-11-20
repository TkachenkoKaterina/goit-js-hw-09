"use strict";

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const refs = {
    inputFirstDelay: document.querySelector('[name="delay"]'),
    inputDelayStep: document.querySelector('[name="step"]'),
    inputAmount: document.querySelector('[name="amount"]'),
    btnCreatePromise: document.querySelector('form'),
};

const btnClick = refs.btnCreatePromise.addEventListener('submit', onBtnClick);

function onBtnClick(event) {
    event.preventDefault();
    let firstDelay = Number(refs.inputFirstDelay.value);
    let delayStep = Number(refs.inputDelayStep.value);
    let amount = Number(refs.inputAmount.value);

    for (let i = 1; i <= amount; i += 1) {
        createPromise(i, firstDelay);
        firstDelay += delayStep;
    }
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (shouldResolve) {
            Notiflix.Notify.success(resolve(`Fulfilled promise ${position} in ${delay}ms`));
        } else {
            Notiflix.Notify.failure(reject(`Rejected promise ${position} in ${delay}ms`));
        
        }
    }, delay);
    });

    promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    });
} 

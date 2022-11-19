"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

// const deltaTime = null;
const inputRef = document.querySelector('#datetime-picker');
// console.log(inputRef);
const btnStart = document.querySelector('[data-start]');
// console.log(btnStart);
const spanDaysRef = document.querySelector('[data-days]');
const spanHoursRef = document.querySelector('[data-hours]');
const spanMinutesRef = document.querySelector('[data-minutes]');
const spanSecondsRef = document.querySelector('[data-seconds]');
const divTimerRef = document.querySelector('.timer');


divTimerRef.style.display = "flex";
divTimerRef.style.justifyContent = "space-around";
divTimerRef.style.color = "green";


btnStart.setAttribute("disabled", true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
    const calendarTime = Date.parse(selectedDates[0]);
    // console.log(`calendarTime: ${selectedDates[0]}`);
    // console.log(calendarTime);

    // console.log(`currentTime: ${options.defaultDate}`);
    const currentTime = Date.parse(options.defaultDate);
    // console.log(currentTime);
    
    const deltaTime = calendarTime - currentTime;
    // console.log(deltaTime);

    if ( deltaTime < 0 ) {
        // window.alert("Please choose a date in the future");
        Notiflix.Notify.warning('Please choose a date in the future');
    } else {
        btnStart.removeAttribute("disabled", false);
        console.log(convertMs(deltaTime));
        }
    }
};

const flatpickr = flatpickr(inputRef, options);

const inputField = inputRef.addEventListener('input', onClose);
const clickBtnStart = btnStart.addEventListener('click', onStart);

function onClose() {
}

function onStart() {
    console.log(inputRef.value);
    const inputTextTime = Date.parse(inputRef.value);
    // console.log(inputTextTime);

    const currentInputTextTime = Date.now();
    // console.log(currentInputTextTime);

    let deltaInputTextTime = inputTextTime - currentInputTextTime;
    // console.log(deltaInputTextTime);

    timerId = setInterval(() => {
        deltaInputTextTime = deltaInputTextTime - 1000;
        convertMs(deltaInputTextTime);
        // console.log(deltaInputTextTime);
        // spanDaysRef.textContent = days;
        // spanHoursRef.textContent = hours;
        // spanMinutesRef.textContent = minutes;
        // spanSecondsRef.textContent = seconds;
    }, 1000);
    divTimerRef.style.color = "tomato";
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    
    const daysToString = days.toString();
    spanDaysRef.textContent = daysToString.padStart(2, "0");

    const hoursToString = hours.toString();
    spanHoursRef.textContent = hoursToString.padStart(2, "0");

    const minutesToString = minutes.toString();
    spanMinutesRef.textContent = minutesToString.padStart(2, "0");

    const secondsToString = seconds.toString();
    spanSecondsRef.textContent = secondsToString.padStart(2, "0");

    // "abc".padStart(8, "0");

    return { days, hours, minutes, seconds };
}

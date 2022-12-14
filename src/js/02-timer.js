import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.5.min.css";

const inputRef = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
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
    const currentTime = Date.parse(options.defaultDate);
        const deltaTime = calendarTime - currentTime;

    if ( deltaTime < 0 ) {
        Notiflix.Notify.warning('Please choose a date in the future');
    } else {
        btnStart.removeAttribute("disabled", false);
        console.log(convertMs(deltaTime));
        }
    }
};

flatpickr(inputRef, options);

const inputField = inputRef.addEventListener('input', onClose);
const clickBtnStart = btnStart.addEventListener('click', onStart);

function onClose() {
}

function onStart() {
    console.log(inputRef.value);
    const inputTextTime = Date.parse(inputRef.value);

    const currentInputTextTime = Date.now();

    let deltaInputTextTime = inputTextTime - currentInputTextTime;

    timerId = setInterval(() => {
        deltaInputTextTime = deltaInputTextTime - 1000;
        if (deltaInputTextTime > 0) {
                console.log(deltaInputTextTime);
                convertMs(deltaInputTextTime);
            } else {
            spanDaysRef.textContent = "00";
            spanHoursRef.textContent = "00";
            spanMinutesRef.textContent = "00";
            spanSecondsRef.textContent = "00";
            }
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

    return { days, hours, minutes, seconds };
}

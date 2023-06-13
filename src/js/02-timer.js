/* Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты.
Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д. */
// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const timerInput = document.querySelector('#datetime-picker');
const btnTimer = document.querySelector('[data-start]');
const showDays = document.querySelector('[data-days]');
const showHours = document.querySelector('[data-hours]');
const showMinutes = document.querySelector('[data-minutes]');
const showSeconds = document.querySelector('[data-seconds]');

btnTimer.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        console.log(selectedDates[0]);

        const chooseSelectedDate = selectedDates[0];
        if (chooseSelectedDate < new Date()) {
          window.alert('Please choose a date in the future');
          btnTimer.disabled = true;
        } else {
          btnTimer.onclick = () => {
            dateCount(chooseSelectedDate);
          };
          btnTimer.disabled = false;
        };
    }
};
flatpickr(timerInput, options);

function dateCount(chooseSelectedDate) {
  const dateInterval = setInterval(() => {
    const differenceInDates = chooseSelectedDate.getTime() - new Date().getTime();
    if (differenceInDates <= 0) {
      clearInterval(dateInterval);
    } else {
      const days = Math.floor(differenceInDates / (1000 * 60 * 60 * 24));

      const hours = Math.floor((differenceInDates / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((differenceInDates / 1000 / 60) % 60);
      const seconds = Math.floor((differenceInDates / 1000) % 60);

      showDays.textContent = `${days}`.padStart(2, '0');
      showHours.textContent = `${hours}`.padStart(2, '0');
      showMinutes.textContent = `${minutes}`.padStart(2, '0');
      showSeconds.textContent = `${seconds}`.padStart(2, '0');
      return { days, hours, minutes, seconds };
    }
  }, 1000);
}



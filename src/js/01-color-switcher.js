/* Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение
 используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться. */
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let intervalId;
btnStop.disabled = true;

// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickStart() {
    intervalId = setInterval(changeBC, 1000);
};
function onClickStop() {
    clearInterval(intervalId);
};

// changing background-color
function changeBC() {
    const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
};

//события, происходящие при клике по кнопке

btnStart.addEventListener('click', () => {
    onClickStart();
    btnStart.disabled = true;
    btnStop.disabled = false;
}
);

btnStop.addEventListener('click', () => {
    onClickStop();
    btnStart.disabled = false;
    btnStop.disabled = true;
}
);

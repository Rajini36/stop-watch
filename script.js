const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById('milliseconds');
const playButton = document.getElementById("play-btn");
const resetButton = document.getElementById("reset-btn");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

function updateDisplay() {
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    millisecondsDisplay.textContent = milliseconds < 10 ? '0' + milliseconds : milliseconds;
}

function startTimer() {
    interval = setInterval(() => {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        updateDisplay();
    }, 10);
}

playButton.addEventListener("click", () => {
    if (!isRunning) {
        startTimer();
        playButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
        isRunning = true;
    } else {
        clearInterval(interval);
        playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
        isRunning = false;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    playButton.innerHTML = '<i class="fa-solid fa-play"></i>';
    isRunning = false;
});

updateDisplay();

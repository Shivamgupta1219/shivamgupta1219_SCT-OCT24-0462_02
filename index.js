let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

// Function format time
function formatTime(ms) {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  return (
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds)
  );
}

// Start btn
startButton.addEventListener("click", () => {
  if (!running) {
    running = true;
    startTime = new Date().getTime() - (difference || 0);
    timerInterval = setInterval(() => {
      updatedTime = new Date().getTime();
      difference = updatedTime - startTime;
      timeDisplay.textContent = formatTime(difference);
    }, 1000);
  }
});

// Stop btn
stopButton.addEventListener("click", () => {
  if (running) {
    running = false;
    clearInterval(timerInterval);
  }
});

// Reset btn
resetButton.addEventListener("click", () => {
  running = false;
  clearInterval(timerInterval);
  difference = 0;
  timeDisplay.textContent = "00:00:00";
});

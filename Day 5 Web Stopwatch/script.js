// DOM Elements
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// State Variables
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// --- Core Functions ---

function formatTime(time) {
    // Calculate time components
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    // Pad with leading zeros
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMs = ms.toString().padStart(2, "0");

    // Return HTML string for styling separation
    return `${formattedMM}:${formattedSS}<span class="milliseconds">.${formattedMs}</span>`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(function printTime() {
            elapsedTime = Date.now() - startTime;
            print(formatTime(elapsedTime));
        }, 10); // Update every 10ms for smoothness
        isRunning = true;
        updateButtons();
    }
}

function pause() {
    if(isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        updateButtons();
    }
}

function reset() {
    clearInterval(timerInterval);
    print("00:00<span class='milliseconds'>.00</span>");
    elapsedTime = 0;
    isRunning = false;
    updateButtons();
}

function toggleTimer() {
    if (isRunning) {
        pause();
    } else {
        start();
    }
}

// --- UI Updates ---

function updateButtons() {
    if (isRunning) {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
        resetBtn.disabled = true; 
    } else if (elapsedTime > 0) {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resetBtn.disabled = false;
        startBtn.innerText = "Resume"; // UX improvement
    } else {
        // Idle state
        startBtn.disabled = false;
        pauseBtn.disabled = true;
        resetBtn.disabled = true;
        startBtn.innerText = "Start";
    }
}

// --- Event Listeners ---

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

// Keyboard Controls
document.addEventListener('keydown', function(event) {
    // Spacebar (32) to toggle Start/Pause
    if (event.code === 'Space') {
        event.preventDefault(); // Prevent scrolling
        toggleTimer();
    }
    // Escape (27) to Reset
    if (event.code === 'Escape') {
        reset();
    }
});

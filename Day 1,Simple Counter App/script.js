// State Management
const MAX_DAYS = 365;
let currentDay = 1;

// DOM Elements
const dayCountEl = document.getElementById('dayCount');
const progressBarEl = document.getElementById('progressBar');
const btnInc = document.getElementById('btnInc');
const btnDec = document.getElementById('btnDec');
const btnReset = document.getElementById('btnReset');
const noteInput = document.getElementById('projectNote');
const saveMsg = document.getElementById('saveMsg');

// Initialize App
function init() {
    // Load saved data from LocalStorage
    const savedDay = localStorage.getItem('rudra365_day');
    const savedNote = localStorage.getItem('rudra365_note');

    if (savedDay) {
        currentDay = parseInt(savedDay, 10);
    }
    
    if (savedNote) {
        noteInput.value = savedNote;
    }

    updateUI();
}

// Update the User Interface
function updateUI() {
    // Update Number
    dayCountEl.textContent = currentDay;
    
    // Update Subtext label
    document.querySelector('.note-label').textContent = `Day ${currentDay} Project / Thought:`;

    // Update Progress Bar
    const percentage = (currentDay / MAX_DAYS) * 100;
    progressBarEl.style.width = `${percentage}%`;

    // Disable buttons at limits
    btnDec.disabled = currentDay <= 1;
    btnDec.style.opacity = currentDay <= 1 ? '0.5' : '1';
    btnDec.style.cursor = currentDay <= 1 ? 'not-allowed' : 'pointer';

    btnInc.disabled = currentDay >= MAX_DAYS;
    btnInc.style.opacity = currentDay >= MAX_DAYS ? '0.5' : '1';
    btnInc.style.cursor = currentDay >= MAX_DAYS ? 'not-allowed' : 'pointer';

    // Save state
    localStorage.setItem('rudra365_day', currentDay);
}

// Handle Increment
btnInc.addEventListener('click', () => {
    if (currentDay < MAX_DAYS) {
        currentDay++;
        updateUI();
        // Scroll to top nicely on mobile if needed
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Handle Decrement
btnDec.addEventListener('click', () => {
    if (currentDay > 1) {
        currentDay--;
        updateUI();
    }
});

// Handle Reset
btnReset.addEventListener('click', () => {
    if(confirm("Are you sure you want to restart the challenge? This will reset the counter.")) {
        currentDay = 1;
        noteInput.value = ""; // Optional: clear note on reset
        localStorage.removeItem('rudra365_note');
        updateUI();
    }
});

// Handle Note Saving with Debounce
let timeoutId;
noteInput.addEventListener('input', () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        localStorage.setItem('rudra365_note', noteInput.value);
        showSaveMessage();
    }, 1000); // Save 1 second after user stops typing
});

function showSaveMessage() {
    saveMsg.classList.add('visible');
    setTimeout(() => {
        saveMsg.classList.remove('visible');
    }, 2000);
}

// Run
init();

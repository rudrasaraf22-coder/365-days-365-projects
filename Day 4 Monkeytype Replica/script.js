// --- Configuration & State ---
const GAME_CONFIG = {
    timeLimit: 30,
    wordCount: 100 
};

const STATE = {
    words: [],
    currentWordIndex: 0,
    currentCharIndex: 0,
    timer: GAME_CONFIG.timeLimit,
    isRunning: false,
    interval: null,
    stats: {
        correctChars: 0,
        incorrectChars: 0,
        extraChars: 0,
        missedChars: 0,
        startTime: 0
    }
};

// Common English words
const WORD_LIST = [
    "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that", "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this", "we", "you", "do", "but", "from", "or", "which", "one", "would", "all", "will", "there", "say", "who", "make", "when", "can", "more", "if", "no", "man", "out", "other", "so", "what", "time", "up", "go", "about", "than", "into", "could", "state", "only", "new", "year", "some", "take", "come", "these", "know", "see", "use", "get", "like", "then", "first", "any", "work", "now", "may", "such", "give", "over", "think", "most", "even", "find", "day", "also", "after", "way", "many", "must", "look", "before", "great", "back", "through", "long", "where", "much", "should", "well", "people", "down", "own", "just", "because", "good", "each", "those", "feel", "seem", "how", "high", "too", "place", "little", "world", "very", "still", "nation", "hand", "old", "life", "tell", "write", "become", "here", "show", "house", "both", "between", "need", "mean", "call", "develop", "under", "last", "right", "move", "thing", "general", "school", "never", "same", "another", "begin", "while", "number", "part", "turn", "real", "leave", "might", "want", "point", "form", "off", "child", "few", "small", "since", "against", "ask", "late", "home", "interest", "large", "person", "end", "open", "public", "follow", "during", "present", "without", "again", "hold", "govern", "around", "possible", "head", "consider", "word", "program", "problem", "however", "lead", "system", "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group", "play", "stand", "increase", "early", "course", "change", "help", "line"
];

// --- DOM Elements ---
const wordsContainer = document.getElementById('words');
const focusOverlay = document.getElementById('focus-error');
const liveStats = document.getElementById('live-stats');
const timerDisplay = document.getElementById('timer');
const wpmDisplay = document.getElementById('live-wpm');
const restartBtn = document.getElementById('restart-btn');
const resultsScreen = document.getElementById('results-screen');
const nextTestBtn = document.getElementById('next-test-btn');
const configBtns = document.querySelectorAll('[data-time]');
const mainWrapper = document.getElementById('game-wrapper');

// --- Initialization ---
function initGame() {
    // Reset State
    STATE.currentWordIndex = 0;
    STATE.currentCharIndex = 0;
    STATE.timer = GAME_CONFIG.timeLimit;
    STATE.isRunning = false;
    STATE.stats = { correctChars: 0, incorrectChars: 0, extraChars: 0, missedChars: 0, startTime: 0 };
    
    clearInterval(STATE.interval);

    // UI Reset
    timerDisplay.innerText = STATE.timer;
    wpmDisplay.innerText = "0";
    liveStats.classList.remove('visible');
    resultsScreen.classList.remove('active');
    wordsContainer.style.transform = `translateY(0px)`;

    generateWords();
    renderWords();
    updateCursor();
}

function generateWords() {
    STATE.words = [];
    for (let i = 0; i < GAME_CONFIG.wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
        STATE.words.push(WORD_LIST[randomIndex]);
    }
}

function renderWords() {
    wordsContainer.innerHTML = '';
    STATE.words.forEach((word) => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('word');
        word.split('').forEach(char => {
            const letterSpan = document.createElement('span');
            letterSpan.classList.add('letter');
            letterSpan.innerText = char;
            wordDiv.appendChild(letterSpan);
        });
        wordsContainer.appendChild(wordDiv);
    });
}

// --- Core Logic ---
function startGame() {
    if (STATE.isRunning) return;
    STATE.isRunning = true;
    STATE.stats.startTime = Date.now();
    liveStats.classList.add('visible');

    STATE.interval = setInterval(() => {
        STATE.timer--;
        timerDisplay.innerText = STATE.timer;
        
        calculateLiveWPM();

        if (STATE.timer <= 0) {
            finishGame();
        }
    }, 1000);
}

function calculateLiveWPM() {
    const timeElapsed = GAME_CONFIG.timeLimit - STATE.timer;
    if (timeElapsed === 0) return;
    
    const totalTyped = STATE.stats.correctChars + STATE.stats.incorrectChars + STATE.stats.extraChars;
    const wpm = Math.round((totalTyped / 5) / (timeElapsed / 60));
    wpmDisplay.innerText = wpm;
}

function finishGame() {
    clearInterval(STATE.interval);
    STATE.isRunning = false;
    document.removeEventListener('keydown', handleInput);
    
    const now = Date.now();
    const secondsElapsed = (now - STATE.stats.startTime) / 1000;
    const minutesElapsed = secondsElapsed / 60 || 0.01; 

    const totalTyped = STATE.stats.correctChars + STATE.stats.incorrectChars + STATE.stats.extraChars;
    const wpm = Math.round((totalTyped / 5) / minutesElapsed);
    const raw = Math.round((totalTyped / 5) / minutesElapsed);
    
    const accuracy = totalTyped > 0 
        ? Math.round((STATE.stats.correctChars / totalTyped) * 100) 
        : 0;

    document.getElementById('res-wpm').innerText = wpm;
    document.getElementById('res-acc').innerText = accuracy + "%";
    document.getElementById('res-raw').innerText = "raw: " + raw;
    document.getElementById('res-chars').innerText = `${STATE.stats.correctChars}/${STATE.stats.incorrectChars}/${STATE.stats.extraChars}/${STATE.stats.missedChars}`;

    resultsScreen.classList.add('active');
}

function handleInput(e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    
    if (e.key === 'Tab') {
        e.preventDefault();
        initGame();
        return;
    }

    if (focusOverlay.classList.contains('visible')) {
        focusOverlay.classList.remove('visible');
    }

    if (!STATE.isRunning && /^[a-zA-Z]$/.test(e.key)) {
        startGame();
    }
    if (!STATE.isRunning) return; 

    const currentWordDiv = wordsContainer.children[STATE.currentWordIndex];
    
    if (e.key === 'Backspace') {
        if (STATE.currentCharIndex > 0) {
            STATE.currentCharIndex--;
            const letterSpan = currentWordDiv.children[STATE.currentCharIndex];
            
            if (letterSpan.classList.contains('correct')) STATE.stats.correctChars--;
            else if (letterSpan.classList.contains('incorrect')) STATE.stats.incorrectChars--;
            else if (letterSpan.classList.contains('extra')) {
                STATE.stats.extraChars--;
                letterSpan.remove(); 
                updateCursor();
                return; 
            }

            letterSpan.className = 'letter'; 
            updateCursor();
        }
        return;
    }

    if (e.key === ' ') {
        e.preventDefault(); 
        STATE.currentWordIndex++;
        STATE.currentCharIndex = 0;

        const nextWord = wordsContainer.children[STATE.currentWordIndex];
        const currentWord = wordsContainer.children[STATE.currentWordIndex - 1];
        
        if (nextWord && currentWord) {
            if (nextWord.offsetTop > currentWord.offsetTop) {
                const currentTop = parseInt(wordsContainer.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
                wordsContainer.style.transform = `translateY(${currentTop - 50}px)`;
            }
        }

        updateCursor();
        return;
    }

    if (e.key.length === 1) {
        const targetWord = STATE.words[STATE.currentWordIndex];
        const targetChar = targetWord[STATE.currentCharIndex];
        const letterSpan = currentWordDiv.children[STATE.currentCharIndex];

        if (STATE.currentCharIndex < targetWord.length) {
            if (e.key === targetChar) {
                letterSpan.classList.add('correct');
                STATE.stats.correctChars++;
            } else {
                letterSpan.classList.add('incorrect');
                STATE.stats.incorrectChars++;
            }
            STATE.currentCharIndex++;
        } else {
            const extraSpan = document.createElement('span');
            extraSpan.classList.add('letter', 'extra');
            extraSpan.innerText = e.key;
            currentWordDiv.appendChild(extraSpan);
            STATE.stats.extraChars++;
            STATE.currentCharIndex++; 
        }
        updateCursor();
    }
}

function updateCursor() {
    document.querySelectorAll('.letter.active').forEach(el => el.classList.remove('active'));

    const currentWordDiv = wordsContainer.children[STATE.currentWordIndex];
    if (!currentWordDiv) return; 

    if (STATE.currentCharIndex < currentWordDiv.children.length) {
        currentWordDiv.children[STATE.currentCharIndex].classList.add('active');
    }
}

// --- Event Handlers ---

function handleClick(e) {
    focusOverlay.classList.remove('visible');
    if(e.target.closest('#game-wrapper')) {
        focusOverlay.classList.remove('visible');
    }
}

configBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        configBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        GAME_CONFIG.timeLimit = parseInt(e.target.dataset.time);
        initGame();
    });
});

document.addEventListener('keydown', handleInput);
document.addEventListener('click', handleClick);
window.addEventListener('blur', () => {
    focusOverlay.classList.add('visible');
});

restartBtn.addEventListener('click', initGame);
nextTestBtn.addEventListener('click', initGame);

// Start
initGame();

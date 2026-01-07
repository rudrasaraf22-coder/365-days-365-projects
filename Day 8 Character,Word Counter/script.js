// DOM Elements
const textInput = document.getElementById('textInput');
const charCountDisplay = document.getElementById('charCount');
const wordCountDisplay = document.getElementById('wordCount');

// Function to update counts
function updateCounts() {
    const text = textInput.value;

    // 1. Character Count logic
    const charCount = text.length;
    charCountDisplay.textContent = charCount;

    // 2. Word Count logic
    // Trim whitespace from start and end
    const trimmedText = text.trim();
    
    let wordCount = 0;
    
    if (trimmedText.length > 0) {
        // Split by one or more whitespace characters (spaces, tabs, newlines)
        const words = trimmedText.split(/\s+/);
        wordCount = words.length;
    }

    wordCountDisplay.textContent = wordCount;
}

// Event Listener for 'input' (triggers on every keystroke)
textInput.addEventListener('input', updateCounts);

// Optional: Initialize on load (clears zero to ensure clean state)
updateCounts();

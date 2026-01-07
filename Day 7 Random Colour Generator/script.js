// DOM Elements
const body = document.body;
const colorText = document.getElementById('colorText');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const toast = document.getElementById('toast');

// Function to generate a random Hex color
function getRandomHexColor() {
    // Generate a random number between 0 and 16777215 (0xFFFFFF)
    const randomInt = Math.floor(Math.random() * 16777215);
    // Convert to hex string and pad with zeros if needed
    const hexCode = randomInt.toString(16).padStart(6, '0');
    return `#${hexCode}`;
}

// Function to update the UI with the new color
function updateColor() {
    const newColor = getRandomHexColor();
    
    // Update CSS variable for smooth transition on body background
    body.style.backgroundColor = newColor;
    
    // Update the text display
    colorText.textContent = newColor.toUpperCase();
    
    // Optional: Update title of page
    document.title = `${newColor.toUpperCase()} - Color Generator`;
}

// Function to copy text to clipboard
async function copyToClipboard() {
    const color = colorText.textContent;
    
    try {
        await navigator.clipboard.writeText(color);
        showToast(`Copied ${color}!`);
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = color;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        showToast(`Copied ${color}!`);
    }
}

// Toast Notification Logic
let toastTimeout;
function showToast(message) {
    const toastText = toast.querySelector('span');
    toastText.textContent = message;
    
    toast.classList.add('show');
    
    // Clear existing timeout if user clicks rapidly
    if (toastTimeout) clearTimeout(toastTimeout);
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Event Listeners
generateBtn.addEventListener('click', updateColor);
copyBtn.addEventListener('click', copyToClipboard);

// Add Spacebar keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Prevent scrolling
        updateColor();
    }
});

// Initialize with a random color on load
updateColor();

// DOM Elements
const toggleBtn = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const iconSpan = toggleBtn.querySelector('.icon');

// Icons
const SUN_ICON = '☀️';
const MOON_ICON = '🌙';

// Function to set the theme
function setTheme(themeName) {
    // 1. Set the data attribute on the HTML element (CSS uses this to swap variables)
    document.documentElement.setAttribute('data-theme', themeName);
    
    // 2. Save preference to LocalStorage
    localStorage.setItem('theme', themeName);
    
    // 3. Update UI (Text and Icon)
    updateUI(themeName);
}

// Function to update Text and Icon based on current theme
function updateUI(themeName) {
    if (themeName === 'dark') {
        iconSpan.textContent = MOON_ICON;
        themeLabel.textContent = 'Dark';
    } else {
        iconSpan.textContent = SUN_ICON;
        themeLabel.textContent = 'Light';
    }
}

// Function to toggle between themes
function toggleTheme() {
    // Check current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Switch to the opposite theme
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
}

// --- Initialization ---

// 1. Check LocalStorage for a saved preference on page load
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Logic: If user saved a theme, use it. If not, check system preference.
// If neither, default to 'light'.
if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

// 2. Add Event Listener
toggleBtn.addEventListener('click', toggleTheme);

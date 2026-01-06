// DOM Elements select kar rahe hain
const passwordOutput = document.getElementById('password-output');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const errorMsg = document.getElementById('error-msg');
const toast = document.getElementById('toast');

// Character sets define kar rahe hain
const CHAR_SETS = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Slider value update karne ke liye function
function updateSliderValue() {
    lengthValue.textContent = lengthSlider.value;
}

// Strength calculate karne ke liye logic
function calculateStrength(length, optionsCount) {
    let score = 0;
    
    // Length based score
    if (length > 8) score += 1;
    if (length > 12) score += 1;
    if (length >= 16) score += 1;

    // Variety based score
    score += optionsCount - 1; // Options count 1 to 4

    // UI Update
    let color = 'var(--danger-color)';
    let text = 'Weak';

    if (score > 4) {
        color = 'var(--warning-color)';
        text = 'Medium';
    }
    if (score > 7) {
        color = 'var(--success-color)';
        text = 'Strong';
    }

    // Max width is 100%, let's scale it roughly
    const percentage = Math.min((score / 8) * 100, 100);
    
    strengthBar.style.width = `${percentage}%`;
    strengthBar.style.backgroundColor = color;
    strengthText.textContent = `Strength: ${text}`;
    strengthText.style.color = color;
}

// Main Password Generate Function
function generatePassword() {
    const length = +lengthSlider.value;
    let validChars = '';
    let optionsCount = 0;

    // Check karein kaunse options select hain
    if (includeUppercase.checked) {
        validChars += CHAR_SETS.upper;
        optionsCount++;
    }
    if (includeLowercase.checked) {
        validChars += CHAR_SETS.lower;
        optionsCount++;
    }
    if (includeNumbers.checked) {
        validChars += CHAR_SETS.numbers;
        optionsCount++;
    }
    if (includeSymbols.checked) {
        validChars += CHAR_SETS.symbols;
        optionsCount++;
    }

    // Validation: Agar koi option nahi select kiya to error dikhayein
    if (optionsCount === 0) {
        errorMsg.classList.add('visible');
        passwordOutput.value = '';
        strengthBar.style.width = '0%';
        strengthText.textContent = 'Strength: -';
        return;
    } else {
        errorMsg.classList.remove('visible');
    }

    // Random string building
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    // Output set karein
    passwordOutput.value = password;
    
    // Strength meter update karein
    calculateStrength(length, optionsCount);
}

// Copy to Clipboard Function
function copyToClipboard() {
    const password = passwordOutput.value;
    if (!password) return;

    // Modern Clipboard API use kar rahe hain
    navigator.clipboard.writeText(password).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Toast Notification dikhane ka function
function showToast() {
    toast.className = "toast show";
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
    }, 3000); // 3 seconds baad hide ho jayega
}

// Event Listeners lagaye hain
lengthSlider.addEventListener('input', updateSliderValue);
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);

// Generate button ke alawa kisi bhi checkbox change hone par bhi update karein (optional UX)
[includeUppercase, includeLowercase, includeNumbers, includeSymbols].forEach(cb => {
    cb.addEventListener('change', () => {
        if (passwordOutput.value) generatePassword();
    });
});
    
// Page load hone par ek password generate karein
window.addEventListener('DOMContentLoaded', generatePassword);

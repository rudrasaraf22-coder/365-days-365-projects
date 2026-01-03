/**
 * Clock & Time Zone Logic
 */

// Get elements
const timeDisplay = document.getElementById('clock-display');
const dateDisplay = document.getElementById('date-display');
const statusDisplay = document.getElementById('time-status');
const timezoneSelect = document.getElementById('timezone-select');

// State
let selectedTimeZone = 'local';

// Function to determine status based on hour (0-23)
function getStatus(hour) {
    // Logic based on a generic day cycle
    if (hour >= 5 && hour < 7) {
        return "Sunrise ☀️";
    } else if (hour >= 7 && hour < 12) {
        return "Morning ☀️";
    } else if (hour >= 12 && hour < 17) {
        return "Afternoon 🌤️";
    } else if (hour >= 17 && hour < 19) {
        return "Sunset 🌅";
    } else if (hour >= 19 && hour < 21) {
        return "Evening 🌇";
    } else {
        return "Night 🌙";
    }
}

function updateClock() {
    const now = new Date();

    // 1. Handle Time Zone
    // We use Intl.DateTimeFormat to get parts in the specific time zone
    let timeZone = selectedTimeZone === 'local' ? undefined : selectedTimeZone;

    // Formatter for Time
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timeZone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Formatter for Date
    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: timeZone,
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    // 2. Extract Values
    // formatToParts allows us to get raw numbers accurately
    const timeParts = timeFormatter.formatToParts(now);
    const dateParts = dateFormatter.formatToParts(now);

    // Helper function to find value by type
    const getValue = (parts, type) => parts.find(p => p.type === type).value;

    const hours = getValue(timeParts, 'hour');
    const minutes = getValue(timeParts, 'minute');
    const seconds = getValue(timeParts, 'second');

    const day = getValue(dateParts, 'day');
    const month = getValue(dateParts, 'month');
    const year = getValue(dateParts, 'year');

    // 3. Update DOM - Time
    timeDisplay.innerHTML = `
        <span class="hours">${hours}</span>
        <span class="separator">:</span>
        <span class="minutes">${minutes}</span>
        <span class="seconds">${seconds}</span>
    `;

    // 4. Update DOM - Date (DD/MM/YYYY)
    dateDisplay.textContent = `${day}/${month}/${year}`;

    // 5. Update DOM - Status (Sunrise/Sunset etc)
    // Convert hour string to integer for logic
    const hourInt = parseInt(hours, 10);
    statusDisplay.textContent = getStatus(hourInt);
}

// Event Listener for Dropdown Change
timezoneSelect.addEventListener('change', (e) => {
    selectedTimeZone = e.target.value;
    updateClock(); // Update immediately on change
});

// Initialize
updateClock();

// Set interval
setInterval(updateClock, 1000);

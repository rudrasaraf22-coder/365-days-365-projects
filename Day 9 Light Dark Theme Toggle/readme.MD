🌗 Light / Dark Theme Toggle
A sleek and simple web application demonstrating how to implement a theme switcher using CSS Variables and JavaScript LocalStorage.

✨ Features
Instant Switching: Toggles between Light and Dark modes with smooth CSS transitions.
Persistence: Remembers your choice using localStorage. If you refresh or come back later, your theme stays the same.
System Preference Detection: Automatically detects if your OS is set to Dark Mode on the first visit.
CSS Variables: Efficient color management using CSS custom properties.
📂 Project Structure
.
├── index.html # HTML structure with the toggle button
├── style.css # CSS Variables for theming
├── script.js # JS logic for toggling and LocalStorage
└── README.md # This file



## 🚀 How to Run

1.  Save all files in the same directory.
2.  Open `index.html` in your browser.
3.  Click the Sun/Moon icon in the top right corner.

## 🛠️ How it Works

1.  **HTML**: Contains a button with a unique ID.
2.  **CSS**:
    *   We define colors inside `:root` (Light Mode).
    *   We override those colors inside `[data-theme="dark"]` (Dark Mode).
    *   We use `transition` on the `body` so the color change fades smoothly.
3.  **JavaScript**:
    *   We listen for a click on the button.
    *   We check the current theme attribute.
    *   We swap the attribute and save it to the browser's `localStorage` so it persists after refresh.

## 💡 Why learn this?

Theming is a **reusable skill**. Almost every modern web app (Twitter, YouTube, VS Code) uses this pattern. Mastering CSS Variables and LocalStorage early is a huge advantage.

## 👤 Credits

**Made by Rudra Saraf**

---
*Mastering UI/UX, one toggle at a time.* 🔥

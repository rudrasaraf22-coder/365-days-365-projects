📝 Word & Character Counter
A clean, lightweight, and responsive tool to count words and characters in real-time. Built with simple logic to be both useful and educational.

✨ Features
Live Character Counting: Updates instantly as you type.
Live Word Counting: Accurately counts words, ignoring extra spaces.
Minimalist Design: Distraction-free interface focused on content.
Responsive Layout: Works perfectly on mobile and desktop.
Smart Logic: Handles edge cases like multiple spaces and empty inputs correctly.
📂 Project Structure
The project is organized into 4 distinct files for better maintainability:

.
├── index.html # The HTML structure (Input area and Stat boxes)
├── style.css # The styling (Modern, clean look)
├── script.js # The logic (Real-time calculation)
└── README.md # Documentation



## 🚀 How to Run

1.  Ensure all files are in the **same folder**.
2.  Open `index.html` in any web browser (Chrome, Firefox, Edge, Safari).

## 🛠️ How it Works (The Logic)

- **Character Count**: Simple. It takes the length of the string (`text.length`).
- **Word Count**: Slightly more robust.
    1. It removes leading/trailing spaces (`.trim()`).
    2. It splits the text wherever there is whitespace (spaces, tabs, enters) using a Regular Expression (`/\s+/`).
    3. It counts the resulting array of words.

## 👤 Credits

**Made by Rudra Saraf**

---
*Simple tools for powerful productivity.* 💡

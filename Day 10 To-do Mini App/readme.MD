✅ Mini To-Do App
A lightweight, distraction-free To-Do application built to focus on the fundamentals of DOM manipulation. Add tasks, clear your mind, delete tasks when done.

✨ Features
Add Tasks: Type a task and click "Add Task" or press Enter.
Delete Tasks: Click the ✕ button to remove a task smoothly.
Input Validation: Prevents adding empty or whitespace-only tasks.
Clean UI: Modern card design with focus on readability.
📂 Project Structure
.
├── index.html # Structure (Input + List)
├── style.css # Styling (Clean card layout)
├── script.js # Logic (DOM creation & removal)
└── README.md # Documentation
## 🚀 How to Run

1.  Ensure all files are in the **same folder**.
2.  Open `index.html` in your web browser.
3.  Start typing your tasks!

## 🛠️ How it Works

- **HTML**: Provides the input field and an empty `<ul>` list.
- **JavaScript**:
    - Listens for the click on the "Add" button or the "Enter" key.
    - Uses `document.createElement` to dynamically build new list items (`<li>`) when you add a task.
    - Attaches a specific `click` event to every new delete button to remove its parent element.

## 👤 Credits

**Made by Rudra Saraf**

---
*Simple productivity for busy minds.* 💡

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Function to Add Task
function addTask() {
    // 1. Get the value and trim whitespace
    const taskText = taskInput.value.trim();

    // 2. Validation: Don't add empty tasks
    if (taskText === '') {
        // Optional: Shake input or simple focus
        taskInput.focus();
        return;
    }

    // 3. Create HTML elements
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '✕'; // Using multiplication sign as close icon
    deleteBtn.setAttribute('aria-label', 'Delete task');

    // 4. Add Delete Functionality to this specific button
    deleteBtn.addEventListener('click', function() {
        // Add a fading effect before removing (visual polish)
        li.style.opacity = '0';
        li.style.transform = 'translateX(20px)';
        setTimeout(() => {
            li.remove();
            checkEmptyState();
        }, 300);
    });

    // 5. Assemble the item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // 6. Add to list
    taskList.appendChild(li);

    // 7. Reset input
    taskInput.value = '';
    taskInput.focus();
}

// Function to check if list is empty (optional UI helper)
function checkEmptyState() {
    // You could add logic here to show a "No tasks yet" message
    // if (taskList.children.length === 0) ...
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

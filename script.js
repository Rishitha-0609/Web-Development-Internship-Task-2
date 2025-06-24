document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.getElementById('add-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
      `;
      
      // Toggle complete
      li.querySelector('.task-text').addEventListener('click', () => {
        li.classList.toggle('completed');
      });

      // Delete task
      li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove();
      });

      taskList.appendChild(li);
      taskInput.value = '';
    }
  });

  // Enter key support
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addBtn.click();
    }
  });
});
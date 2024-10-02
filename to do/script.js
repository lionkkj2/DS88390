const taskInput = document.getElementById('task-input');
const taskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

taskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';  // Corrigido aqui

    const taskElement = document.createElement('span');
    taskElement.className = 'task-text';
    taskElement.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.className = 'edit-task';
    editButton.textContent = 'Editar';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-task';
    removeButton.textContent = 'Remover';  // Corrigido aqui

    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    editButton.addEventListener('click', function() {
        if (editButton.textContent === 'Editar') {
            taskElement.contentEditable = true;
            taskElement.focus();
            editButton.textContent = 'Salvar';
        } else {
            taskElement.contentEditable = false;
            editButton.textContent = 'Editar';
        }
    });

    listItem.appendChild(taskElement);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
}

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        taskButton.click();
    }
});

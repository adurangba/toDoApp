document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add');
    const inputField = document.getElementById('tds');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTask);
    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = inputField.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const doneButton = document.createElement('button');
            doneButton.textContent = 'Done';
            doneButton.classList.add('done');
            doneButton.addEventListener('click', function () {
                listItem.classList.toggle('completed');
            });

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove');
            removeButton.addEventListener('click', function () {
                listItem.remove();
            });

            listItem.appendChild(doneButton);
            listItem.appendChild(removeButton);

            todoList.appendChild(listItem);

            inputField.value = ''; // Clear the input field
        }
    }
});
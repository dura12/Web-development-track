
const taskList = document.getElementById('list');
const addTaskBtn = document.getElementById('btn');
const input = document.getElementById('task-input');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  if (input.value.trim() !== '') {
    const li_item = document.createElement('li');
    const span = document.createElement('span');
    const del_button = document.createElement('button');
    span.textContent = input.value.trim();
    del_button.textContent = 'Remove';
    li_item.appendChild(span);
    li_item.appendChild(del_button);
    taskList.appendChild (li_item);
    input.value = "";

    del_button.addEventListener('click', () => {
     li_item.remove();
    });


  }
}
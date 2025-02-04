const taskList = document.getElementById('list') as HTMLUListElement;
const addTaskBtn = document.getElementById('btn') as HTMLButtonElement;
const input = document.getElementById('task-input') as HTMLInputElement;

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  if (input.value.trim() !== '') {
    const li_item = document.createElement('li');
    const span = document.createElement('span');
    const del_button = document.createElement('button');
    const editt = document.createElement('button');

    span.textContent = input.value.trim();
    del_button.textContent = 'Remove';
    editt.textContent = "Edit";
    li_item.appendChild(span);
    li_item.appendChild(del_button);
    li_item.appendChild(editt);
    taskList.appendChild(li_item);

    input.value = "";

    del_button.addEventListener('click', () => {
     li_item.remove();
    });
    editt.addEventListener('click', () => {
      let ans = prompt("enter a new task");
      if (ans !== null && ans.trim() !== '') {
        span.textContent = ans.trim();
      }
    });
  }
}
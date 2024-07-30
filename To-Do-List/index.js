
const taskList = document.getElementById('list');
const addTaskBtn = document.getElementById('btn');
const input = document.getElementById('task-input');

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
    li_item.append(editt)
    taskList.appendChild (li_item);

    input.value = "";

    del_button.addEventListener('click', () => {
     li_item.remove();
    });
    editt.addEventListener('click', () => {
      let ans = prompt("enter a new task")
      if (ans != ""){
      span.textContent = ans;}
     });


  }
}
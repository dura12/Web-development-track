
const taskList = document.getElementById('list');
const addTaskBtn = document.getElementById('btn');
const input = document.getElementById('task-input');
addTaskBtn.addEventListener('click', AddTask);
function AddTask() {
    if (input.value.trim() !== '') {
        const li_item = document.createElement('li');
        const span = document.createElement('span');
        const del_button = document.createElement('button');
        const editt = document.createElement('button');
        const div = document.createElement("div");
        span.textContent = input.value.trim();
        del_button.textContent = 'Remove';
        editt.textContent = "Edit";
        editt.style.backgroundColor = "purple";
        li_item.appendChild(span);
        div.appendChild(editt);
        div.appendChild(del_button);
        div.classList.add("editremove");
        li_item.appendChild(div);
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

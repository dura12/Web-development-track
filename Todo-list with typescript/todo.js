var taskList = document.getElementById('list');
var addTaskBtn = document.getElementById('btn');
var input = document.getElementById('task-input');
addTaskBtn.addEventListener('click', AddTask);
var newtask = [];
function AddTask() {
    if (input.value.trim() !== '') {
        var li_item_1 = document.createElement('li');
        var span_1 = document.createElement('span');
        var del_button = document.createElement('button');
        var editt = document.createElement('button');
        var div = document.createElement("div");
        span_1.textContent = input.value.trim();
        del_button.textContent = 'Remove';
        editt.textContent = "Edit";
        li_item_1.appendChild(span_1);
        div.appendChild(editt);
        div.appendChild(del_button);
        div.classList.add("editremove");
        li_item_1.appendChild(div);
        taskList.appendChild(li_item_1);
        var ntask = {
            description: input.value
        };
        newtask.push(ntask);
        input.value = "";
        del_button.addEventListener('click', function () {
            li_item_1.remove();
        });
        editt.addEventListener('click', function () {
            var ans = prompt("enter a new task");
            if (ans !== null && ans.trim() !== '') {
                span_1.textContent = ans.trim();
            }
        });
    }
}

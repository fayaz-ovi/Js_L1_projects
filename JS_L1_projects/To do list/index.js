const input = document.getElementById("input_field");
const add=document.getElementById('addButton');
const task_list=document.getElementById('list');

add.addEventListener('click',addingTask);

function addingTask(){
  if (input.value.trim()!=''){
    task=input.value;
    const item=document.createElement('li');
    const button= document.createElement('button');
    item.textContent=task;
    item.className='task';
    button.innerHTML='x';
    button.className='buttonX';
    task_list.appendChild(item);
    item.append(button);
    input.value='';
  }
}
task_list.addEventListener('click', function(e) {
    if (e.target && e.target.className === 'buttonX') {
        delTask(e);
    }
});

function delTask(e) {
    e.target.parentElement.remove();
}
/*
const input = document.getElementById("input_field");
const add = document.getElementById('addButton');
const task_list = document.getElementById('list');

add.addEventListener('click', addingTask);

function addingTask() {
    const task = input.value.trim();
    if (task !== "") {
        const item = document.createElement('li');
        item.textContent = task;
        task_list.appendChild(item);
        input.value = ""; // Clear the input field after adding the task
    } else {
        alert("Please enter a task.");
    }
}*/

function addTask(){
    let input = document.getElementById('taskInput');
    let task = input.value.trim();
    if(task === "")
        return;

    let li = document.createElement('li');
    li.innerHTML =`${task} ${deleteButton()}`

    document.getElementById('taskList').appendChild(li);
    input.value = "";
}

function deleteButton(){
    return '<button id="btn-delete" onclick="this.parentElement.remove()"><span class="material-symbols-outlined">delete</span></button>';
}

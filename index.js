function addTask(){
    const taskInput=document.getElementById('taskInput');
    const tasktext=taskInput.value.trim();
    if(tasktext===""){
        alert("placse enter a task");
        return;
    }
       // Create a new list item
    const li =document.createElement("li");
        // Add task text
    const textNode=document.createTextNode(tasktext);
    li.appendChild(textNode);
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.onclick = function () {
        li.classList.toggle("completed");
    };
    li.appendChild(completeButton);

    // Create a "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteButton);

    // Add the list item to the task list
    document.getElementById("taskList").appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

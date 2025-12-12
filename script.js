function addTask() {
    let inputBox = document.getElementById("taskInput");
    let taskText = inputBox.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a list item
    let li = document.createElement("li");
    li.innerHTML = taskText + " <span onclick='deleteTask(this)'>X</span>";

    document.getElementById("taskList").appendChild(li);

    inputBox.value = ""; // clear input
}

function deleteTask(element) {
    element.parentElement.remove(); // removes the li
}

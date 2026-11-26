
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskName;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";

    completeButton.onclick = function () {
        const completedList = document.getElementById("completedList");
        completedList.appendChild(listItem);
        completeButton.remove();

    };

    listItem.appendChild(completeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
}

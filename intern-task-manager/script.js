
function updateDashboard() {
    const total = document.querySelectorAll("#taskList li").length +
                  document.querySelectorAll("#completedList li").length;

    const completed = document.querySelectorAll("#completedList li").length;
    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
}

function addTask() {
    const taskInput = 

document.getElementById("taskInput");
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
        updateDashboard();
    };


    listItem.appendChild(completeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";

    updateDashboard();
}

updateDashboard();

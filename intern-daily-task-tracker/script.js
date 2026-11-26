
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

let tasks = [];

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const task = {
        name: document.getElementById("taskName").value.trim(),
        description: document.getElementById("description").value.trim(),
        priority: document.getElementById("priority").value,
        status: document.getElementById("status").value,
        date: document.getElementById("taskDate").value

    };

    tasks.push(task);

    displayTasks();
    taskForm.reset();
});

function displayTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks added yet.</p>";
        return;
    }

    tasks.forEach(function(task, index) {
        const taskCard = document.createElement("div");
        taskCard.className = "task-card";

        const taskTitle = document.createElement("h3");
        taskTitle.textContent = task.name;


        const taskDescription = document.createElement("p");
        taskDescription.textContent = task.description;

        const taskDetails = document.createElement("p");
        taskDetails.textContent =
            "Priority: " + task.priority +
            " | Status: " + task.status +
            " | Date: " + task.date;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Mark as Completed";
        completeButton.disabled = task.status === "Completed";

        completeButton.addEventListener("click", function() {
            tasks[index].status = "Completed";
            displayTasks();
        });


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.background = "#dc2626";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDetails);
        taskCard.appendChild(completeButton);
        taskCard.appendChild(deleteButton);

        taskList.appendChild(taskCard);
    });
}

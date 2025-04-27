document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    addTaskButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
    function addTask(text) {
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item");
  
      const taskContent = document.createElement("span");
      taskContent.innerText = text;
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
  
      deleteButton.addEventListener("click", function() {
        taskItem.remove();
      });
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    }
  });
  
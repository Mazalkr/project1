//Create
//Add new task to tasks array:
function addTask(content, date, time) {
  //create a new JSON to represent the new task
  const task = {
    content,
    date,
    time,
  };

  const tasks = getTasks();
  tasks.push(task);

  saveTasks(tasks);
}

//Save Task array to localStorage:
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Retrieve - get tasks as JSON object
//Get tasks array from local storage as JSON object:
function getTasks() {
  const tasks = localStorage.getItem("tasks");
  //check if there is data in tasks array
  if (tasks) {
    return JSON.parse(tasks);
  }
  return [];
}

//Delete a task from the board tasks:
function deleteTask(offset) {
  //offset represent index from the array "tasks"
  let tasks = getTasks();
  tasks.splice(offset, 1);
  saveTasks(tasks);
  stopFadeIn();
  createTask(tasks);
}
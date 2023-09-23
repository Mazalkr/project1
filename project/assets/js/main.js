//Control fade-in animation:
const body = document.querySelector("body");

stopFadeIn();

function stopFadeIn(){
  body.classList.add("stop-fade-in");
}

function allowFadeIn(){
  body.classList.remove("stop-fade-in");
}

//Disable the option to choose a date before today in date input:
window.onload = function setTodaysDate() {
  let today = new Date().toISOString().split("T")[0];
  document.getElementsByName("setTodaysDate")[0].setAttribute("min", today);
};

createTask();

function submitForm(event) {
  event.preventDefault();
  const content = document.getElementById("content").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  addTask(content, date, time);

  allowFadeIn();
  createTask();
}

function createTask() {
  let tasks = getTasks();

  let taskBoard = document.getElementById("taskBoard");
  let newTask = "";

  for (i = 0; i < tasks.length; i++) {
    newTask += `
    <section class="note">
      <button onclick="deleteTask(${i})" class="btn btn-light btn-sm bi bi-x bi-x-lg "></button>
      <div class="contentNote">${tasks[i].content}</div>
      <div class="dateNote">${tasks[i].date}</div>
      <div class="timeNote">${tasks[i].time}</div>
      </section>
      `;
  }
  taskBoard.innerHTML = newTask;

  document.querySelector("form").reset();
}
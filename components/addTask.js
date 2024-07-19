import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
  const list = document.querySelector("[data-list]");
  const task = createTask(evento);
  list.appendChild(task);
};

const createTask = (evento) => {
  evento.preventDefault();
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  console.log(taskList);
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  console.log(dateFormat);
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  //backticks
  const taskContent = document.createElement("div");

  console.log({ value, dateFormat });

  const taskObj = {
    value,
    dateFormat,
  };

  // Agregando las tareas en el local storage mediante una lista
  taskList.push(taskObj);

  // La informacion persiste mientras la pestania este abierta
  // sessionStorage.setItem("tasks", JSON.stringify(taskObj));

  // La informacion persiste todo el tiempo en los datos del navegador
  localStorage.setItem("tasks", JSON.stringify(taskList));

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon());
  list.appendChild(task);
  return task;
};

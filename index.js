// Create Element Button & Function
let addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  createElement();
});
let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", () => {
  clearCompleted();
});

function createElement() {
  let newElement = document.createElement("p");
  newElement.classList.add(`todo-${todos.querySelectorAll("p").length}`);
  newElement.textContent = inputState;
  newElement.addEventListener("click", () => toggleCompleted(newElement));
  todos.appendChild(newElement);
  inputState = "";
  addInput.value = "";
}

function toggleCompleted(element) {
  if (element.style.textDecoration === "line-through") {
    element.style.textDecoration = "none";
  } else {
    element.style.textDecoration = "line-through";
  }
}

let todos = document.querySelector(".todos");
todos.addEventListener("click", () => {});
let newTodos = [];
let inputState = "";
let addInput = document.querySelector(".addInput");
addInput.addEventListener("input", e => {
  inputState = e.target.value;
});
newTodos.forEach(todo => {
  todo.addEventListener("click", function() {
    console.log("todo");
  });
});

function clearCompleted() {
  let tasks = Array.from(todos.querySelectorAll("p"));
  tasks.forEach(task => {
    if (task.style.textDecoration === "line-through") {
      task.remove();
    }
  });
}

let form = document.querySelector(".form");
form.addEventListener("click", e => {
  e.preventDefault();
});

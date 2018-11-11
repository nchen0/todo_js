let todos = document.querySelector(".todos");

let addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.classList.add(`todo-${todos.querySelectorAll("p").length}`);
  newElement.textContent = inputState;
  todos.appendChild(newElement);
  inputState = "";
  addInput.value = "";
});

let inputState = "";

let addInput = document.querySelector(".addInput");

addInput.addEventListener("input", e => {
  inputState = e.target.value;
});

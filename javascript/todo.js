const toDoAsking = document.querySelector(".main__toDo--asking");
const toDoForm = toDoAsking.querySelector("form");
const toDoInput = toDoForm.querySelector("input");

const toDoPaint = document.querySelector(".main__toDo--paint");

const toDoCheckbox = document.querySelector(".inputCheckbox");
const toDoText = document.querySelector(".toDoText");

const mainToDoList = document.querySelector(".main__toDoList");

const TODOTEXT = "mainToDo";

function makingToDo(text) {
  const li = document.createElement("li");
  const label = document.createElement("label");
  label.className = "checkbox";

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.className = "inputCheckbox";
  inputCheckbox.addEventListener("click", toDoClear);

  const spanCheckbox = document.createElement("span");
  spanCheckbox.className = "spanCheckbox";
  label.appendChild(inputCheckbox);
  label.appendChild(spanCheckbox);

  const spanToDoText = document.createElement("span");
  spanToDoText.innerHTML = text;
  spanToDoText.className = "toDoText";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-trash-can";
  icon.addEventListener("click", trashToDo);

  li.appendChild(label);
  li.appendChild(spanToDoText);
  li.appendChild(icon);
  mainToDoList.appendChild(li);
}

function toDoPainting(event) {
  toDoAsking.style.display = "none";
  toDoPaint.style.display = "block";
  if (toDoInput.value !== "") {
    event.preventDefault();
    const text = toDoInput.value;
    toDoInput.value = "";
    localStorage.setItem(TODOTEXT, text);
    makingToDo(text);
  } else {
    const text = localStorage.getItem(TODOTEXT);
    makingToDo(text);
  }
}

function toDoClear() {
  const toDoText = this.parentNode.nextSibling;
  if (this.checked) {
    toDoText.style.textDecoration = "line-through";
    toDoText.style.opacity = 0.7;
  } else {
    toDoText.style.textDecoration = "none";
    toDoText.style.opacity = 1;
  }
}

function trashToDo() {
  const toDoChecked = this.parentNode.childNodes[1].style.textDecoration;
  const toDoli = document.querySelector(".main__toDoList li");
  if (toDoChecked === "line-through") {
    localStorage.removeItem(TODOTEXT);
    toDoli.parentNode.removeChild(toDoli);
    toDoAsking.style.display = "block";
    toDoPaint.style.display = "none";
  } else {
    alert("check please");
  }
}

const getToDo = localStorage.getItem("mainToDo");

if (getToDo) {
  toDoPainting();
}

toDoForm.addEventListener("submit", toDoPainting);

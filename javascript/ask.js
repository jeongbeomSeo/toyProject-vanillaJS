const askBox = document.querySelector(".main__ask");
const askForm = document.querySelector(".main__submitName");
const askInput = document.querySelector(".main__askName");
const afterDisplay = document.querySelector(".main__after");

const STORED_NAME = "Name";

function paintingGreeting() {
  askBox.style.display = "none";
  afterDisplay.style.display = "block";
}

function changeDisplay(event) {
  event.preventDefault();
  const askName = askInput.value;
  askInput.value = "";
  localStorage.setItem(STORED_NAME, askName);
  paintingGreeting();
}

const storedName = localStorage.getItem(STORED_NAME);

if (storedName) {
  paintingGreeting();
} else {
  afterDisplay.style.display = "none";
  askForm.addEventListener("submit", changeDisplay);
}

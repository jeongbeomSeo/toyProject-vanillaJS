const clock = document.querySelector(".main__clock");

const mode = document.querySelector(".change-clock-mode i");
const checkboxLabel = document.querySelector(".clock-mode__checkbox");
const checkbox = document.querySelector(".clock-mode__checkbox input");

function clocking() {
  const currentTime = new Date();
  const hour = String(currentTime.getHours()).padStart(2, "0");
  const minute = String(currentTime.getMinutes()).padStart(2, "0");
  const stringTime = checkbox.checked
    ? `${hour}:${minute}`
    : `${parseInt(hour) > 12 ? parseInt(hour) - 12 : hour}:${minute}`;
  clock.innerHTML = stringTime;
}

function checkingMode() {
  if (checkboxLabel.style.display === "block") {
    checkboxLabel.style.display = "none";
  } else {
    checkboxLabel.style.display = "block";
  }
}

clocking();
setInterval(clocking, 1000);

mode.addEventListener("click", checkingMode);

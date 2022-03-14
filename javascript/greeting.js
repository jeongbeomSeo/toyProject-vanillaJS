const greeting = document.querySelector(".main__greeting");

const NAME = localStorage.getItem("Name");

function paintGreeting() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  if (hour < 12) {
    greeting.innerHTML = `Good Morning, ${NAME}`;
  } else if (hour < 18) {
    greeting.innerHTML = `Good Afternoon, ${NAME}`;
  } else {
    greeting.innerHTML = `Good Night, ${NAME}`;
  }
}

paintGreeting();

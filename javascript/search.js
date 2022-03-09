const searchForm = document.querySelector(".header__search");
const inputText = document.querySelector(".header__search input");

function searching(event) {
  event.preventDefault();
  const keyword = inputText.value;
  inputText.value = "";
  const url = `https://www.google.com/search?q=${keyword}`;
  window.location.href = url;
}

searchForm.addEventListener("submit", searching);

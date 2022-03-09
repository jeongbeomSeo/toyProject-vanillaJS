const lat = 37.6;
const lon = 127.0;
//geolocation을 사용하려고 했지만 permission오류가 뜬다.
const APIKEY = "37856b744711e5a8135f432e3533375f";

const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;

function checkWeather(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = document.querySelector(".header__temperature");
      const locat = document.querySelector(".header__location");
      const icon = document.querySelector(".header__temp-icon");
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const img = document.createElement("img");
      img.setAttribute("src", iconUrl);
      temp.innerHTML = `${data.main.temp}॰`;
      locat.innerHTML = data.name;
      icon.appendChild(img);
    });
}

checkWeather(URL);

//time and day
function formatTime(now) {
  let hour = now.getHours();
  let hours = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  if (hours < 10) {
    hour = `0${hours}`;
  }
  let minutes = now.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  return `${day} ${hour}:${minutes}`;
}
let currentDia = document.querySelector("#nowTime");
let now1 = new Date();
nowTime.innerHTML = formatTime(now1);

function changeCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("h3");
  let cityInput = document.querySelector("#city-input");
  currentCity.innerHTML = cityInput.value;

  let key = "4f05e6229e1535d6052a9d9d4d3d1173";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${key}&units=metric`;
  axios.get(url).then(displayWeather);
  axios.get(url).then(displayWind);
  axios.get(url).then(displayMax);
}
let buttonSubmit = document.querySelector("#search-form");
buttonSubmit.addEventListener("submit", changeCity);

function displayWeather(response) {
  let weatherDiv = document.querySelector("#temp");
  let temperature = Math.round(response.data.main.temp);
  weatherDiv.innerHTML = `Current Temperature = ${temperature} °C`;
}

function displayWind(responce) {
  let infoOne = document.querySelector("#info-one");
  let wind = responce.data.wind.speed;
  infoOne.innerHTML = `Wind Speed = ${wind} mps`;
}

function displayMax(responce) {
  let infoTwo = document.querySelector("#info-two");
  let max = Math.round(responce.data.main.temp_max);
  infoTwo.innerHTML = `Max Temperature Today = ${max}°C`;
}

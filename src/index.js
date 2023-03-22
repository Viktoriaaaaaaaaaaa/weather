function go(event) {
  event.preventDefault();
  let goInput = document.querySelector("#userForm");

  let h4 = document.querySelector("h4");
  h4.innerHTML = `${goInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", go);

let now = new Date();
console.log(now);

let datee = document.querySelector("#date");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
datee.innerHTML = `Today is ${day}, ${hour}:${minutes}`;

function convertToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#tempr");
  temperature.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#tempr");
  let tempr = temperature.innerHTML;
  tempr = Number(tempr);
  temperature.innerHTML = 60;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertToFahrenheit);

function showTemperature(response) {
  let cityNow = document.querySelector("h4");
  cityNow.innerHTML = `${response.data.name},`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}km/h`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let temperature = document.querySelector("#tempr");
  let tempetatureNow = Math.round(response.data.main.temp);
  temperature.innerHTML = `${tempetatureNow}`;
}

function showCity(city) {
  let apiKey = "6782253072f7d90462731a624097fc54";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}
function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#userForm").value;
  showCity(city);
}
let button = document.querySelector("#button");
button.addEventListener("click", getCity);

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat);
  console.log(lon);
  let apiKey = "6782253072f7d90462731a624097fc54";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentButton = document.querySelector("#current");
currentButton.addEventListener("click", getCurrentLocation);

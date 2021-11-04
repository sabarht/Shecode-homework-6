let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[date.getDay()];

let li = document.querySelector("h3");
li.innerHTML = `${today} ${hour}:${minutes}`;
//2

function searchCity(event) {
  event.preventDefault();
  let apiKey = "3586082911a3bafc0ae4afd4377c0a7c";
  let searchInput = document.querySelector("#searchbar");
  let citySearch = document.querySelector("#current-city");
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  citySearch.innerHTML = `${searchInput.value}`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

function showTemperature(response) {
  console.log(response);
  let currentCelsiusTemp = Math.round(response.data.main.temp);
  let celsiusTemperature = document.querySelector("#current-location-temp");
  let currentCity = response.data.name;
  celsiusTemperature.innerHTML = `It is ${currentCelsiusTemp}°C in ${currentCity}`;
}

function getPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "3586082911a3bafc0ae4afd4377c0a7c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getPosition);
}
let tempButton = document.querySelector("#current-location");
tempButton.addEventListener("click", getLocation);

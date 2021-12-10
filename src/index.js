import "./style.scss";

import { format, toDate } from "date-fns";
import htmlBuild from "./htmlBuild";

import backgroundImg from "./background.jpg";
import { offsetDateTime } from "./tools";

// const backgroundImageColor = "rgba(0,0,0,0.4)";
const main = document.createElement("main");
document.body.appendChild(main);

// create Weather HTML
main.appendChild(htmlBuild.createWeatherDescription());

// caching DOM
const weatherDescription = document.querySelector(".weatherDescription");
const currentWeather = weatherDescription.querySelector(".weatherType");
const currentCity = weatherDescription.querySelector(".city");
const currentDate = weatherDescription.querySelector(".currentDate");
const currentTime = weatherDescription.querySelector(".currentTime");
const currentTemp = weatherDescription.querySelector(".currentTemp");
const currentWeatherIcon = weatherDescription.querySelector(".weatherIcon");
const citySearch = weatherDescription.querySelector(".citySearch");
const search = weatherDescription.querySelector(".search");

// document.body.style.backgroundImage = `repeating-linear-gradient(to top, rgba(0, 0, 0, 0.4), ${backgroundImageColor} 78.15%, rgba(0, 0, 0, 0.4)), url("${backgroundImg}")`;
document.body.style.backgroundImage = `url("${backgroundImg}")`;

async function getCurrentWeather(city) {
  let searchLocation;
  if (!city) {
    searchLocation = "London";
  } else {
    searchLocation = city;
  }

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=707ee2330d6d3bbdba130f36f9f19e4f&units=imperial`,
    { mode: "cors" }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function parseWeatherTime(dt, offset) {
  const date = toDate(dt * 1000);
  const result = format(date, "PPpp");
  return result;
}

async function processWeatherData(city) {
  const data = await getCurrentWeather(city);
  currentWeather.textContent = data.weather.description;
  currentCity.textContent = data.name;
  currentTime.textContent = parseWeatherTime(data.dt, data.timezone);
  currentTemp.textContent = `${data.main.temp}°F`;
}

processWeatherData("New York");

async function getWeatherForLocation() {
  console.log(citySearch.value);
}

function checkForEnter(e) {
  if (e.code === "Enter") {
    getWeatherForLocation();
  }
}

// add Event Listenders
search.addEventListener("click", getWeatherForLocation);
document.addEventListener("keydown", checkForEnter);

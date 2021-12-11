/* eslint-disable no-alert */
import "./style.scss";

import htmlBuild from "./htmlBuild";
import { getWeatherIcon } from "./icons";
import backgroundImg from "./background.jpg";

// const backgroundImageColor = "rgba(0,0,0,0.4)";
const main = document.createElement("main");
document.body.appendChild(main);

// create Weather HTML
main.appendChild(htmlBuild.createTopWeatherApp());

// caching DOM
const weatherDescription = document.querySelector(".weatherDescription");
const weatherData = document.querySelector(".weatherData");
const currentWeather = weatherDescription.querySelector(".weatherType");
const currentCity = weatherDescription.querySelector(".city");
const currentTemp = weatherDescription.querySelector(".currentTemp");
const currentWeatherIcon = weatherDescription.querySelector(".weatherIcon");
const citySearch = weatherDescription.querySelector(".citySearch");
const search = weatherDescription.querySelector(".search");
const feelsLike = weatherData.querySelector(".feelsLikeDataNumber");
const humidity = weatherData.querySelector(".humidityDataNumber");
const windSpeed = weatherData.querySelector(".windSpeedDataNumber");

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
  return data;
}

function changeWeatherIcon(icon) {
  currentWeatherIcon.src = getWeatherIcon(icon);
}

function formatWeatherType(text) {
  return text.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
}

async function processWeatherData(city) {
  try {
    const data = await getCurrentWeather(city);
    currentWeather.textContent = formatWeatherType(data.weather[0].description);
    currentCity.textContent = data.name;
    currentTemp.textContent = `${data.main.temp} °F`;
    feelsLike.textContent = `${data.main.feels_like} °F`;
    humidity.textContent = `${data.main.humidity} %`;
    windSpeed.textContent = `${data.wind.speed} mph`;
    changeWeatherIcon(data.weather[0].icon);
  } catch (error) {
    console.log(error);
    alert(`${city} Not Found! Try another search`)
  }
}

processWeatherData("New York");

async function getWeatherForLocation() {
  const searchValue = citySearch.value;
  citySearch.value = "";
  processWeatherData(searchValue);
}

function checkForEnter(e) {
  if (e.code === "Enter") {
    getWeatherForLocation();
  }
}

// add Event Listenders
search.addEventListener("click", getWeatherForLocation);
document.addEventListener("keydown", checkForEnter);

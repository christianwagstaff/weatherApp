import { createDomElement } from "./tools";
import {getIcon} from "./icons";

export default (function WeatherAppHtml() {
  function searchBar() {
    const container = createDomElement("div", "searchContainer");
    const input = createDomElement("input", "citySearch");
    input.type = "text";
    input.placeholder = "Search Location";
    container.appendChild(input);
    container.appendChild(createDomElement("button", "search", "Search"));
    return container;
  }

  function createDataWithIcon(iconName, title, number, userClass) {
    const container = createDomElement("div", userClass);
    const icon = createDomElement(
      "img",
      `svgImage ${userClass.split(" "[0])}svg`
    );
    icon.src = getIcon(iconName);
    container.appendChild(icon);
    const right = document.createElement("div");
    right.appendChild(
      createDomElement("div", `${userClass.split(" "[0])}Title dataTitle`, title)
    );
    right.appendChild(
      createDomElement("div", `${userClass.split(" "[0])}Number dataNumber`, number)
    );
    container.appendChild(right);
    return container;
  }

  function createCurrentData() {
    const container = createDomElement("div", "weatherData");
    const humidity = createDataWithIcon(
      "rain",
      "Humidity",
      "",
      "humidityData"
    );
    const windSpeed = createDataWithIcon(
      "wind",
      "Wind Speed",
      "",
      "windSpeedData"
    );
    const feelsLike = createDataWithIcon(
      "thermometer",
      "Feels Like",
      "",
      "feelsLikeData"
    );
    container.appendChild(feelsLike);
    container.appendChild(humidity);
    container.appendChild(windSpeed);
    return container;
  }

  function createWeatherDescription() {
    const container = createDomElement("div", "weatherDescription");
    container.appendChild(
      createDomElement("div", "weatherType")
    );
    container.appendChild(createDomElement("div", "city"));
    // container.appendChild(createDomElement("div", "currentDate", "date placeholder"));
    // container.appendChild(createDomElement("div", "currentTime", "timePlaceholder"))
    container.appendChild(createDomElement("div", "currentTemp"));
    container.appendChild(
      createDomElement("img", "weatherIcon")
    );
    container.appendChild(searchBar());
    return container;
  }

  function createTopWeatherApp() {
    const container = createDomElement("div", "weatherAppTop");
    container.appendChild(createWeatherDescription());
    container.appendChild(createCurrentData());
    return container;
  }

  return {
    createTopWeatherApp,
  };
})();

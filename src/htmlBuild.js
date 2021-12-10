import { createDomElement } from "./tools";

export default (function WeatherAppHtml() {
  function searchBar() {
    const container = createDomElement("div", "searchContainer");
    const input = createDomElement("input", "citySearch")
    input.type = "text";
    input.placeholder = "Search Location";
    container.appendChild(input);
    container.appendChild(createDomElement("button", "search", "Search"))
    return container;
  }

  function createWeatherDescription() {
    const container = createDomElement("div", "weatherDescription");
    container.appendChild(
      createDomElement("div", "weatherType", "Weather Type Placeholder")
    );
    container.appendChild(createDomElement("div", "city", "city placeholder"));
    container.appendChild(createDomElement("div", "currentDate", "date placeholder"));
    container.appendChild(createDomElement("div", "currentTime", "timePlaceholder"))
    container.appendChild(createDomElement("div", "currentTemp", "X deg"));
    container.appendChild(
      createDomElement("div", "weatherIcon", "icon placeholder")
    );
    container.appendChild(searchBar());
    return container;
  }

  return {
    createWeatherDescription,
  };
})();

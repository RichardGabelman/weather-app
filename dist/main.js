/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/modules/htmlGenerator.js


class HTMLGenerator {
  static updateHTML() {
    const address = DataManager.currentWeatherObject.location;
    const temp = DataManager.currentWeatherObject.temp;
    const desc = DataManager.currentWeatherObject.description;

    const card = document.querySelector(".weatherCard");

    const addressDisplay = document.createElement("h2");
    addressDisplay.textContent = address;

    const tempDisplay = document.createElement("div");
    tempDisplay.textContent = temp + "°F";
    tempDisplay.classList.add("temp");

    const descriptionDisplay = document.createElement("p");
    descriptionDisplay.textContent = desc;

    card.appendChild(addressDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(descriptionDisplay);
  }
}

;// CONCATENATED MODULE: ./src/modules/weather.js
class Weather {
  constructor(json) {
    this.temp = json.currentConditions.temp;
    this.location = json.resolvedAddress;
    this.description = json.description;
  }
}

;// CONCATENATED MODULE: ./src/modules/weatherAPI.js
async function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=L9CTUTHMAGAWR5CNWQGG93NPC`;
  let response = await fetch(url, { mode: "cors" });
  return await response.json();
}

;// CONCATENATED MODULE: ./src/modules/dataManager.js




class DataManager {
  static currentWeatherObject;

  static async updateWeather(location) {
    let newWeatherJSON = await getWeatherData(location);
    console.log(newWeatherJSON);
    this.currentWeatherObject = new Weather(newWeatherJSON);
    console.log(this.currentWeatherObject);
    // update HTML
    HTMLGenerator.updateHTML();
  }
}

;// CONCATENATED MODULE: ./src/modules/locationSubmit.js


function setupForm() {
  const submitBtn = document.querySelector("button");
  submitBtn.addEventListener("click", async () => {
    const locationInput = document.querySelector("input");
    const location = locationInput.value;
    DataManager.updateWeather(location);
  });
}

;// CONCATENATED MODULE: ./src/index.js



// let json = await getWeatherData("San Diego");
// let currentWeather = new Weather(json);
// console.log(currentWeather);
setupForm();

/******/ })()
;
//# sourceMappingURL=main.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/modules/htmlGenerator.js


class HTMLGenerator {
  static updateHTML() {
    if (!DataManager.currentWeatherObject) {
      return;
    }
    const emoji = DataManager.currentWeatherObject.emoji;
    const address = DataManager.currentWeatherObject.location;
    const tempFahrenheit = DataManager.currentWeatherObject.temp;
    const desc = DataManager.currentWeatherObject.description;

    const card = document.querySelector(".weatherCard");

    const addressDisplay = document.createElement("h2");
    addressDisplay.textContent = address;

    const tempDisplay = document.createElement("div");
    const unitToggle = document.querySelector(".unitToggle");
    const tempUnit = unitToggle.textContent;
    if (tempUnit == "C") {
      const tempCelsius = (tempFahrenheit - 32) / 1.8;
      tempDisplay.textContent = tempCelsius.toFixed(1) + "C";
    } else {
      tempDisplay.textContent = tempFahrenheit + "°F";
    }
    tempDisplay.classList.add("temp");

    const descriptionDisplay = document.createElement("p");
    descriptionDisplay.textContent = emoji + " " + desc + " " + emoji;

    card.textContent = "";
    card.appendChild(unitToggle);
    card.appendChild(addressDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(descriptionDisplay);

    const smalls = document.querySelectorAll(".small");
    for (let i = 0; i < smalls.length; i++) {
      const currDay = DataManager.currentWeatherObject.forecast[i];
      const temp = currDay.temp;
      const desc = currDay.desc;
      const date = currDay.date;
      const emoji = currDay.emoji;

      const tempDisplay = document.createElement("h3");
      if (tempUnit == "C") {
        const tempC = (temp - 32) / 1.8;
        tempDisplay.textContent = tempC.toFixed(1) + "C";
      } else {
        tempDisplay.textContent = temp + "°F";
      }

      const descDisplay = document.createElement("p");
      descDisplay.textContent = desc + " " + emoji;

      const dateDisplay = document.createElement("p");
      dateDisplay.textContent = date;

      smalls[i].textContent = "";
      smalls[i].append(tempDisplay);
      smalls[i].append(descDisplay);
      smalls[i].append(dateDisplay);
    }
  }
}

;// CONCATENATED MODULE: ./src/modules/weather.js
class Weather {
  constructor(json) {
    this.temp = json.currentConditions.temp;
    this.location = json.resolvedAddress;
    this.description = json.currentConditions.conditions;
    this.forecast = this.nextSevenDays(json);
    this.emoji = getWeatherEmoji(json.currentConditions.icon);
  }

  nextSevenDays(json) {
    const jsonDays = json.days;
    let days = [];
    for (let i = 1; i < 8; i++) {
      const thisDay = new SimpleWeather();
      const currJsonDay = jsonDays[i];
      thisDay.temp = currJsonDay.temp;
      thisDay.desc = currJsonDay.conditions;
      thisDay.date = currJsonDay.datetime;
      thisDay.emoji = getWeatherEmoji(currJsonDay.icon);
      days.push(thisDay);
    }
    return days;
  }
}

function getWeatherEmoji(iconName) {
  let emoji = "";
  switch (iconName) {
    case "snow":
      emoji = "🌨️";
      break;
    case "rain":
      emoji = "🌧️";
      break;
    case "fog":
      emoji = "🌫️";
      break;
    case "wind":
      emoji = "💨";
      break;
    case "cloudy":
      emoji = "🌥️";
      break;
    case "partly-cloudy-day":
      emoji = "🌤️";
      break;
    case "partly-cloudy-night":
      emoji = "🌙☁️";
      break;
    case "clear-day":
      emoji = "☀️";
      break;
    case "clear-night":
      emoji = "🌙";
      break;
  }
  return emoji;
}

class SimpleWeather {
  temp;
  desc;
  date;
  emoji;
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

;// CONCATENATED MODULE: ./src/modules/eventSetup.js



function setupListeners() {
  const submitBtn = document.querySelector(".submit");
  submitBtn.addEventListener("click", async () => {
    const locationInput = document.querySelector("input");
    const location = locationInput.value;
    DataManager.updateWeather(location);
  });

  const tempToggle = document.querySelector(".unitToggle");
  tempToggle.addEventListener("click", () => {
    const currUnit = tempToggle.textContent;
    if (currUnit == "C") {
      tempToggle.textContent = "°F";
    } else {
      tempToggle.textContent = "C";
    }
    HTMLGenerator.updateHTML();
  });
}

;// CONCATENATED MODULE: ./src/index.js



setupListeners();

/******/ })()
;
//# sourceMappingURL=main.js.map
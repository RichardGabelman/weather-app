import { DataManager } from "./dataManager";

export class HTMLGenerator {
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

import { DataManager } from "./dataManager";

export class HTMLGenerator {
  static updateHTML() {
    if (!DataManager.currentWeatherObject) {
      return;
    }
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
      const tempCelsius = (tempFahrenheit - 32)/1.8;
      tempDisplay.textContent = tempCelsius.toFixed(1) + "C";
    } else {
      tempDisplay.textContent = tempFahrenheit + "°F";
    }
    tempDisplay.classList.add("temp");

    const descriptionDisplay = document.createElement("p");
    descriptionDisplay.textContent = desc;

    card.textContent = "";
    card.appendChild(unitToggle);
    card.appendChild(addressDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(descriptionDisplay);
  }
}

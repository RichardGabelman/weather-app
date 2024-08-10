import { DataManager } from "./dataManager";

export class HTMLGenerator {
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

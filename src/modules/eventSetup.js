import { DataManager } from "./dataManager";
import { HTMLGenerator } from "./htmlGenerator";

export function setupListeners() {
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

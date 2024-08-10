import { DataManager } from "./dataManager";

export function setupForm() {
  const submitBtn = document.querySelector("button");
  submitBtn.addEventListener("click", async () => {
    const locationInput = document.querySelector("input");
    const location = locationInput.value;
    DataManager.updateWeather(location);
  });
}

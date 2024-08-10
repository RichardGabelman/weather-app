import { HTMLGenerator } from "./htmlGenerator";
import { Weather } from "./weather";
import { getWeatherData } from "./weatherAPI";

export class DataManager {
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

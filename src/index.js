import "./style.css";
import { getWeatherData } from "./modules/weatherAPI";
import { Weather } from "./modules/weather";

let json = await getWeatherData("Oceanside");
let currentWeather = new Weather(json);
console.log(currentWeather);

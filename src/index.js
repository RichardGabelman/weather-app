import "./style.css";
import { getWeatherData } from "./modules/weatherAPI";

getWeatherData("Oceanside").then(console.log);

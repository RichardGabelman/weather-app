/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// CONCATENATED MODULE: ./src/modules/weatherAPI.js
async function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=L9CTUTHMAGAWR5CNWQGG93NPC`;
  let response = await fetch(url, {mode: "cors"});
  return await response.json();
}
;// CONCATENATED MODULE: ./src/index.js



getWeatherData("Oceanside").then(console.log);

/******/ })()
;
//# sourceMappingURL=main.js.map
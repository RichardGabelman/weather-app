export async function getWeatherData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=L9CTUTHMAGAWR5CNWQGG93NPC`;
  let response = await fetch(url, { mode: "cors" });
  return await response.json();
}

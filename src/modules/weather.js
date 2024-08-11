export class Weather {
  constructor(json) {
    this.temp = json.currentConditions.temp;
    this.location = json.resolvedAddress;
    this.description = json.currentConditions.conditions;
    this.forecast = this.nextSevenDays(json);
    this.emoji = getWeatherEmoji(json.currentConditions.icon);
  }

  nextSevenDays(json) {
    const jsonDays = json.days;
    let days = [];
    for (let i = 1; i < 8; i++) {
      const thisDay = new SimpleWeather();
      const currJsonDay = jsonDays[i];
      thisDay.temp = currJsonDay.temp;
      thisDay.desc = currJsonDay.conditions;
      thisDay.date = currJsonDay.datetime;
      thisDay.emoji = getWeatherEmoji(currJsonDay.icon);
      days.push(thisDay);
    }
    return days;
  }
}

function getWeatherEmoji(iconName) {
  let emoji = "";
  switch (iconName) {
    case "snow":
      emoji = "🌨️";
      break;
    case "rain":
      emoji = "🌧️";
      break;
    case "fog":
      emoji = "🌫️";
      break;
    case "wind":
      emoji = "💨";
      break;
    case "cloudy":
      emoji = "🌥️";
      break;
    case "partly-cloudy-day":
      emoji = "🌤️";
      break;
    case "partly-cloudy-night":
      emoji = "🌙☁️";
      break;
    case "clear-day":
      emoji = "☀️";
      break;
    case "clear-night":
      emoji = "🌙";
      break;
  }
  return emoji;
}

class SimpleWeather {
  temp;
  desc;
  date;
  emoji;
}

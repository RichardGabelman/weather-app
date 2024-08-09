export class Weather {
  constructor(json) {
    this.temp = json.currentConditions.temp;
    this.location = json.resolvedAddress;
    this.description = json.description;
  }
}

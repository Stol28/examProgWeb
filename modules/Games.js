import { Country } from "./Country.js";

export class Game {
  constructor(countries) {
    this.countries = countries;
    this.countryIndex = 0;
    this.score = 0;
    this.currentCountry = new Country(this.countries[this.countryIndex]);
  }

  addPoint() {
    this.score++;
  }

  isGameOver() {
    return this.countryIndex >= this.countries.length;
  }

  displayNextCountry() {
    if (this.isGameOver()) {
      alert(`Game Over! Your score: ${this.score}`);
      return;
    }
    this.currentCountry = new Country(this.countries[this.countryIndex++]);
    this.currentCountry.displayFlag();
  }

  get currentScore() {
    return this.score;
  }
}

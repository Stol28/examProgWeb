"use strict";

import { Game } from "./modules/Games.js";
import { shuffle } from "lodash";

async function fetchCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();
  return shuffle(countries);
}

async function initGame() {
  const countries = await fetchCountries();
  const game = new Game(countries);
  game.currentCountry.displayFlag();

  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const scoreElement = document.getElementById("score");
  const highscoreElement = document.getElementById("highscore");

  const highscore = localStorage.getItem("highscore") || 0;
  highscoreElement.textContent = `Highscore: ${highscore}`;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const isCorrect = game.currentCountry.checkAnswer(input.value);
    if (isCorrect) {
      game.addPoint();
    }
    game.displayNextCountry();
    scoreElement.textContent = `Score: ${game.currentScore}`;

    if (game.isGameOver()) {
      if (game.currentScore > highscore) {
        localStorage.setItem("highscore", game.currentScore);
        highscoreElement.textContent = `Highscore: ${game.currentScore}`;
      }
      form.reset();
    }
  });
}

initGame();

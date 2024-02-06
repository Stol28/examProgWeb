"use strict";
import { shuffle } from "lodash";

async function fetchAndShuffleCountries() {
  try {
    // Récupération des données des pays depuis l'API
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const countries = await response.json();

    // Mélange des pays récupérés
    const shuffledCountries = shuffle(countries);

    console.log(shuffledCountries);
  } catch (error) {
    console.error("Erreur lors de la récupération des pays:", error);
  }
}

// Appel de la fonction pour récupérer et mélanger les pays
fetchAndShuffleCountries();

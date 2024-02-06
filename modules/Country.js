export class Country {
    constructor(countryData) {
      this.countryData = countryData;
      this.validAnswers = this.extractValidAnswers();
    }
  
    extractValidAnswers() {
      const translations = this.countryData.translations;
      const names = Object.values(translations).map(translation => translation.common.toLowerCase());
      return new Set(names);
    }
  
    checkAnswer(submittedAnswer) {
      return this.extractValidAnswers.has(submittedAnswer.toLowerCase());
    }
  
    get flag() {
      return this.countryData.flag;
    }
  
    displayFlag() {
      const flagElement = document.getElementById("flag");
      flagElement.innerHTML = `<h1>${this.flag}</h1>`;
    }
  }
  
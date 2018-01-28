class BasePage {
  fillTextField(text, field) {
    console.log(`Input '${text}' in the ${field}.`);
  }

  clickElement(element) {
    console.log(`Click ${element}.`);
  }

  getTextFromElement(element) {
    console.log(`Getting text from ${element}.`);
  }
}

module.exports = BasePage;

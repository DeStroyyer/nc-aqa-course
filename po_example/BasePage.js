class BasePage {
  constructor() {
    this._pageName = '';
  }

  _fillTextField(text, field) {
    console.log(`Input '${text}' in the ${field}.`);
  }

  _clickElement(element) {
    console.log(`Click ${element}.`);
  }

  _getTextFromElement(element) {
    console.log(`Getting text from ${element}.`);
  }

  _pageIsDisplayed() {
    console.log(`${this._pageName} page is displayed`);
  }
}

module.exports = BasePage;

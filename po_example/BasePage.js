const Header = require('./memberArea/partials/Header');

class BasePage {
  constructor() {
    this._pageName = '';
    this._header = new Header()
  }

  _pageIsDisplayed() {
    console.log(`${this._pageName} page is displayed`);
  }
}

module.exports = BasePage;

const CmsBasePage = require('./CmsBasePage');
const Header = require('../partials/Header');

class HomePage extends CmsBasePage {
  static visit() {
    console.log(`Navigating to the 'https://namecheap.com' URL directly.`);

    return new HomePage();
  }

  constructor() {
    super();
    this._pageName = 'Home';
    this.header = new Header();

    this._pageIsDisplayed();
  }
}

module.exports = HomePage;

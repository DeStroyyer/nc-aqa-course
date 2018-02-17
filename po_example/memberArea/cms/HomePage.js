const CmsBasePage = require('./CmsBasePage');
const DashboardPage = require('../ap/DashboardPage');

class HomePage extends CmsBasePage {
  static visit() {
    console.log(`Navigating to the 'https://namecheap.com' URL directly.`);

    return new HomePage();
  }

  constructor() {
    super();
    this._pageName = 'Home';
    this._pageIsDisplayed();
  }

  signIn(username, password) {
    this._header.signIn(username, password);

    return new DashboardPage();
  }
}

module.exports = HomePage;

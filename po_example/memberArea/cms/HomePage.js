const CmsBasePage = require('./CmsBasePage');

class HomePage extends CmsBasePage {
  static visit() {
    console.log(`Navigating to the 'https://namecheap.com' URL directly.`);
    return new HomePage();
  }

  constructor() {
    super();
    console.log(`Home page is displayed`);
  }
}

module.exports = HomePage;

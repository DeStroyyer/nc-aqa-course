const ApBasePage = require('./ApBasePage');
const testData = require('../../test.data');

class DashboardPagee extends ApBasePage {
  constructor() {
    super();
    this._pageName = 'Dashboard';
    this._welcomeTitle = `Welcome ${testData.firstName} ${testData.lastName}`;
    this._pageIsDisplayed();
  }

  getWelcomeMessage() {
    return this._welcomeTitle;
  }
}

module.exports = DashboardPagee;

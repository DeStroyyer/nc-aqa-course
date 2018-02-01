const BasePage = require('../../BasePage');
const DashboardPage = require('../ap/DashboardPage');

class Header extends BasePage {
  constructor() {
    super();

    this._usernameField = 'Username Field';
    this._passwordField = 'Password Field';
    this._signInLink = 'Sign In Link';
    this._signInButton = 'Sign In Button';
  }

  signIn(username, password) {
    console.log(`Hover over ${this._signInLink}`);
    this._fillTextField(username, this._usernameField);
    this._fillTextField(password, this._passwordField);
    this._clickElement(this._signInButton);

    return new DashboardPage();
  }

}

module.exports = Header;

const {fillTextField, clickElement} = require('../../helpers/common.helpers');

class Header {
  constructor() {
    this._usernameField = 'Username Field';
    this._passwordField = 'Password Field';
    this._signInLink = 'Sign In Link';
    this._signInButton = 'Sign In Button';
  }

  signIn(username, password) {
    console.log(`Hover over ${this._signInLink}`);
    fillTextField(username, this._usernameField);
    fillTextField(password, this._passwordField);
    clickElement(this._signInButton);

    return this;
  }

}

module.exports = Header;

# Protract Batsics

## Launch Application Under Test

1. CLone project with
`git clone git@github.com:tymfear/tour-of-heroes.git`
or
`git clone https://github.com/tymfear/tour-of-heroes.git`

2. Install dependencies with `npm i` 
3. Launch application with `npm start`
4. Check application is running on address `localhost:4200`

## Initiate project
1. Initiate a project with `npm init -y`
2. Install protractor with `npm i protractor`
3. Create `protractor.conf.js` file with the following content
```javascript
exports.config = {
  framework: 'jasmine', // test framwork is jasmine
  directConnect: true, // automatically lauch local browser and server
  specs: ['specs/**/*.spec.js'] // Search for tests in the specs folder
}
```
4. Create simple test to check if all is OK.
    1. Create `specs/test.spec.js` file.
    2. Add the following test:
    ```javascript
    it('should work', () => {
      expect(true).toBeTruthy();
    });
    ```
5. Add the `"test": "protractor"` scipt to `package.json`.
6. Launch test with `npm test`
    + You should get the following error:

    ```text
    Error message: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.
    ````
    It means that protractor cannot connect directly to browser, since there are no binaries.
7. Add the following script to `package.json`: `"pretest": "webdriver-manager update"`. It will automatically update webdriver binaries before each test execution.
8. Now it should be fine. Chrome should be started.

## Further configuration

1. Add `baseUrl: 'http://localhost:4200'` to config file. This will allow you to navigate to this url by default.
2. Add jasmine configuration to config
```js
jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },
```

## Create your first real test

0. Remove previousely created `test.spec.js` file.
1. Add new spec file `dashboard.spec.js` with the following content
```js
describe('Dashboard page', () => {
  it('should have correct title', async () => {
    await browser.get('/'); // Navigate to baseUrl

    /*
    Locate element by tag name. NOTE: no need of *await* word - it is synchronous operation.
     */
    const titleElement = browser.$('h1');

    /*
    Get text within the located element. getText() is async operation, so you need the *async* operator here.
     */
    const titleText = await titleElement.getText();

    /*
    Verify that title is correct
     */
    expect(titleText).toBe('Tour of Heroes');
  });
});
```

## Let's improve reporting

Now you have a base `dot` reporter of Jasmine. Lets make it more verbose.

1. Install the `jasmine-spec-reporter` package.
2. Import the reporter to the config file. Add to the top `const { SpecReporter } = require('jasmine-spec-reporter');`
3. Add the following function to config object
```js
exports.config = {
    // other config
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
```
4. Disable default reporter by adding the following key to `jasmineNodeOpts`: `print: function() {}`

That's better!

## Final config file
```js
const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
  framework: 'jasmine',
  baseUrl: 'http://localhost:4200',
  directConnect: true,
  specs: ['specs/**/*.spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  },
};
```

## Now you can start creating other specs!!!

# Happy testing!!!

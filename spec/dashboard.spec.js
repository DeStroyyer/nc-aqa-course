const HomePage = require('../po_example/memberArea/cms/HomePage');

describe('Dashboard page.', () => {
  it(`User's first and last name are displayed on the page.`, () => {
    const homePage = HomePage.visit();
  });
});

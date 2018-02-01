const HomePage = require('../po_example/memberArea/cms/HomePage');
const testData = require('../po_example/test.data');

describe('Dashboard page.', () => {
  let homePage;

  beforeAll(() => homePage = HomePage.visit());

  it(`[C3090999] User's first and last name are displayed on the page.`, () => {
    const dashboardPage = homePage.header.signIn(testData.username, testData.password);

    expect(dashboardPage.getWelcomeMessage())
      .toBe(`Welcome ${testData.firstName} ${testData.lastName}`);
  });
});

const request = require('request-promise');

function getRandomName(params) {
  return request(params);
}

describe(`API requests.`, () => {
  it('request random name wnd code is 200', async () => {
    const options = {
      method: 'GET',
      uri: 'http://faker.hook.io',
      resolveWithFullResponse: true,
    };

    const response = await getRandomName(options);

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeTruthy();
  });
});

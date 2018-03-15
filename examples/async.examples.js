const request = require('request-promise');

function getRandomName() {
  return request('http://faker.hook.io/');
}

async function correctUsageAsync() {
  console.log('start correct async');
  const name = await getRandomName();
  console.log('Correctly async got', name);
  console.log('finish correct async');
}

correctUsageAsync();

const request = require('request-promise');

function getRandomName() {
  return request('http://faker.hook.io/');
}

function incorrectUsage() {
  console.log('start incorrect');
  getRandomName().then(name => console.log('Incorrectly got', name));
  console.log('finish incorrect');
}

incorrectUsage();

function correctUsage() {
  console.log('start correct');
  getRandomName()
    .then(name => console.log('Correctly got', name))
    .then(() => console.log('finish correct'));
}

correctUsage();

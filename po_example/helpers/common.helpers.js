function fillTextField(text, field) {
  console.log(`Input '${text}' in the ${field}.`);
}

function clickElement(element) {
  console.log(`Click ${element}.`);
}

function getTextFromElement(element) {
  console.log(`Getting text from ${element}.`);
}

module.exports = {
  fillTextField,
  clickElement,
  getTextFromElement,
};

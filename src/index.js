import Base64 from 'crypto-js/enc-base64';
import utf8 from 'crypto-js/enc-utf8';

import './crypt';

const plainTextElement = document.querySelector(`#text`);
const secretTextElement = document.querySelector(`#secret`);
const cipherTextElement = document.querySelector(`#cipher`);

const encryptButton = document.querySelector(`#encrypt`);

const onInputChange = () => {
  const plaintText = plainTextElement.value;
  const secretText = secretTextElement.value;
  encryptButton.disabled = !(plaintText && secretText);
};

plainTextElement.addEventListener(`input`, onInputChange);
secretTextElement.addEventListener(`input`, onInputChange);

onInputChange();

console.log(Base64.stringify(utf8.parse(`Hello, crypto-js!`)));

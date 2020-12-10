import {encrypt} from './crypt';

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

encryptButton.addEventListener(`click`, (evt) => {
  evt.stopPropagation();
  evt.preventDefault();

  cipherTextElement.value = encrypt(plainTextElement.value, secretTextElement.value);
});

onInputChange();

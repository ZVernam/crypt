import utf8 from 'crypto-js/enc-utf8';
import aesCipher from 'crypto-js/aes';

// Encrypt
const MESSAGE = 'my message';
const KEY = 'secret key 123';
const cipher = aesCipher.encrypt(MESSAGE, KEY);
console.log(cipher);
const ciphertext = cipher.toString();
console.log(ciphertext);

// Decrypt
const bytes  = aesCipher.decrypt(ciphertext, KEY);
const originalText = bytes.toString(utf8);

console.log(originalText);

import Base64 from 'crypto-js/enc-base64';
import utf8 from 'crypto-js/enc-utf8';
import aesCipher from 'crypto-js/aes';

// Encrypt
const MESSAGE = 'my message';
const KEY = 'secret key 123';
const ciphertext = aesCipher.encrypt(MESSAGE, KEY);
console.log(Base64.stringify(ciphertext))

// Decrypt
const bytes  = aesCipher.decrypt(ciphertext, KEY);
const originalText = bytes.toString(utf8);

console.log(originalText);

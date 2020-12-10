import {decrypt, encrypt} from './crypt';
import Base64 from 'crypto-js/enc-base64';
import utf8 from 'crypto-js/enc-utf8';

// Encrypt
const MESSAGE = 'my message';
const KEY = 'secret key 123';
const cipher = encrypt(MESSAGE, KEY);
console.log(cipher);
console.log(`Ciphertext: ${Base64.stringify(cipher.ciphertext)}
key: ${cipher.key}
iv: ${cipher.iv}
salt: ${cipher.salt}
cipher algorithm: ${cipher.algorithm}
mode: ${cipher.mode}
padding: ${cipher.padding}
block size: ${cipher.blockSize}
formatter: ${cipher.formatter}
`);
const ciphertext = cipher.toString();
console.log(ciphertext);

// Decrypt
{
  const bytes = decrypt(ciphertext, KEY);
  const originalText = bytes.toString(utf8);
  console.log(originalText);
}

{
  const encrypted = `U2FsdGVkX19sIcAZ7HYDN1YP8yqbI5Q5Xu/85mA9aRhmrmkYtY2S1kvnetSI5hru`;
  const bytes = decrypt(encrypted, KEY);
  const originalText = bytes.toString(utf8);
  console.log(originalText);
}

// Parse/stringify example
console.log(Base64.stringify(utf8.parse(`Hello, crypto-js!`)));

import utf8 from 'crypto-js/enc-utf8';
import aesCipher from 'crypto-js/aes';
import Base64 from 'crypto-js/enc-base64';

// Encrypt
const MESSAGE = 'my message';
const KEY = 'secret key 123';
const cipher = aesCipher.encrypt(MESSAGE, KEY);
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
  const bytes = aesCipher.decrypt(ciphertext, KEY);
  const originalText = bytes.toString(utf8);
  console.log(originalText);
}

{
  const encrypted = `U2FsdGVkX19sIcAZ7HYDN1YP8yqbI5Q5Xu/85mA9aRhmrmkYtY2S1kvnetSI5hru`;
  const bytes = aesCipher.decrypt(encrypted, KEY);
  const originalText = bytes.toString(utf8);
  console.log(originalText);
}


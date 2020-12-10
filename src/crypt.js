import utf8 from 'crypto-js/enc-utf8';
import aesCipher from 'crypto-js/aes';

export const encrypt = (message, password) => aesCipher.encrypt(message, password).toString();

export const decrypt = (ciphertext, password) => aesCipher.decrypt(ciphertext, password).toString(utf8);

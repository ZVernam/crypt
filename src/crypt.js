import utf8 from 'crypto-js/enc-utf8';
import aesCipher from 'crypto-js/aes';

/*
 * AES Cipher defaults:
 *
 * Cipher: AES-256-CBC
 * Salt: Random and packed to response
 * Key, IV: Derived from password and salt (See https://www.openssl.org/docs/manmaster/man3/EVP_BytesToKey.html)
 * Output: base64 string with OpenSSL salted format (See http://justsolve.archiveteam.org/wiki/OpenSSL_salted_format)
 */


export const encrypt = (message, password) => aesCipher.encrypt(message, password).toString();

export const decrypt = (ciphertext, password) => aesCipher.decrypt(ciphertext, password).toString(utf8);

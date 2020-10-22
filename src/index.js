import Base64 from 'crypto-js/enc-base64';
import utf8 from 'crypto-js/enc-utf8';


console.log(Base64.stringify(utf8.parse(`Hello, crypto-js!`)));

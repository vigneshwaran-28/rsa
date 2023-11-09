const crypto = require("crypto");
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
  publicKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
});
console.log("private key",privateKey,'\n\npublic key',publicKey);


const crypto = require("crypto");
// const fs = require("fs");

// import crypto from 'crypto';

// Reading keys from files.
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQBmW1XglIDnlw02W+8stJFlHGk7w9rn10y68uwIFYcy9xuwrO+x
dK3m00yRAkIThaZHeW8oHIoeeByoTT+V3bMR2gXOzPyvsEnrCIYqCMKti/ld4JLB
W0wy4Ova3a7CSwMY8CXbTQdc9WXuPI+gLaZ5kjib7T3508Jj0pTNcUMizXY/riuv
rRurKAnfkaHsBbL2MlD89Raut7ofIUHoMzSUrbazouwQLnEYC5MHnG0C9frwU0Il
Sx51DEqngmB5W0ocKdfdFNoEKWYVBIHSv54EmqCHZtyRwB/igtQdwsKA917ZyHbE
tYgGRNOWUcEVqoHXMLzOsmZOvm5steS+4gJtAgMBAAECggEAAYsG9GfIubURQeyI
4oemWXvgKkJ9nlkkkvzuigCpFR+cj0FMK8SyinRNBzKdhGXTZ+hwwI4NlwAAjpj7
iGrbND2xMLjuZkemFaD/RMr1BGDD1aJ5E+kocOvrIlWNOOigl1OnfnLe1YvtiXXo
RGXryJFnwRIGiSmkGJUoISC//lpNt2+k03VR6BUNKfctrhIokercLzRMFXRYHim4
3lrBoegVCfyJgwNimrq3G5FyyHEgJGFZb5eTToZI4Q4Y0oCskdzvPAHi9fuGQuuU
tCKmT36umfzgWruFgQK9Y8Nh/zAnvGEDw4nUEjjXqrraCuS1hYnOD/kL7IjGWREL
r6rEAQKBgQCo/vtB2PEDZ1xjour8C7etE2oqQt043Y8RRNLoNHu+xTQMFCv/2eXZ
67A4cILkRqYJow/tQVEplDeFiHGpOAjNVrMr/9lltvCxPusQUx/NeVWF+VUzcmuz
7Q9Chtffe2bb+C6Q3p3yZyaQhEHPwdbjzdU8zXknmOmD46u2wEGyLQKBgQCbDY+b
TV52N6DVIZ1pcGlSkAO4VGXIomiC5DGUwlLt3YqFz8TJFvVBozSHmhCiKCAdenrU
IN04vS4O4ST1STnabgNXqzFbdgj3kkDs6HjVK6kYTvtJ3xpR6PN3B7Bj6QXoUE4z
fP/Y+haEehb/YqkED8AjTR1Js5PpBZHCBT75QQKBgE9YODu4UaBZfSVCrrVcAwb9
4JCrCBbU34EqISPo0FjHWiJ5rhbYBXUFlZ1KJgprqTVJHAc27ZZqAo9teoAK0Qcn
t8PmwflhpSxy8AagIIRmfWMDp58aD7tQiCOiD+TbmXWZ1rMp8lqHV7Huhr+2sOAQ
GhgMGOAgiTLlSA/rwGyZAoGAaG4dxs+5S43z+RiG2Lkpdr4gg0n0s8kO8vmWm0a2
bBbGcZGaTIX18Ztmid4uTckQuEoB6FWqKcjg+IyTQ9Fp8cAe6DEZMSyypWwP5oA8
wfaCESlA/mQRahGnyQeYufH8VJeh0/Pgrdbiy58fViqxA1dIZX5Ot5EHke56WV8H
JwECgYBa+TcNeZ9JTvSOTdFCYt3GZZHcozgQ8NBthw7dm3+5HHFmu5fOiadJfvkb
f0ZqWic2AzplEF8RkE8/WPM4n6/cbKB74tkVbgOzD9f1wCCxWAR03CPQHQtRlXeP
04edAVBlNcvLLLnb9iIz7VFM6rd9laiTp1P0KwUvMLtdVa0fLQ==
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBmW1XglIDnlw02W+8stJFl
HGk7w9rn10y68uwIFYcy9xuwrO+xdK3m00yRAkIThaZHeW8oHIoeeByoTT+V3bMR
2gXOzPyvsEnrCIYqCMKti/ld4JLBW0wy4Ova3a7CSwMY8CXbTQdc9WXuPI+gLaZ5
kjib7T3508Jj0pTNcUMizXY/riuvrRurKAnfkaHsBbL2MlD89Raut7ofIUHoMzSU
rbazouwQLnEYC5MHnG0C9frwU0IlSx51DEqngmB5W0ocKdfdFNoEKWYVBIHSv54E
mqCHZtyRwB/igtQdwsKA917ZyHbEtYgGRNOWUcEVqoHXMLzOsmZOvm5steS+4gJt
AgMBAAE=
-----END PUBLIC KEY-----`;

// const data = Buffer.from("My Name is MHamzaRajput");
console.log("came inside");

const data = { operator_id: "alpha636", page: 1, page_size: 100 };

// const data = {
//   operatorId: "alpha636",
//   providerName: "DC",
//   gameId: "200154",
//   userId: "3",
//   username: "testuser2",
//   platformId: "desktop",
//   lobby: false,
//   clientIp: "127.0.0.1",
//   currency: "INR",
//   balance: 99993,
//   redirectUrl: "link",
// };

// const data = {
//   operatorId: "alpha636",
//   token: "9db3c7c9-6aaa-441f-99bc-624d4ae2a8d6",
//   userId: "3",
// };

console.log(data);

// const signature = crypto.createSign('RSA-SHA256').update(JSON.stringify(data)).sign(privateKey, 'base64');

// const signature =
//   "byMYoU1abC/86EVvEbwNtumfgZnlbGaAwbeJ3qu668RCZRnkFv8B3fCRAzM9rDnDdjommrhK0B3BVmbpdCv6UzyY1avfxE2lbihvrF/LMkY4oKOyL8IJuGBbSLgzpI+hKYzcb+qD/En9ZAH0V4gNXh6RqI/XIgfWhB55zF9pBs4=";

// const verify = crypto.verify(
//   "RSA-SHA256",
//   Buffer.from(data),
//   publicKey,
//   Buffer.from(signature, "base64")
// );
// console.log("verfy done", verify);

// const { privateKey, publicKey } = crypto.generateKeyPairSync("ec", {
//   namedCurve: "sect239k1",
// });

const sign = crypto.createSign("RSA-SHA256");
sign.update(JSON.stringify(data));
const signature = sign.sign(privateKey, "base64");
console.log("signature da", signature);
const verify = crypto.createVerify("RSA-SHA256");
verify.update(JSON.stringify(data));
console.log(verify.verify(publicKey, signature, "base64"));
// console.log("Signing done", sign);
